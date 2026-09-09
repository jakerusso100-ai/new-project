// ---------------------------------------------------------------- INTERIOR GENERATOR
// Builds the glazing, decks, streets, procedural city blocks, landmark detail, transit and
// underground volumes from citadel_schematic.json. Everything generated here is fill: it
// inherits the placement class of the district it sits in and is tagged GENERATED in the
// inspector. Deterministic (seeded) so a rebuild gives the same city.
(function(){
const P = (DB.procedural||{});
const SEED = P.seed||1337;
let _s = SEED; const rnd=()=>{ _s=(_s*1103515245+12345)&0x7fffffff; return _s/0x7fffffff; };
const rr=(a,b)=>a+(b-a)*rnd();
const ENV = DB.height_envelope.table;
function env(r){ for(let i=0;i<ENV.length-1;i++){ const [r0,h0]=ENV[i],[r1,h1]=ENV[i+1]; if(r>=r0&&r<=r1) return h0+(h1-h0)*(r-r0)/(r1-r0);} return 0; }
const hullR=(z)=>Math.sqrt(Math.max(0,1-(z/0.10)**2));          // lower hull radius at depth z (z<0)
const lensTop=(r)=>{ // upper lens height at radius r (inverse of profile): sample from DOME-P profile
  const prof=DB.nodes.find(n=>n.id==='DOME-P').geometry.profile_r_over_R_at_dz.slice().sort((a,b)=>a[1]-b[1]); // by r asc
  if(r<=0.2) return 0.292-(0.292-prof[0][0])*(r/prof[0][1]);
  for(let i=0;i<prof.length-1;i++){ const [z0,r0]=prof[i],[z1,r1]=prof[i+1]; if(r>=r0&&r<=r1) return z0+(z1-z0)*(r-r0)/(r1-r0); }
  return 0; };
const NB={}; DB.nodes.forEach(n=>NB[n.id]=n);
const M=(o)=>new THREE.MeshStandardMaterial(Object.assign({roughness:0.75,metalness:0.08},o));
const COL={ hull:0xd9cfa8, road:0x2a3340, walk:0x3a4452, plaza:0xcfc9a8, water:0x3aa0c8, grass:0x6a9a4a, tree:0x3f7a3a,
  bldg:[0xe6dfc4,0xd8d2b6,0xcfd6c4,0xe9e4d2,0xd2cbb0,0xbfc9c0], cyan:0x5be0ff, glass:0xbfe6ef, deck:0x8a9097, rib:0x2b2f36, ind:0xb8b0a0, morty:0xd8c9a6 };
const IG=new THREE.Group(); IG.name='INTERIOR'; scene.add(IG); window.interiorGroup=IG;
const cat={}; ['glass','decks','streets','buildings','landmarks','transit','underground','pods','nature'].forEach(k=>{ cat[k]=new THREE.Group(); cat[k].name=k; IG.add(cat[k]); });
const tag=(obj,id,label)=>{ obj.userData.nodeId=id; obj.userData.generated=label; return obj; };
function meshAt(geo,mat,x,y,z,rz){ const m=new THREE.Mesh(geo,mat); m.position.set(x,y,z); if(rz) m.rotation.z=rz; return m; }

// ---------------- glass lens with ribs + hub + rim lights (main body and pods)
function lensShell(R,H,segs,scale,cx,cy,parentId){
  const g=new THREE.Group();
  const geo=new THREE.SphereGeometry(1,96,32,0,Math.PI*2,0,Math.PI/2); geo.rotateX(Math.PI/2); geo.scale(R,R,H);
  const glass=new THREE.MeshPhysicalMaterial({color:COL.glass,transmission:0.9,roughness:0.1,metalness:0,transparent:true,opacity:0.32,side:THREE.DoubleSide,thickness:0.02,depthWrite:false});
  g.add(tag(meshAt(geo,glass,cx,cy,0),parentId,'glazing'));
  // meridian ribs (segment seams, STL) — heavy dark structural ribs (S05E10 #14/#15)
  const ribMat=M({color:COL.rib,roughness:0.5,metalness:0.3});
  for(let i=0;i<segs;i++){ const a=i/segs*Math.PI*2; const pts=[]; for(let k=0;k<=24;k++){ const t=k/24*Math.PI/2; pts.push(new THREE.Vector3(cx+Math.cos(a)*R*Math.cos(t), cy+Math.sin(a)*R*Math.cos(t), H*Math.sin(t))); }
    g.add(tag(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,0.007*scale,8,false),ribMat),parentId,'structural rib')); }
  // hub at apex
  g.add(tag(meshAt(new THREE.CylinderGeometry(0.2*R,0.2*R,0.012*scale,48).rotateX(Math.PI/2),M({color:COL.hull}),cx,cy,H-0.004*scale),parentId,'apex hub'));
  // equator rim ring with cyan light strips
  g.add(tag(meshAt(new THREE.TorusGeometry(R,0.012*scale,8,128),M({color:COL.hull}),cx,cy,0),parentId,'rim'));
  for(let i=0;i<24;i++){ const a=i/24*Math.PI*2+0.05; const s=meshAt(new THREE.BoxGeometry(0.03*scale,0.08*scale,0.008*scale),new THREE.MeshStandardMaterial({color:COL.cyan,emissive:COL.cyan,emissiveIntensity:1.2}),cx+Math.cos(a)*R*1.005,cy+Math.sin(a)*R*1.005,0.01*scale,a); g.add(tag(s,parentId,'rim light')); }
  return g;
}
cat.glass.add(lensShell(1.0,0.292,8,1,0,0,'DOME-P'));

// ---------------- decks: main deck plate + sub-decks bounded by the hull, under-hub floors
function deckDisc(r,z,color,op,id,label,ri){ const geo=ri?new THREE.RingGeometry(ri,r,96):new THREE.CircleGeometry(r,96); const m=meshAt(geo,M({color,transparent:true,opacity:op,side:THREE.DoubleSide}),0,0,z); return tag(m,id,label); }
cat.decks.add(deckDisc(1.0,-0.002,COL.plaza,1.0,'SHELL-DRUM','main deck plate'));
(DB.deck_stack.levels||[]).forEach(L=>{ if(!L.id.startsWith('DK-')) return; const zt=L.z[1], zb=L.z[0]; const r=Math.min(L.extent_r[1], hullR(zb)); cat.decks.add(deckDisc(r, zb, COL.deck, 0.55, 'SHELL-DRUM', L.name+' floor ('+L.m[0]+' m)')); // service cores
  for(let i=0;i<6;i++){ const a=i/6*Math.PI*2+0.3; const rc=Math.min(0.55,r*0.8); cat.decks.add(tag(meshAt(new THREE.CylinderGeometry(0.02,0.02,zt-zb,16).rotateX(Math.PI/2),M({color:COL.deck}),Math.cos(a)*rc,Math.sin(a)*rc,(zt+zb)/2),'SHELL-DRUM','service core')); } });
// under-hub: cave floor, Drive void walkway
cat.decks.add(deckDisc(0.42,-0.105,COL.deck,0.6,'SHELL-UNDERHUB','under-hub ceiling'));
cat.decks.add(deckDisc(0.33,-0.22,COL.deck,0.6,'SHELL-UNDERHUB','cave base floor / Drive ceiling'));

// ---------------- streets: rings, radials, plaza, sidewalks
const roadMat=M({color:COL.road,roughness:0.95}); const walkMat=M({color:COL.walk,roughness:0.9});
const RINGS=DB.nodes.filter(n=>n.id.startsWith('CIRC-RING')).map(n=>n.geometry.radius);
const RAD=NB['CIRC-RADIALS'].geometry;
RINGS.forEach(r=>{ cat.streets.add(tag(meshAt(new THREE.RingGeometry(r-0.015,r+0.015,128),roadMat,0,0,0.002),'CIRC-RING-1','ring road')); cat.streets.add(tag(meshAt(new THREE.RingGeometry(r+0.015,r+0.022,128),walkMat,0,0,0.0015),'CIRC-RING-1','sidewalk')); cat.streets.add(tag(meshAt(new THREE.RingGeometry(r-0.022,r-0.015,128),walkMat,0,0,0.0015),'CIRC-RING-1','sidewalk')); });
for(let i=0;i<RAD.count;i++){ const a=(RAD.az_start+360*i/RAD.count)*Math.PI/180; const len=RAD.r_outer-RAD.r_inner; const m=meshAt(new THREE.BoxGeometry(len,RAD.width,0.003),roadMat,Math.cos(a)*(RAD.r_inner+len/2),Math.sin(a)*(RAD.r_inner+len/2),0.002,a); cat.streets.add(tag(m,'CIRC-RADIALS','radial avenue')); }
cat.streets.add(tag(meshAt(new THREE.CircleGeometry(0.16,96),M({color:COL.plaza,roughness:0.8}),0,0,0.003),'LM-CENTRAL-PLAZA','plaza paving'));
cat.streets.add(tag(meshAt(new THREE.RingGeometry(0.16,0.175,96),walkMat,0,0,0.0025),'LM-CENTRAL-PLAZA','plaza edge'));

// ---------------- landmark footprints (to keep procedural blocks out) + detail models
const LM=DB.nodes.filter(n=>n.kind==='landmark'&&n.position&&n.geometry&&(n.geometry.size||n.geometry.radius_top!==undefined||n.geometry.building_size));
const footprints=LM.map(n=>{ const g=n.geometry; const w=g.size?Math.max(g.size[0],g.size[1]):(g.building_size?g.wall_radius*2:(g.radius_bottom||0.1)*2); return {x:n.position[0],y:n.position[1],r:w/2+0.012}; });
footprints.push({x:0,y:0,r:0.19});
const bMat=(c)=>M({color:c});
function detail(n){ const g=new THREE.Group(); const [x,y,z]=n.position; const G=n.geometry; const lim=n.height_limit_U||env(Math.hypot(x,y))*0.95;
  const H=(v)=>Math.min(v,lim);
  switch(n.id){
    case 'LM-CENTRAL-MONUMENT': { const h=H(0.26); g.add(meshAt(new THREE.CylinderGeometry(0.045,0.05,0.01,32).rotateX(Math.PI/2),bMat(COL.plaza),x,y,0.005)); g.add(meshAt(new THREE.ConeGeometry(0.03,h,12).rotateX(Math.PI/2),bMat(0xf0ead6),x,y,h/2)); for(let k=0;k<4;k++){ const a=k*Math.PI/2; g.add(meshAt(new THREE.BoxGeometry(0.006,0.03,h*0.6),bMat(0xe0a060),x+Math.cos(a)*0.02,y+Math.sin(a)*0.02,h*0.3,a)); } break; }
    case 'LM-SPIRE-CLUSTER': { for(let k=0;k<5;k++){ const a=k/5*Math.PI*2; const rad=0.06; const h=H(0.26)*rr(0.6,1); g.add(meshAt(new THREE.ConeGeometry(0.018,h,8).rotateX(Math.PI/2),bMat(COL.bldg[k%6]),x+Math.cos(a)*rad,y+Math.sin(a)*rad,h/2)); g.add(meshAt(new THREE.BoxGeometry(0.004,0.004,h*0.7),new THREE.MeshStandardMaterial({color:COL.cyan,emissive:COL.cyan,emissiveIntensity:0.9}),x+Math.cos(a)*(rad+0.019),y+Math.sin(a)*(rad+0.019),h*0.35)); } break; }
    case 'LM-PRESIDENTIAL-BUILDING': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0]*0.7,G.size[1]*0.7,h*0.85),bMat(0xe9e4d2),x,y,h*0.425)); g.add(meshAt(new THREE.CylinderGeometry(0.06,0.06,h*0.15,48).rotateX(Math.PI/2),new THREE.MeshPhysicalMaterial({color:COL.glass,transparent:true,opacity:0.5,transmission:0.6,roughness:0.15}),x,y,h*0.925)); g.add(meshAt(new THREE.CylinderGeometry(0.062,0.062,0.006,48).rotateX(Math.PI/2),bMat(0xd0c8a8),x,y,h)); break; }
    case 'LM-PLAZA-DOME-BUILDING': { const h=H(G.size[2]); const r=G.size[0]/2; g.add(meshAt(new THREE.CylinderGeometry(r,r,h*0.6,48).rotateX(Math.PI/2),bMat(0xeae3cf),x,y,h*0.3)); g.add(meshAt(new THREE.SphereGeometry(r,48,24,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).scale(1,1,(h*0.4)/r),bMat(0xe0a050),x,y,h*0.6)); break; }
    case 'LM-COUNCIL-HALL': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h*0.8),bMat(0xdfe6d8),x,y,h*0.4)); g.add(meshAt(new THREE.BoxGeometry(G.size[0]*0.8,0.03,0.012),bMat(COL.plaza),x,y-G.size[1]/2-0.015,0.006)); g.add(meshAt(new THREE.SphereGeometry(0.025,24,12,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),bMat(0xc8d0c0),x+G.size[0]*0.3,y,h*0.8)); for(let k=-1;k<=1;k++) g.add(meshAt(new THREE.BoxGeometry(0.02,0.002,h*0.5),new THREE.MeshStandardMaterial({color:0xa02020}),x+k*0.04,y-G.size[1]/2-0.001,h*0.5)); break; }
    case 'LM-SIMPLE-RICKS': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(COL.ind),x,y,h/2,(n.azimuth||0)*Math.PI/180)); for(let k=0;k<3;k++) g.add(meshAt(new THREE.CylinderGeometry(0.008,0.008,h*1.6,12).rotateX(Math.PI/2),bMat(0x9a948a),x+0.06-k*0.05,y+0.05,h*0.8)); break; }
    case 'LM-FLAVOR-CORE': { g.add(meshAt(new THREE.CylinderGeometry(G.radius_top,G.radius_top,G.z_top,32).rotateX(Math.PI/2),new THREE.MeshPhysicalMaterial({color:COL.glass,transparent:true,opacity:0.5,transmission:0.5}),x,y,G.z_top/2+0.001)); g.add(meshAt(new THREE.CylinderGeometry(0.008,0.008,G.z_top*0.9,16).rotateX(Math.PI/2),bMat(0xbfc9d0),x,y,G.z_top*0.45)); break; }
    case 'LM-MEGAFRUIT-FARM': { const r=G.radius||0.1; for(let k=0;k<8;k++){ const a=k/8*Math.PI*2; g.add(meshAt(new THREE.CircleGeometry(r*0.35,24),M({color:k%2?0x7fa84f:0x9ab45a}),x+Math.cos(a)*r*0.6,y+Math.sin(a)*r*0.6,0.0035)); } g.add(meshAt(new THREE.CircleGeometry(r*0.25,32),M({color:COL.water}),x,y,0.004)); g.add(meshAt(new THREE.BoxGeometry(0.02,0.015,0.012),bMat(0xc8a060),x+r*0.5,y-r*0.5,0.006)); break; }
    case 'LM-WISHING-PORTAL': { g.add(meshAt(new THREE.CylinderGeometry(G.wall_radius,G.wall_radius,G.wall_height,64,1,true).rotateX(Math.PI/2),M({color:0x8a6a48,side:THREE.DoubleSide}),x,y,G.wall_height/2)); g.add(meshAt(new THREE.BoxGeometry(...G.building_size),bMat(0x9a7a58),x,y,G.building_size[2]/2)); g.add(meshAt(new THREE.CircleGeometry(0.018,32),new THREE.MeshStandardMaterial({color:0x40ff70,emissive:0x40ff70,emissiveIntensity:1.5}),x+0.03,y-0.03,0.002)); break; }
    default: { if(G.size){ const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(n.kind==='landmark'?0xe6dfc4:COL.ind),x,y,h/2,(n.azimuth||0)*Math.PI/180)); g.add(meshAt(new THREE.BoxGeometry(G.size[0]*0.9,0.003,0.006),new THREE.MeshStandardMaterial({color:COL.cyan,emissive:COL.cyan,emissiveIntensity:0.8}),x,y-G.size[1]/2-0.001,h*0.4)); } }
  }
  g.traverse(o=>{ o.userData.nodeId=n.id; o.userData.generated='landmark detail'; }); return g;
}
LM.forEach(n=>{ if(n.geometry.type==='room') return; cat.landmarks.add(detail(n)); });
// water + trees in the plaza
cat.nature.add(tag(meshAt(new THREE.CircleGeometry(0.06,48),M({color:COL.water,roughness:0.2,metalness:0.3}),-0.11,0.04,0.0035),'LM-CORE-WATER','pond'));

// ---------------- procedural blocks per district
const FAM={
  'DIST-CIVIC-CORE':{density:0.55,hf:[0.35,0.9],fp:[0.02,0.04],shape:'tower',col:[0xe9e4d2,0xdfe6d8,0xe6dfc4]},
  'DIST-COMMERCIAL-RING':{density:0.85,hf:[0.25,0.6],fp:[0.014,0.03],shape:'mixed',col:COL.bldg},
  'DIST-RICK-RESIDENTIAL':{density:0.6,hf:[0.1,0.3],fp:[0.02,0.035],shape:'round',col:[0xe9e4d2,0xd8d2b6,0xcfd6c4]},
  'DIST-EAST-SANCHEZ-HEIGHTS':{density:0.75,hf:[0.2,0.5],fp:[0.016,0.03],shape:'mixed',col:COL.bldg},
  'DIST-INDUSTRIAL':{density:0.45,hf:[0.06,0.16],fp:[0.04,0.08],shape:'box',col:[COL.ind,0xa8a090,0xc0b8a8]},
  'DIST-MORTYTOWN':{density:0.95,hf:null,habs:[0.015,0.04],fp:[0.012,0.02],shape:'box',col:[COL.morty,0xc9b892,0xd0c4a8]},
  'DIST-CONSTRUCTION':{density:0.5,hf:[0.2,0.5],fp:[0.02,0.035],shape:'scaffold',col:[0xbbb5a0]},
  'GENERIC':{density:0.65,hf:[0.1,0.3],fp:[0.016,0.03],shape:'mixed',col:COL.bldg},
};
const sectors=DB.nodes.filter(n=>n.kind==='district'&&n.geometry&&n.geometry.type==='sector'&&n.id!=='DIST-BIG-MORTY');
function districtAt(r,azDeg){ for(const s of sectors){ const g=s.geometry; let a0=g.az_start,a1=g.az_end,a=azDeg; if(a1>360&&a<a0) a+=360; if(r>=g.r_inner&&r<=g.r_outer&&a>=a0&&a<=a1) return s; } return null; }
const boxGeo=new THREE.BoxGeometry(1,1,1).translate(0,0,0.5); const cylGeo=new THREE.CylinderGeometry(0.5,0.5,1,12).rotateX(Math.PI/2).translate(0,0,0.5);
const inst=[]; // {geo,x,y,az,sx,sy,h,col,id}
function place(r,azDeg,fam,id,scale,cx,cy,envFn){
  const a=azDeg*Math.PI/180; const x=cx+Math.cos(a)*r*scale, y=cy+Math.sin(a)*r*scale;
  const e=envFn(r); if(e<=0.012) return;
  let h = fam.hf ? e*rr(fam.hf[0],fam.hf[1]) : rr(fam.habs[0],fam.habs[1]); h=Math.min(h,e*0.95)*scale; if(h<0.006*scale) h=0.006*scale;
  const fp=rr(fam.fp[0],fam.fp[1])*scale; const col=fam.col[Math.floor(rnd()*fam.col.length)];
  const round = fam.shape==='round' || (fam.shape==='mixed'&&rnd()<0.3) || (fam.shape==='tower'&&rnd()<0.5);
  inst.push({geo:round?'cyl':'box',x,y,az:a,sx:fp,sy:fp*rr(0.6,1.2),h,col,id,scaffold:fam.shape==='scaffold'});
  if(fam.shape==='tower'&&rnd()<0.4) inst.push({geo:'cyl',x,y,az:a,sx:fp*0.35,sy:fp*0.35,h:h*1.25,col:0xf0ead6,id});
}
function fillBody(scale,cx,cy,envFn,famFor,rmin,rmax,ringRadii,radialCount,exclude){
  const step=0.045; for(let r=rmin;r<rmax;r+=step){ const n=Math.max(8,Math.round(2*Math.PI*r/step)); for(let k=0;k<n;k++){ const az=(k+rnd()*0.6)/n*360; const rj=r+rr(-0.012,0.012);
    if(ringRadii.some(q=>Math.abs(rj-q)<0.024)) continue; const radStep=360/radialCount; const dAz=Math.abs(((az%radStep)+radStep)%radStep-0)%radStep; if(Math.min(dAz,radStep-dAz)*Math.PI/180*rj<0.022) continue;
    const a=az*Math.PI/180; const wx=cx+Math.cos(a)*rj*scale, wy=cy+Math.sin(a)*rj*scale; if(exclude.some(f=>Math.hypot(wx-f.x,wy-f.y)<f.r)) continue;
    const fam=famFor(rj,az); if(!fam) continue; if(rnd()>fam.density) continue; place(rj,az,fam,fam.id||'GENERATED',scale,cx,cy,envFn); } }
}
fillBody(1,0,0,env,(r,az)=>{ if(r<0.19) return null; const d=districtAt(r,az); if(d&&d.id==='DIST-AGRICULTURAL') return null; const f=FAM[d?d.id:'GENERIC']||FAM.GENERIC; return Object.assign({id:d?d.id:'GENERIC'},f); },0.19,0.985,RINGS,RAD.count,footprints);
// pods: same generator at 0.592 scale; Mortyburg (DOME-MB) is a Morty town
DB.nodes.filter(n=>n.id.startsWith('DOME-S')||n.id==='DOME-MB').filter(n=>n.geometry.type==='lens').forEach(pod=>{
  const [px,py]=pod.position; const s=pod.geometry.radius; const penv=(r)=>env(r)*(pod.geometry.top_height/0.292)*(1/s)*s; // proportional
  const fam=pod.id==='DOME-MB'?Object.assign({id:pod.id},FAM['DIST-MORTYTOWN']):Object.assign({id:pod.id},FAM.GENERIC);
  cat.pods.add(lensShell(s,pod.geometry.top_height,8,s,px,py,pod.id));
  cat.pods.add(tag(meshAt(new THREE.CircleGeometry(s*0.999,96),M({color:COL.plaza}),px,py,-0.002),pod.id,'pod deck'));
  cat.pods.add(tag(meshAt(new THREE.RingGeometry(s*0.5-0.008,s*0.5+0.008,96),roadMat,px,py,0.002),pod.id,'pod ring road'));
  cat.pods.add(tag(meshAt(new THREE.CircleGeometry(s*0.12,48),M({color:COL.plaza}),px,py,0.003),pod.id,'pod plaza'));
  fillBody(s,px,py,(r)=>penv(r),(r,az)=>fam,0.14,0.97,[0.5],6,[]);
});
// instanced meshes
const byGeo={box:[],cyl:[]}; inst.forEach(i=>byGeo[i.geo].push(i));
for(const k in byGeo){ const arr=byGeo[k]; if(!arr.length) continue; const im=new THREE.InstancedMesh(k==='box'?boxGeo:cylGeo, M({color:0xffffff,roughness:0.8}), arr.length); const mtx=new THREE.Matrix4(), q=new THREE.Quaternion(), e=new THREE.Euler();
  arr.forEach((b,i)=>{ e.set(0,0,b.az); q.setFromEuler(e); mtx.compose(new THREE.Vector3(b.x,b.y,0), q, new THREE.Vector3(b.sx,b.sy,b.h)); im.setMatrixAt(i,mtx); im.setColorAt(i,new THREE.Color(b.col)); });
  im.instanceMatrix.needsUpdate=true; if(im.instanceColor) im.instanceColor.needsUpdate=true; im.userData.nodeId='GENERATED-BLOCKS'; im.userData.generated='procedural blocks ('+arr.length+' '+k+')'; cat.buildings.add(im); }
// scaffolding wireframes for construction zone
inst.filter(i=>i.scaffold).forEach(b=>{ const m=meshAt(new THREE.BoxGeometry(b.sx*1.15,b.sy*1.15,b.h*1.3).translate(0,0,b.h*0.65),new THREE.MeshBasicMaterial({color:0xffa040,wireframe:true,transparent:true,opacity:0.5}),b.x,b.y,0,b.az); cat.buildings.add(tag(m,'DIST-CONSTRUCTION','scaffolding')); });
// trees: plaza ring, Rick residential, farm
const treeGeo=new THREE.ConeGeometry(0.006,0.018,7).rotateX(Math.PI/2).translate(0,0,0.009); const trees=[];
for(let k=0;k<40;k++){ const a=k/40*Math.PI*2; trees.push([Math.cos(a)*0.165,Math.sin(a)*0.165]); }
const farm=NB['LM-MEGAFRUIT-FARM']; for(let k=0;k<60;k++){ const a=rnd()*Math.PI*2, d=0.04+rnd()*0.07; trees.push([farm.position[0]+Math.cos(a)*d,farm.position[1]+Math.sin(a)*d]); }
for(let k=0;k<120;k++){ const az=rr(30,90), r=rr(0.62,0.93); const a=az*Math.PI/180; trees.push([Math.cos(a)*r,Math.sin(a)*r]); }
const tim=new THREE.InstancedMesh(treeGeo,M({color:COL.tree}),trees.length); const tm=new THREE.Matrix4(); trees.forEach((t,i)=>{ tm.makeTranslation(t[0],t[1],0.003); tim.setMatrixAt(i,tm); }); tim.instanceMatrix.needsUpdate=true; tim.userData.nodeId='PROP-STREET-FURNITURE'; tim.userData.generated='trees'; cat.nature.add(tim);

// ---------------- transit: rail loop columns, tramway columns, atrium walkway tiers, elevated tube, hover lanes
const colMat=M({color:0x9aa0aa}); const rail=NB['CIRC-RAIL-LOOP'].geometry;
for(let i=0;i<45;i++){ const a=i/45*Math.PI*2; cat.transit.add(tag(meshAt(new THREE.CylinderGeometry(0.006,0.006,rail.z,10).rotateX(Math.PI/2),colMat,Math.cos(a)*rail.radius,Math.sin(a)*rail.radius,rail.z/2),'CIRC-RAIL-LOOP','column')); }
cat.transit.add(tag(meshAt(new THREE.TorusGeometry(rail.radius,0.006,6,160),new THREE.MeshStandardMaterial({color:COL.cyan,emissive:COL.cyan,emissiveIntensity:0.6}),0,0,rail.z),'CIRC-RAIL-LOOP','track guide'));
const tram=NB['CIRC-TRAM-PLAZA'].geometry; for(let i=0;i<16;i++){ const a=i/16*Math.PI*2; cat.transit.add(tag(meshAt(new THREE.CylinderGeometry(0.004,0.004,tram.z,8).rotateX(Math.PI/2),colMat,Math.cos(a)*tram.radius,Math.sin(a)*tram.radius,tram.z/2),'CIRC-TRAM-PLAZA','column')); }
const tiers=new THREE.Group(); [[0.2,0.04],[0.24,0.08],[0.28,0.12]].forEach(([r,z])=>{ tiers.add(tag(meshAt(new THREE.TorusGeometry(r,0.006,6,128),M({color:0xe9e4d2}),0,0,z),'CIRC-CORE-WALKWAYS','walkway tier')); }); tiers.name='tiers'; cat.transit.add(tiers); window.__tiers=tiers;
// hover lanes: faint rings
[0.3,0.6].forEach(r=>cat.transit.add(tag(meshAt(new THREE.TorusGeometry(r,0.003,4,128),new THREE.MeshBasicMaterial({color:COL.cyan,transparent:true,opacity:0.25}),0,0,0.07),'CIRC-HOVER-BAND','hover lane')));

// ---------------- underground: cave, Drive void, walkway, chute
const ug=NB['UG-PORTAL-FLUID'].geometry; cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(ug.radius,ug.radius*0.9,ug.z_top-ug.z_bottom,24,1,true).rotateX(Math.PI/2),M({color:0x6b5a48,side:THREE.BackSide,roughness:1}),NB['UG-PORTAL-FLUID'].position[0],NB['UG-PORTAL-FLUID'].position[1],(ug.z_top+ug.z_bottom)/2),'UG-PORTAL-FLUID','cave wall'));
cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(0.05,0.06,0.07,32).rotateX(Math.PI/2),new THREE.MeshStandardMaterial({color:0x40ff70,emissive:0x20c050,emissiveIntensity:0.6,transparent:true,opacity:0.8}),NB['UG-PORTAL-FLUID'].position[0],NB['UG-PORTAL-FLUID'].position[1],ug.z_bottom+0.035),'UG-PORTAL-FLUID','central vat'));
const dd=NB['UG-DIM-DRIVE'].geometry; cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(dd.radius_top,dd.radius_bottom,dd.z_top-dd.z_bottom,48,1,true).rotateX(Math.PI/2),M({color:0x1b2028,side:THREE.BackSide,roughness:0.9}),0,0,(dd.z_top+dd.z_bottom)/2),'UG-DIM-DRIVE','Drive void wall'));
cat.underground.add(tag(meshAt(new THREE.BoxGeometry(0.5,0.05,0.008),M({color:0x9aa0aa}),0,0,-0.33),'UG-DIM-DRIVE','suspended walkway'));
cat.underground.add(tag(meshAt(new THREE.TorusKnotGeometry(0.05,0.006,64,8,2,5),new THREE.MeshStandardMaterial({color:0xffe060,emissive:0xffc020,emissiveIntensity:1}),-0.12,0.06,-0.3),'UG-DIM-DRIVE','portal-array display'));

// ---------------- arms: deck road + rail spur guide
DB.nodes.filter(n=>n.id.startsWith('ARM-')).forEach(n=>{ const pts=n.geometry.points; const a=Math.atan2(pts[0][1],pts[0][0]); const r0=Math.hypot(pts[0][0],pts[0][1]), r1=Math.hypot(pts[2][0],pts[2][1]); const len=r1-r0; cat.streets.add(tag(meshAt(new THREE.BoxGeometry(len,0.05,0.003),roadMat,Math.cos(a)*(r0+len/2),Math.sin(a)*(r0+len/2),0.102,a),n.id,'arm deck road')); });

// ---------------- UI + visibility
const panel=document.createElement('div'); panel.innerHTML='<h2>Interior (generated)</h2>'+Object.keys(cat).map(k=>`<label class="row"><input type="checkbox" data-int="${k}" checked> ${k}</label>`).join('')+'<div class="sub">Generated fill inherits the placement class of its district; the inspector labels it GENERATED.</div>';
document.getElementById('placements').parentNode.insertBefore(panel, document.getElementById('placements').nextSibling.nextSibling);
panel.querySelectorAll('[data-int]').forEach(e=>e.addEventListener('change',ev=>{ cat[ev.target.dataset.int].visible=ev.target.checked; }));
const HIDE=['DOME-P','DOME-P-HUB','DOME-S1','DOME-S2','DOME-MB','DOME-S1-HUB','DOME-S2-HUB','DOME-MB-HUB','LM-CORE-WATER','LM-CENTRAL-PLAZA','CIRC-RING-1','CIRC-RING-2','CIRC-RING-3','CIRC-RADIALS'].concat(LM.filter(n=>n.geometry.type!=='room').map(n=>n.id));
const _rv=refreshVisibility; window.refreshVisibility=function(){ _rv(); const st=stateSel.value; const intact=['DS-01','DS-02','DS-03','DS-04','DS-05','all'].includes(st); IG.visible=intact; const cut=document.getElementById('cut').checked; cat.glass.visible=!cut&&document.querySelector('[data-int=glass]').checked; if(window.__tiers) window.__tiers.visible=['DS-01','DS-02','all'].includes(st); HIDE.forEach(id=>{ if(groups[id]) groups[id].visible=false; }); };
[stateSel, document.getElementById('cut'), ...document.querySelectorAll('[data-layer],[data-placement]')].forEach(e=>e.addEventListener('change', ()=>window.refreshVisibility()));
window.refreshVisibility();
// picking: include interior
const _castAt=castAt; window.castAt=function(e){ const r=canvas.getBoundingClientRect(); mouse.x=((e.clientX-r.left)/r.width)*2-1; mouse.y=-((e.clientY-r.top)/r.height)*2+1; ray.setFromCamera(mouse,camera); const hits=ray.intersectObjects([...Object.values(groups).filter(g=>g.visible), IG], true); for(const h of hits){ let o=h.object; while(o&&!o.userData.nodeId) o=o.parent; if(o){ window.__lastGenerated=o.userData.generated||null; return o.userData.nodeId; } } return null; };
console.log('interior built:', inst.length, 'blocks');
})();
