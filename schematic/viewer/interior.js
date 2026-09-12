// ---------------------------------------------------------------- INTERIOR GENERATOR (v2.4)
// Builds glazing, decks, streets, procedural city blocks, landmark detail, transit, underground
// and pods from citadel_schematic.json. Everything here is fill: it inherits the placement class of
// the district it sits in and is tagged GENERATED in the inspector. Deterministic (procedural.seed).
// v2.4: blocks are packed into polar cells that are clipped exactly to the road, rail and landmark
// footprints, so nothing intersects; window.__auditInterior() re-checks that in the running scene.
(function(){
const P = (DB.procedural||{}); let _s = P.seed||1337;
const rnd=()=>{ _s=(_s*1103515245+12345)&0x7fffffff; return _s/0x7fffffff; }; const rr=(a,b)=>a+(b-a)*rnd(); const pick=a=>a[Math.floor(rnd()*a.length)];
const PROF=[[0,0.292],[0.2,0.285],[0.68,0.204],[0.76,0.177],[0.83,0.149],[0.88,0.122],[0.90,0.108],[1.0,0]];
const lensTop=r=>{ if(r>=1) return 0; for(let i=0;i<PROF.length-1;i++){ const [r0,z0]=PROF[i],[r1,z1]=PROF[i+1]; if(r>=r0&&r<=r1) return z0+(z1-z0)*(r-r0)/(r1-r0);} return 0; };
const hullR=z=>Math.sqrt(Math.max(0,1-(z/0.10)**2));
const NB={}; DB.nodes.forEach(n=>NB[n.id]=n);
const M=o=>new THREE.MeshStandardMaterial(Object.assign({roughness:0.7,metalness:0.08},o));
const EM=(c,i)=>new THREE.MeshStandardMaterial({color:c,emissive:c,emissiveIntensity:i||1});
const COL={ hull:0xd9cfa8, road:0x262e3a, walk:0x3d4756, plaza:0xd6d0b0, water:0x3aa0c8, tree:0x3f7a3a, cyan:0x5be0ff, magenta:0xff4fd8, glass:0xcfeaf0, deck:0x8a9097, rib:0x2b2f36, ind:0xb8b0a0, morty:0xd8c9a6,
  bldg:[0xe6dfc4,0xd8d2b6,0xcfd6c4,0xe9e4d2,0xd2cbb0,0xbfc9c0,0xbfe0d8,0xa8d4cc,0xc9c2a0] };
const IG=new THREE.Group(); IG.name='INTERIOR'; scene.add(IG); window.interiorGroup=IG;
const cat={}; ['glass','decks','streets','buildings','landmarks','transit','underground','pods','nature','labels'].forEach(k=>{ cat[k]=new THREE.Group(); cat[k].name=k; IG.add(cat[k]); });
const tag=(o,id,label)=>{ o.userData.nodeId=id; o.userData.generated=label; return o; };
const meshAt=(geo,mat,x,y,z,rz)=>{ const m=new THREE.Mesh(geo,mat); m.position.set(x,y,z); if(rz) m.rotation.z=rz; return m; };
scene.add(new THREE.HemisphereLight(0xffe2b0,0x223344,0.3)); scene.children.filter(o=>o.isAmbientLight).forEach(o=>o.intensity=0.3); renderer.toneMapping=THREE.ACESFilmicToneMapping; renderer.toneMappingExposure=0.8; renderer.outputEncoding=THREE.sRGBEncoding;

// road geometry constants (U): ring road half 0.015 + sidewalk 0.007 + clearance 0.003
const ROAD_HALF=0.015, WALK=0.007, CLEAR=0.003, BAND=ROAD_HALF+WALK+CLEAR; // 0.025
const RINGS=DB.nodes.filter(n=>n.id.startsWith('CIRC-RING')).map(n=>n.geometry.radius); const RAD=NB['CIRC-RADIALS'].geometry;
const RAIL=NB['CIRC-RAIL-LOOP'].geometry, TRAM=NB['CIRC-TRAM-PLAZA'].geometry;

// ---------------- glazing (main body + pods)
function lensShell(R,H,segs,scale,cx,cy,id){
  const g=new THREE.Group();
  const geo=new THREE.SphereGeometry(1,96,32,0,Math.PI*2,0,Math.PI/2); geo.rotateX(Math.PI/2); geo.scale(R,R,H);
  const glass=new THREE.MeshPhysicalMaterial({color:COL.glass,transmission:0.92,roughness:0.08,metalness:0,transparent:true,opacity:0.28,side:THREE.DoubleSide,depthWrite:false});
  if(!MESH_B64) g.add(tag(meshAt(geo,glass,cx,cy,0),id,'glazing'));
  const ribMat=M({color:COL.rib,roughness:0.5,metalness:0.3}); const inset=0.009*scale;
  for(let i=0;i<segs;i++){ const a=i/segs*Math.PI*2; const pts=[]; for(let k=0;k<=24;k++){ const t=k/24*Math.PI/2; pts.push(new THREE.Vector3(cx+Math.cos(a)*(R-inset)*Math.cos(t), cy+Math.sin(a)*(R-inset)*Math.cos(t), (H-inset)*Math.sin(t))); }
    g.add(tag(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),24,0.007*scale,8,false),ribMat),id,'structural rib')); }
  for(const f of [0.45,0.75]){ const pts=[]; const zz=(H-inset)*Math.sqrt(1-f*f); for(let k=0;k<=96;k++){ const a=k/96*Math.PI*2; pts.push(new THREE.Vector3(cx+Math.cos(a)*(R-inset)*f,cy+Math.sin(a)*(R-inset)*f,zz)); } g.add(tag(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts,true),96,0.004*scale,6,true),ribMat),id,'ring purlin')); }
  if(!MESH_B64){ g.add(tag(meshAt(new THREE.CylinderGeometry(0.2*R,0.2*R,0.012*scale,48).rotateX(Math.PI/2),M({color:COL.hull}),cx,cy,H-0.004*scale),id,'apex hub'));
    g.add(tag(meshAt(new THREE.TorusGeometry(R,0.012*scale,8,128),M({color:COL.hull}),cx,cy,0),id,'rim'));
    for(let i=0;i<24;i++){ const a=i/24*Math.PI*2+0.05; g.add(tag(meshAt(new THREE.BoxGeometry(0.03*scale,0.08*scale,0.008*scale),EM(COL.cyan,1.2),cx+Math.cos(a)*R*1.005,cy+Math.sin(a)*R*1.005,0.01*scale,a),id,'rim light')); } }
  return g;
}
cat.glass.add(lensShell(1.0,0.292,8,1,0,0,'DOME-P'));

// ---------------- decks
const deckDisc=(r,z,color,op,id,label)=>tag(meshAt(new THREE.CircleGeometry(r,96),M({color,transparent:op<1,opacity:op,side:THREE.DoubleSide}),0,0,z),id,label);
cat.decks.add(deckDisc(1.0,-0.002,COL.plaza,1.0,'SHELL-DRUM','main deck plate'));
(DB.deck_stack.levels||[]).forEach(L=>{ if(!L.id.startsWith('DK-')) return; const zt=L.z[1], zb=L.z[0]; const r=Math.min(L.extent_r[1], hullR(zb)); cat.decks.add(deckDisc(r, zb, COL.deck, 0.55, 'SHELL-DRUM', L.name+' floor ('+L.m[0]+' m)'));
  for(let i=0;i<6;i++){ const a=i/6*Math.PI*2+0.3; const rc=Math.min(0.55,r*0.8); cat.decks.add(tag(meshAt(new THREE.CylinderGeometry(0.02,0.02,zt-zb,16).rotateX(Math.PI/2),M({color:COL.deck}),Math.cos(a)*rc,Math.sin(a)*rc,(zt+zb)/2),'SHELL-DRUM','service core')); } });
cat.decks.add(deckDisc(0.42,-0.105,COL.deck,0.6,'SHELL-UNDERHUB','under-hub ceiling'));
cat.decks.add(deckDisc(0.33,-0.22,COL.deck,0.6,'SHELL-UNDERHUB','cave floor / Drive ceiling'));

// ---------------- streets
const roadMat=M({color:COL.road,roughness:0.95}); const walkMat=M({color:COL.walk,roughness:0.9});
RINGS.forEach(r=>{ cat.streets.add(tag(meshAt(new THREE.RingGeometry(r-ROAD_HALF,r+ROAD_HALF,160),roadMat,0,0,0.002),'CIRC-RING-1','ring road'));
  cat.streets.add(tag(meshAt(new THREE.RingGeometry(r+ROAD_HALF,r+ROAD_HALF+WALK,160),walkMat,0,0,0.0015),'CIRC-RING-1','sidewalk')); cat.streets.add(tag(meshAt(new THREE.RingGeometry(r-ROAD_HALF-WALK,r-ROAD_HALF,160),walkMat,0,0,0.0015),'CIRC-RING-1','sidewalk')); });
for(let i=0;i<RAD.count;i++){ const a=(RAD.az_start+360*i/RAD.count)*Math.PI/180; const len=RAD.r_outer-RAD.r_inner; cat.streets.add(tag(meshAt(new THREE.BoxGeometry(len,RAD.width,0.003),roadMat,Math.cos(a)*(RAD.r_inner+len/2),Math.sin(a)*(RAD.r_inner+len/2),0.002,a),'CIRC-RADIALS','radial avenue'));
  cat.streets.add(tag(meshAt(new THREE.BoxGeometry(len,RAD.width+2*WALK,0.002),walkMat,Math.cos(a)*(RAD.r_inner+len/2),Math.sin(a)*(RAD.r_inner+len/2),0.0015,a),'CIRC-RADIALS','sidewalk')); }
const PLAZA_R=NB['LM-CENTRAL-PLAZA'].geometry.radius;
cat.streets.add(tag(meshAt(new THREE.CircleGeometry(PLAZA_R,96),M({color:COL.plaza,roughness:0.8}),0,0,0.003),'LM-CENTRAL-PLAZA','plaza paving'));
cat.streets.add(tag(meshAt(new THREE.RingGeometry(PLAZA_R,PLAZA_R+0.015,96),walkMat,0,0,0.0025),'LM-CENTRAL-PLAZA','plaza edge'));
const lampGeo=new THREE.CylinderGeometry(0.0012,0.0012,0.012,6).rotateX(Math.PI/2).translate(0,0,0.006); const lamps=[];
RINGS.forEach(r=>{ const n=Math.round(2*Math.PI*r/0.03); for(let k=0;k<n;k++){ const a=k/n*Math.PI*2; lamps.push([Math.cos(a)*(r+ROAD_HALF+0.004),Math.sin(a)*(r+ROAD_HALF+0.004)]); lamps.push([Math.cos(a)*(r-ROAD_HALF-0.004),Math.sin(a)*(r-ROAD_HALF-0.004)]); } });
const lim=new THREE.InstancedMesh(lampGeo,EM(COL.cyan,0.9),lamps.length); { const m=new THREE.Matrix4(); lamps.forEach((l,i)=>{ m.makeTranslation(l[0],l[1],0.002); lim.setMatrixAt(i,m); }); lim.instanceMatrix.needsUpdate=true; } cat.streets.add(tag(lim,'PROP-STREET-FURNITURE','street lights'));

// ---------------- landmarks: footprints (exclusion circles) + detail models
const LM=DB.nodes.filter(n=>(n.kind==='landmark'||n.kind==='natural')&&n.position&&n.geometry&&(n.geometry.size||n.geometry.radius_top!==undefined||n.geometry.building_size||n.geometry.type==='terrain_patch')&&n.geometry.type!=='room'&&n.id!=='LM-CORE-WATER');
function lmRadius(n){ const g=n.geometry; if(g.size) return Math.hypot(g.size[0],g.size[1])/2; if(g.building_size) return g.wall_radius; if(g.radius!==undefined) return g.radius; if(g.radius_bottom!==undefined) return Math.max(g.radius_bottom,g.radius_top||0)+ (n.id==='LM-SPIRE-CLUSTER'?0.02:0); return 0.05; }
const footprints=LM.map(n=>({x:n.position[0],y:n.position[1],r:lmRadius(n)+0.006,id:n.id})); footprints.push({x:0,y:0,r:PLAZA_R+0.02,id:'LM-CENTRAL-PLAZA'});
const bMat=c=>M({color:c}); const glassMat=()=>new THREE.MeshPhysicalMaterial({color:COL.glass,transparent:true,opacity:0.5,transmission:0.6,roughness:0.15});
function detail(n){ const g=new THREE.Group(); const [x,y]=n.position; const G=n.geometry; const az=(n.azimuth||0)*Math.PI/180; const r=Math.hypot(x,y); const lim=n.height_limit_U||lensTop(Math.min(1,r+lmRadius(n)))*0.93; const H=v=>Math.min(v,lim);
  const at=(dx,dy)=>[x+Math.cos(az)*dx-Math.sin(az)*dy, y+Math.sin(az)*dx+Math.cos(az)*dy]; // local (radial,tangential) offsets
  switch(n.id){
    case 'LM-CENTRAL-MONUMENT': { const h=H(0.26); g.add(meshAt(new THREE.CylinderGeometry(0.045,0.05,0.01,32).rotateX(Math.PI/2),bMat(COL.plaza),x,y,0.005)); g.add(meshAt(new THREE.ConeGeometry(0.03,h,12).rotateX(Math.PI/2),bMat(0xf0ead6),x,y,h/2)); for(let k=0;k<4;k++){ const a=k*Math.PI/2; g.add(meshAt(new THREE.BoxGeometry(0.006,0.03,h*0.6),bMat(0xe0a060),x+Math.cos(a)*0.02,y+Math.sin(a)*0.02,h*0.3,a)); g.add(meshAt(new THREE.BoxGeometry(0.002,0.002,h*0.5),EM(COL.cyan,0.8),x+Math.cos(a)*0.031,y+Math.sin(a)*0.031,h*0.25)); } break; }
    case 'LM-SPIRE-CLUSTER': { const rad=Math.min(0.035,(G.radius_bottom||0.04)*0.75); for(let k=0;k<5;k++){ const a=k/5*Math.PI*2; const h=H(0.26)*rr(0.6,1); g.add(meshAt(new THREE.ConeGeometry(0.014,h,8).rotateX(Math.PI/2),bMat(pick(COL.bldg)),x+Math.cos(a)*rad,y+Math.sin(a)*rad,h/2)); g.add(meshAt(new THREE.BoxGeometry(0.003,0.003,h*0.7),EM(COL.cyan,0.9),x+Math.cos(a)*(rad+0.015),y+Math.sin(a)*(rad+0.015),h*0.35)); } break; }
    case 'LM-PRESIDENTIAL-BUILDING': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0]*0.85,G.size[1]*0.85,h*0.85),bMat(0xe9e4d2),x,y,h*0.425,az)); const rd=Math.min(G.size[0],G.size[1])*0.42; g.add(meshAt(new THREE.CylinderGeometry(rd,rd,h*0.15,48).rotateX(Math.PI/2),glassMat(),x,y,h*0.925)); g.add(meshAt(new THREE.CylinderGeometry(rd+0.002,rd+0.002,0.006,48).rotateX(Math.PI/2),bMat(0xd0c8a8),x,y,h)); for(let k=0;k<3;k++){ const [sx,sy]=at(-G.size[0]*0.425-0.001,0); g.add(meshAt(new THREE.BoxGeometry(0.002,G.size[1]*0.8,0.004),EM(COL.cyan,0.8),sx,sy,h*(0.2+k*0.25),az)); } break; }
    case 'LM-PLAZA-DOME-BUILDING': { const h=H(G.size[2]); const rd=Math.min(G.size[0],G.size[1])/2; g.add(meshAt(new THREE.CylinderGeometry(rd,rd,h*0.6,48).rotateX(Math.PI/2),bMat(0xeae3cf),x,y,h*0.3)); g.add(meshAt(new THREE.SphereGeometry(rd,48,24,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2).scale(1,1,(h*0.4)/rd),bMat(0xe0a050),x,y,h*0.6)); for(let k=0;k<8;k++){ const a=k/8*Math.PI*2; g.add(meshAt(new THREE.BoxGeometry(0.012,0.006,h*0.5),bMat(0xd9d2b8),x+Math.cos(a)*rd*0.98,y+Math.sin(a)*rd*0.98,h*0.25,a)); } break; }
    case 'LM-COUNCIL-HALL': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h*0.8),bMat(0xdfe6d8),x,y,h*0.4,az)); const [sx,sy]=at(-G.size[0]/2-0.015,0); g.add(meshAt(new THREE.BoxGeometry(0.03,G.size[1]*0.8,0.012),bMat(COL.plaza),sx,sy,0.006,az)); const [tx,ty]=at(G.size[0]*0.3,0); g.add(meshAt(new THREE.SphereGeometry(0.02,24,12,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),bMat(0xc8d0c0),tx,ty,h*0.8)); for(let k=-1;k<=1;k++){ const [bx,by]=at(-G.size[0]/2-0.001,k*G.size[1]*0.3); g.add(meshAt(new THREE.BoxGeometry(0.002,0.02,h*0.5),M({color:0xa02020}),bx,by,h*0.5,az)); } break; }
    case 'LM-SIMPLE-RICKS': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(COL.ind),x,y,h/2,az)); for(let k=0;k<3;k++){ const [sx,sy]=at(G.size[0]*0.3,-G.size[1]*0.3+k*G.size[1]*0.3); g.add(meshAt(new THREE.CylinderGeometry(0.008,0.008,h*1.6,12).rotateX(Math.PI/2),bMat(0x9a948a),sx,sy,h*0.8)); } const [fx,fy]=at(-G.size[0]/2-0.002,0); g.add(meshAt(new THREE.BoxGeometry(0.004,G.size[1]*0.6,0.01),EM(0xffd060,0.9),fx,fy,h*0.6,az)); break; }
    case 'LM-FLAVOR-CORE': { g.add(meshAt(new THREE.CylinderGeometry(G.radius_top,G.radius_top,G.z_top,32).rotateX(Math.PI/2),glassMat(),x,y,G.z_top/2+0.001)); g.add(meshAt(new THREE.CylinderGeometry(0.008,0.008,G.z_top*0.9,16).rotateX(Math.PI/2),bMat(0xbfc9d0),x,y,G.z_top*0.45)); break; }
    case 'LM-MEGAFRUIT-FARM': { const rf=G.radius||0.1; for(let k=0;k<8;k++){ const a=k/8*Math.PI*2; g.add(meshAt(new THREE.CircleGeometry(rf*0.33,24),M({color:k%2?0x7fa84f:0x9ab45a}),x+Math.cos(a)*rf*0.6,y+Math.sin(a)*rf*0.6,0.0035)); } g.add(meshAt(new THREE.CircleGeometry(rf*0.25,32),M({color:COL.water,roughness:0.2}),x,y,0.004)); g.add(meshAt(new THREE.BoxGeometry(0.02,0.015,0.012),bMat(0xc8a060),x+rf*0.5,y-rf*0.5,0.006)); for(let k=0;k<5;k++){ const a=rr(0,6.28), d=rr(0.03,rf*0.85); const hh=rr(0.03,0.045); g.add(meshAt(new THREE.CylinderGeometry(0.003,0.005,hh*0.5,8).rotateX(Math.PI/2),bMat(0x7a5a3a),x+Math.cos(a)*d,y+Math.sin(a)*d,hh*0.25)); g.add(meshAt(new THREE.SphereGeometry(hh*0.45,12,8),bMat(0x4f8a3f),x+Math.cos(a)*d,y+Math.sin(a)*d,hh*0.7)); g.add(meshAt(new THREE.SphereGeometry(hh*0.12,10,8),EM(0xff6a3a,0.5),x+Math.cos(a)*d+hh*0.3,y+Math.sin(a)*d,hh*0.55)); } break; }
    case 'LM-WISHING-PORTAL': { g.add(meshAt(new THREE.CylinderGeometry(G.wall_radius,G.wall_radius,G.wall_height,64,1,true).rotateX(Math.PI/2),M({color:0x8a6a48,side:THREE.DoubleSide}),x,y,G.wall_height/2)); g.add(meshAt(new THREE.BoxGeometry(...G.building_size),bMat(0x9a7a58),x,y,G.building_size[2]/2)); g.add(meshAt(new THREE.CircleGeometry(0.018,32),EM(0x40ff70,1.5),x+0.03,y-0.03,0.002)); break; }
    case 'LM-POLICE-HQ': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(0xd9dde3),x,y,h/2,az)); const [tx,ty]=at(-G.size[0]*0.2,0); g.add(meshAt(new THREE.BoxGeometry(G.size[0]*0.5,G.size[1]*0.5,Math.min(H(h*1.4),lim)),bMat(0xcfd5dc),tx,ty,Math.min(H(h*1.4),lim)/2,az)); const [bx,by]=at(-G.size[0]/2-0.001,0); g.add(meshAt(new THREE.BoxGeometry(0.003,G.size[1],0.006),EM(0x4060ff,1),bx,by,h*0.9,az)); break; }
    case 'LM-MORTY-ACADEMY': { const h=H(G.size[2]); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(0xe7d9b8),x,y,h/2,az)); const [ex,ey]=at(-G.size[0]/2-0.006,0); g.add(meshAt(new THREE.BoxGeometry(0.012,G.size[1]*0.3,h*0.9),bMat(0xd8c9a0),ex,ey,h*0.45,az)); break; }
    default: { if(G.size){ const h=H(G.size[2]); const c=n.parent==='DIST-MORTYTOWN'?COL.morty:(n.kind==='landmark'?0xe6dfc4:COL.ind); g.add(meshAt(new THREE.BoxGeometry(G.size[0],G.size[1],h),bMat(c),x,y,h/2,az)); const [bx,by]=at(-G.size[0]/2-0.001,0); g.add(meshAt(new THREE.BoxGeometry(0.003,G.size[1]*0.9,0.006),EM(n.parent==='DIST-MORTYTOWN'?COL.magenta:COL.cyan,0.9),bx,by,Math.min(h*0.7,h-0.004),az)); } }
  }
  g.traverse(o=>{ o.userData.nodeId=n.id; o.userData.generated='landmark detail'; }); return g;
}
LM.forEach(n=>cat.landmarks.add(detail(n)));
{ const w=NB['LM-CORE-WATER']; cat.nature.add(tag(meshAt(new THREE.CircleGeometry(w.geometry.radius||0.04,48),M({color:COL.water,roughness:0.2,metalness:0.3}),w.position[0],w.position[1],0.0035),'LM-CORE-WATER','pond')); }
function label(text,x,y,z,id){ const c=document.createElement('canvas'); c.width=256; c.height=64; const g=c.getContext('2d'); g.fillStyle='rgba(10,14,20,0.7)'; g.fillRect(0,0,256,64); g.font='bold 26px sans-serif'; g.fillStyle='#e8f4ff'; g.textAlign='center'; g.fillText(text.slice(0,20),128,42); const t=new THREE.CanvasTexture(c); const s=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true,depthTest:false})); s.scale.set(0.12,0.03,1); s.position.set(x,y,z); return tag(s,id,'label'); }
LM.forEach(n=>{ const G=n.geometry; const h=G.size?G.size[2]:(G.z_top||0.03); cat.labels.add(label(n.name.replace(/\(.*\)/,'').trim(),n.position[0],n.position[1],n.position[2]+h+0.02,n.id)); });

// ---------------- procedural blocks: polar cells clipped to roads / rail / landmarks
const FAM={
  'DIST-CIVIC-CORE':{density:0.6,hf:[0.35,0.9],fill:[0.55,0.85],shape:'tower',col:[0xe9e4d2,0xdfe6d8,0xe6dfc4,0xe3e8dc],strip:0.5},
  'DIST-COMMERCIAL-RING':{density:0.85,hf:[0.25,0.6],fill:[0.5,0.85],shape:'mixed',col:COL.bldg,strip:0.4},
  'DIST-RICK-RESIDENTIAL':{density:0.6,hf:[0.1,0.3],fill:[0.5,0.8],shape:'round',col:[0xe9e4d2,0xd8d2b6,0xcfd6c4],strip:0.15},
  'DIST-EAST-SANCHEZ-HEIGHTS':{density:0.75,hf:[0.2,0.5],fill:[0.5,0.85],shape:'mixed',col:COL.bldg,strip:0.35},
  'DIST-INDUSTRIAL':{density:0.5,hf:[0.06,0.16],fill:[0.85,0.95],shape:'shed',col:[COL.ind,0xa8a090,0xc0b8a8],strip:0.2},
  'DIST-MORTYTOWN':{density:0.95,habs:[0.015,0.04],fill:[0.7,0.9],shape:'box',col:[COL.morty,0xc9b892,0xd0c4a8,0xbfae8c],strip:0.5,neon:true,sub:2},
  'DIST-CONSTRUCTION':{density:0.5,hf:[0.2,0.5],fill:[0.5,0.8],shape:'scaffold',col:[0xbbb5a0],strip:0},
  'GENERIC':{density:0.65,hf:[0.1,0.3],fill:[0.5,0.85],shape:'mixed',col:COL.bldg,strip:0.25},
};
const sectors=DB.nodes.filter(n=>n.kind==='district'&&n.geometry&&n.geometry.type==='sector'&&n.id!=='DIST-BIG-MORTY');
function districtAt(r,azDeg){ for(const s of sectors){ const g=s.geometry; let a0=g.az_start,a1=g.az_end,a=azDeg; if(a1>360&&a<a0) a+=360; if(r>=g.r_inner&&r<=g.r_outer&&a>=a0&&a<=a1) return s; } return null; }
const GEO={ box:new THREE.BoxGeometry(1,1,1).translate(0,0,0.5), cyl:new THREE.CylinderGeometry(0.5,0.5,1,14).rotateX(Math.PI/2).translate(0,0,0.5), dome:new THREE.SphereGeometry(0.5,14,8,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2), cone:new THREE.ConeGeometry(0.5,1,10).rotateX(Math.PI/2).translate(0,0,0.5), strip:new THREE.BoxGeometry(1,1,1).translate(0,0,0.5) };
const inst={box:[],cyl:[],dome:[],cone:[],strip:[],neon:[]}; const placed=[]; const towers=[]; const scaf=[];
function push(k,x,y,az,sx,sy,z,h,col,id){ inst[k].push({x,y,az,sx,sy,z,h,col,id}); }
// place one block centred at polar (r,az) with radial size sx and tangential size sy (already ≤ cell), heights from the family
function placeBlock(r,azDeg,sx,sy,fam,scale,cx,cy,envFn,cellKey){
  const a=azDeg*Math.PI/180; const rOut=r+sx/2; const e=envFn(rOut); if(e<=0.012) return;
  let h=fam.hf?e*rr(fam.hf[0],fam.hf[1]):rr(fam.habs[0],fam.habs[1]); h=Math.min(h,e*0.93)*scale; if(h<0.006*scale) h=0.006*scale;
  const x=cx+Math.cos(a)*r*scale, y=cy+Math.sin(a)*r*scale; const SX=sx*scale, SY=sy*scale; const col=pick(fam.col); const id=fam.id;
  const round=fam.shape==='round'||(fam.shape==='mixed'&&rnd()<0.35)||(fam.shape==='tower'&&rnd()<0.5); const k=round?'cyl':'box';
  push(k,x,y,a,SX,SY,0,h,col,id); placed.push({x,y,az:a,sx:SX,sy:SY,h,id,cell:cellKey});
  const cap=e*0.93*scale-h;
  if((fam.shape==='tower'||fam.shape==='mixed')&&cap>0.004*scale){ const t=rnd(); if(t<0.35) push(k,x,y,a,SX*0.7,SY*0.7,h,Math.min(cap,h*rr(0.25,0.5)),col,id); else if(t<0.55&&round) push('dome',x,y,a,SX,SY,h,Math.min(cap,SX*0.5),col,id); else if(t<0.7) push('cone',x,y,a,SX*0.4,SX*0.4,h,Math.min(cap,h*rr(0.15,0.35)),0xf0ead6,id); }
  if(fam.shape==='shed'&&rnd()<0.6){ const [qx,qy]=[x+Math.cos(a)*SX*0.3-Math.sin(a)*SY*0.3, y+Math.sin(a)*SX*0.3+Math.cos(a)*SY*0.3]; push('cyl',qx,qy,a,SX*0.12,SX*0.12,0,Math.min(e*0.93*scale,h*rr(1.4,2.2)),0x9a948a,id); }
  if(rnd()<fam.strip){ const [qx,qy]=[x-Math.sin(a)*(SY*0.51), y+Math.cos(a)*(SY*0.51)]; push(fam.neon?'neon':'strip',qx,qy,a,SX*0.85,0.0015,h*rr(0.3,0.7),0.004*scale,fam.neon?pick([COL.magenta,COL.cyan,0xffe04a]):COL.cyan,id); }
  if(fam.shape==='tower'&&h>0.12*scale) towers.push({x,y,h,cell:cellKey,sy:SY});
  if(fam.shape==='scaffold') scaf.push({x,y,az:a,sx:SX,sy:SY,h});
}
// free radial intervals between obstacles (ring roads, rail/tram bands) inside [rmin,rmax]
function freeRadialIntervals(rmin,rmax,ringRadii,railRadii){
  const bands=[...ringRadii.map(r=>[r-BAND,r+BAND]),...railRadii.map(r=>[r-0.012,r+0.012])].sort((a,b)=>a[0]-b[0]);
  const out=[]; let cur=rmin; for(const [a,b] of bands){ if(b<=cur) continue; if(a>cur) out.push([cur,Math.min(a,rmax)]); cur=Math.max(cur,b); if(cur>=rmax) break; } if(cur<rmax) out.push([cur,rmax]); return out.filter(([a,b])=>b-a>=0.02);
}
function fillBody(scale,cx,cy,envFn,famFor,rmin,rmax,ringRadii,railRadii,radialCount,radialAz0,radialRin,exclude,step){
  step=step||0.045; const radHalf=(ROAD_HALF+WALK+CLEAR); let cellIdx=0;
  for(const [ra,rb] of freeRadialIntervals(rmin,rmax,ringRadii,railRadii)){
    const nrows=Math.max(1,Math.floor((rb-ra)/step)); const rowH=(rb-ra)/nrows; // stretch rows to use the band fully
    for(let i=0;i<nrows;i++){ const r0=ra+i*rowH, r1=r0+rowH, rm=(r0+r1)/2; const n=Math.max(8,Math.round(2*Math.PI*rm/step)); const dth=2*Math.PI/n;
      for(let k=0;k<n;k++){ let t0=k*dth, t1=t0+dth; // clip cell to radial roads
        if(rm>=radialRin-0.03){ for(let j=0;j<radialCount;j++){ const ta=(radialAz0*Math.PI/180+j*2*Math.PI/radialCount)%(2*Math.PI); const w=radHalf/r0; for(const off of [-2*Math.PI,0,2*Math.PI]){ const A=ta+off-w, B=ta+off+w; if(B<=t0||A>=t1) continue; if(A<=t0&&B>=t1){ t0=t1; break; } if(A>t0&&B<t1){ if(A-t0>t1-B) t1=A; else t0=B; } else if(A<=t0) t0=B; else t1=A; } if(t1-t0<=0) break; } }
        const arc=(t1-t0)*rm; if(arc<0.012||rowH<0.012) continue; const tm=(t0+t1)/2; const azDeg=(tm*180/Math.PI+360)%360;
        // landmark exclusion: nearest point of the cell (as world AABB) to each circle
        const cx0=cx+Math.cos(tm)*rm*scale, cy0=cy+Math.sin(tm)*rm*scale; const half=Math.max(rowH,arc)/2*scale; let blocked=false;
        for(const f of exclude){ const dx=Math.max(Math.abs(f.x-cx0)-half,0), dy=Math.max(Math.abs(f.y-cy0)-half,0); if(Math.hypot(dx,dy)<f.r){ blocked=true; break; } } if(blocked) continue;
        const fam=famFor(rm,azDeg); if(!fam) continue; if(rnd()>fam.density) continue; cellIdx++;
        const sub=fam.sub||1; const rowS=rowH/sub, arcS=(t1-t0)/sub;
        for(let si=0;si<sub;si++) for(let sj=0;sj<sub;sj++){ if(sub>1&&rnd()>0.85) continue; const cr0=r0+si*rowS, ct0=t0+sj*arcS; const cellR=rowS-0.006, cellA=arcS*rm-0.006; if(cellR<0.006||cellA<0.006) continue;
          const sx=Math.max(0.006,cellR*rr(fam.fill[0],fam.fill[1])), sy=Math.max(0.006,cellA*rr(fam.fill[0],fam.fill[1]));
          const rc=cr0+0.003+sx/2+rnd()*(cellR-sx), tc=ct0+(0.003+sy/2+rnd()*(cellA-sy))/rm;
          placeBlock(rc,tc*180/Math.PI,sx,sy,fam,scale,cx,cy,envFn,`${cellIdx}`); }
      }
    }
  }
}
const CORE_IN=Math.max(PLAZA_R+0.025,TRAM.radius+0.012);
fillBody(1,0,0,lensTop,(r,az)=>{ const d=districtAt(r,az); if(d&&d.id==='DIST-AGRICULTURAL') return null; const f=FAM[d?d.id:'GENERIC']||FAM.GENERIC; return Object.assign({id:d?d.id:'GENERIC'},f); },CORE_IN,0.985,RINGS,[RAIL.radius],RAD.count,RAD.az_start,RAD.r_inner,footprints,0.045);
// skybridges only between towers in neighbouring cells (no crossing of other blocks)
for(let i=0;i<towers.length;i++) for(let j=i+1;j<towers.length;j++){ const A=towers[i],B=towers[j]; const d=Math.hypot(B.x-A.x,B.y-A.y); const gap=d-(A.sy+B.sy)/2; if(gap>0.004&&gap<0.03&&rnd()<0.4){ const a=Math.atan2(B.y-A.y,B.x-A.x); const z=Math.min(A.h,B.h)*rr(0.35,0.7); const mx=A.x+Math.cos(a)*(A.sy/2+gap/2), my=A.y+Math.sin(a)*(A.sy/2+gap/2); cat.transit.add(tag(meshAt(new THREE.BoxGeometry(gap,0.004,0.004),M({color:0xe8f0f4}),mx,my,z,a),'CIRC-CORE-WALKWAYS','skybridge')); } }
// pods
DB.nodes.filter(n=>(n.id.startsWith('DOME-S')||n.id==='DOME-MB')&&n.geometry.type==='lens').forEach(pod=>{
  const [px,py]=pod.position; const s=pod.geometry.radius; const penv=r=>lensTop(r)*(pod.geometry.top_height/0.292);
  const fam=pod.id==='DOME-MB'?Object.assign({id:pod.id},FAM['DIST-MORTYTOWN']):Object.assign({id:pod.id},FAM.GENERIC);
  cat.pods.add(lensShell(s,pod.geometry.top_height,8,s,px,py,pod.id));
  cat.pods.add(tag(meshAt(new THREE.CircleGeometry(s*0.999,96),M({color:COL.plaza}),px,py,-0.002),pod.id,'pod deck'));
  cat.pods.add(tag(meshAt(new THREE.RingGeometry((0.5-ROAD_HALF)*s,(0.5+ROAD_HALF)*s,96),roadMat,px,py,0.002),pod.id,'pod ring road'));
  for(let k=0;k<6;k++){ const a=k/6*Math.PI*2; const L=(0.97-0.14)*s; cat.pods.add(tag(meshAt(new THREE.BoxGeometry(L,RAD.width*s,0.002),roadMat,px+Math.cos(a)*(0.14+0.415)*s,py+Math.sin(a)*(0.14+0.415)*s,0.002,a),pod.id,'pod avenue')); }
  cat.pods.add(tag(meshAt(new THREE.CircleGeometry(s*0.12,48),M({color:COL.plaza}),px,py,0.003),pod.id,'pod plaza'));
  cat.pods.add(tag(meshAt(new THREE.ConeGeometry(s*0.03,Math.min(s*0.5,penv(0)*0.9),10).rotateX(Math.PI/2),bMat(0xf0ead6),px,py,Math.min(s*0.5,penv(0)*0.9)/2),pod.id,'pod centre spire'));
  fillBody(s,px,py,penv,()=>fam,0.14,0.97,[0.5],[],6,0,0.14,[],0.045);
});
const matFor=k=>k==='strip'?EM(COL.cyan,0.9):k==='neon'?new THREE.MeshStandardMaterial({color:0xffffff,emissive:0xffffff,emissiveIntensity:0.9}):M({color:0xffffff,roughness:0.8});
for(const k of ['box','cyl','dome','cone','strip','neon']){ const arr=inst[k]; if(!arr.length) continue; const im=new THREE.InstancedMesh(GEO[k==='neon'?'strip':k],matFor(k),arr.length); const mtx=new THREE.Matrix4(),q=new THREE.Quaternion(),e=new THREE.Euler();
  arr.forEach((b,i)=>{ e.set(0,0,b.az); q.setFromEuler(e); mtx.compose(new THREE.Vector3(b.x,b.y,b.z),q,new THREE.Vector3(b.sx,b.sy,b.h)); im.setMatrixAt(i,mtx); im.setColorAt(i,new THREE.Color(b.col)); });
  im.instanceMatrix.needsUpdate=true; if(im.instanceColor) im.instanceColor.needsUpdate=true; im.userData.nodeId='GENERATED-BLOCKS'; im.userData.generated='procedural '+k+' ('+arr.length+')'; cat.buildings.add(im); }
scaf.forEach(b=>cat.buildings.add(tag(meshAt(new THREE.BoxGeometry(b.sx*1.1,b.sy*1.1,b.h*1.3).translate(0,0,b.h*0.65),new THREE.MeshBasicMaterial({color:0xffa040,wireframe:true,transparent:true,opacity:0.5}),b.x,b.y,0,b.az),'DIST-CONSTRUCTION','scaffolding')));
// trees: plaza ring, along avenues (on the sidewalk outer edge), residential, farm edge
const treeGeo=new THREE.ConeGeometry(0.006,0.018,7).rotateX(Math.PI/2).translate(0,0,0.009); const trees=[];
for(let k=0;k<40;k++){ const a=k/40*Math.PI*2; trees.push([Math.cos(a)*(PLAZA_R+0.008),Math.sin(a)*(PLAZA_R+0.008)]); }
for(let i=0;i<RAD.count;i++){ const a=(RAD.az_start+360*i/RAD.count)*Math.PI/180; for(let r=RAD.r_inner+0.02;r<0.95;r+=0.035){ if(RINGS.some(q=>Math.abs(r-q)<0.03)||Math.abs(r-RAIL.radius)<0.02) continue; for(const sgn of [1,-1]){ const off=ROAD_HALF+WALK-0.003; trees.push([Math.cos(a)*r-Math.sin(a)*sgn*off,Math.sin(a)*r+Math.cos(a)*sgn*off]); } } }
const farm=NB['LM-MEGAFRUIT-FARM']; for(let k=0;k<50;k++){ const a=rnd()*Math.PI*2, d=0.05+rnd()*0.035; trees.push([farm.position[0]+Math.cos(a)*d,farm.position[1]+Math.sin(a)*d]); }
const tim=new THREE.InstancedMesh(treeGeo,M({color:COL.tree}),trees.length); { const tm=new THREE.Matrix4(); trees.forEach((t,i)=>{ tm.makeTranslation(t[0],t[1],0.003); tim.setMatrixAt(i,tm); }); tim.instanceMatrix.needsUpdate=true; } cat.nature.add(tag(tim,'PROP-STREET-FURNITURE','trees'));

// ---------------- transit
const colMat=M({color:0x9aa0aa});
for(let i=0;i<45;i++){ const a=i/45*Math.PI*2; cat.transit.add(tag(meshAt(new THREE.CylinderGeometry(0.006,0.006,RAIL.z,10).rotateX(Math.PI/2),colMat,Math.cos(a)*RAIL.radius,Math.sin(a)*RAIL.radius,RAIL.z/2),'CIRC-RAIL-LOOP','column')); }
cat.transit.add(tag(meshAt(new THREE.TorusGeometry(RAIL.radius,0.006,6,160),EM(COL.cyan,0.6),0,0,RAIL.z),'CIRC-RAIL-LOOP','track guide'));
for(let i=0;i<6;i++){ const a=i/6*Math.PI*2+0.26; cat.transit.add(tag(meshAt(new THREE.BoxGeometry(0.05,0.02,0.006),M({color:0xe8f0f4}),Math.cos(a)*RAIL.radius,Math.sin(a)*RAIL.radius,RAIL.z+0.004,a),'CIRC-RAIL-LOOP','station platform')); }
const train=meshAt(new THREE.BoxGeometry(0.06,0.012,0.012),M({color:0xf2efe6,metalness:0.3}),RAIL.radius,0,RAIL.z+0.01,Math.PI/2); cat.transit.add(tag(train,'CIRC-RAIL-LOOP','commuter train'));
for(let i=0;i<16;i++){ const a=i/16*Math.PI*2; cat.transit.add(tag(meshAt(new THREE.CylinderGeometry(0.004,0.004,TRAM.z,8).rotateX(Math.PI/2),colMat,Math.cos(a)*TRAM.radius,Math.sin(a)*TRAM.radius,TRAM.z/2),'CIRC-TRAM-PLAZA','column')); }
const tiers=new THREE.Group(); [[PLAZA_R+0.02,0.04],[PLAZA_R+0.026,0.08],[PLAZA_R+0.032,0.12]].forEach(([r,z])=>{ tiers.add(tag(meshAt(new THREE.TorusGeometry(r,0.005,6,128),M({color:0xe9e4d2}),0,0,z),'CIRC-CORE-WALKWAYS','walkway tier')); }); cat.transit.add(tiers); window.__tiers=tiers;
[0.3,0.6].forEach(r=>cat.transit.add(tag(meshAt(new THREE.TorusGeometry(r,0.003,4,128),new THREE.MeshBasicMaterial({color:COL.cyan,transparent:true,opacity:0.25}),0,0,0.07),'CIRC-HOVER-BAND','hover lane')));
const cars=[]; for(let k=0;k<40;k++){ const c=meshAt(new THREE.BoxGeometry(0.012,0.006,0.004),M({color:pick([0xf4f0e6,0xe0c060,0x80c8ff]),metalness:0.4}),0,0,0); c.userData={r:pick([0.3,0.6]),a:rnd()*6.28,v:rr(0.002,0.006)*(rnd()<0.5?1:-1),z:rr(0.05,0.1)}; cat.transit.add(tag(c,'SYS-TAXI','hover car')); cars.push(c); }
(function anim(){ requestAnimationFrame(anim); cars.forEach(c=>{ c.userData.a+=c.userData.v; c.position.set(Math.cos(c.userData.a)*c.userData.r,Math.sin(c.userData.a)*c.userData.r,c.userData.z); c.rotation.z=c.userData.a+Math.PI/2; }); const t=performance.now()*0.00008; train.position.set(Math.cos(t)*RAIL.radius,Math.sin(t)*RAIL.radius,RAIL.z+0.01); train.rotation.z=t+Math.PI/2; })();

// ---------------- underground
const ug=NB['UG-PORTAL-FLUID'].geometry, ugp=NB['UG-PORTAL-FLUID'].position;
cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(ug.radius,ug.radius*0.9,ug.z_top-ug.z_bottom,24,1,true).rotateX(Math.PI/2),M({color:0x6b5a48,side:THREE.BackSide,roughness:1}),ugp[0],ugp[1],(ug.z_top+ug.z_bottom)/2),'UG-PORTAL-FLUID','cave wall'));
cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(0.05,0.06,0.07,32).rotateX(Math.PI/2),new THREE.MeshStandardMaterial({color:0x40ff70,emissive:0x20c050,emissiveIntensity:0.6,transparent:true,opacity:0.8}),ugp[0],ugp[1],ug.z_bottom+0.035),'UG-PORTAL-FLUID','central vat'));
for(let k=0;k<10;k++){ const a=k/10*Math.PI*2; cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(0.012,0.012,0.03,12).rotateX(Math.PI/2),M({color:0x7a8a7a}),ugp[0]+Math.cos(a)*0.15,ugp[1]+Math.sin(a)*0.15,ug.z_bottom+0.015),'UG-PORTAL-FLUID','collection container')); }
const dd=NB['UG-DIM-DRIVE'].geometry; cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(dd.radius_top,dd.radius_bottom,dd.z_top-dd.z_bottom,48,1,true).rotateX(Math.PI/2),M({color:0x1b2028,side:THREE.BackSide,roughness:0.9}),0,0,(dd.z_top+dd.z_bottom)/2),'UG-DIM-DRIVE','Drive void wall'));
cat.underground.add(tag(meshAt(new THREE.BoxGeometry(0.5,0.05,0.008),M({color:0x9aa0aa}),0,0,-0.33),'UG-DIM-DRIVE','suspended walkway'));
cat.underground.add(tag(meshAt(new THREE.TorusKnotGeometry(0.05,0.006,64,8,2,5),EM(0xffc020,1),-0.12,0.06,-0.3),'UG-DIM-DRIVE','portal-array display'));
cat.underground.add(tag(meshAt(new THREE.CylinderGeometry(0.03,0.03,0.12,24).rotateX(Math.PI/2),new THREE.MeshStandardMaterial({color:0x5be0ff,emissive:0x3fd0ff,emissiveIntensity:1.5,transparent:true,opacity:0.7}),0,0,-0.30),'UG-DIM-DRIVE','drive core'));

// ---------------- arms: exterior is the STL's own; interior levels inside the measured section; shoulder-shelf windows (STL ledge, r ≥ 1.45)
const SEC=DB.arm_section.half_width_by_z; const armHalf=z=>{ for(let i=0;i<SEC.length-1;i++){ const [z0,w0]=SEC[i],[z1,w1]=SEC[i+1]; if(z>=z0&&z<=z1) return w0+(w1-w0)*(z-z0)/(z1-z0);} return 0; };
DB.nodes.filter(n=>n.id.startsWith('ARM-')).forEach(n=>{ const pts=n.geometry.points; const a=Math.atan2(pts[0][1],pts[0][0]); const ca=Math.cos(a), sa=Math.sin(a); const r0=Math.hypot(pts[0][0],pts[0][1]), r1=Math.hypot(pts[2][0],pts[2][1]); const len=r1-r0; const at=(r,side,z)=>[ca*r-sa*side, sa*r+ca*side, z];
  const put=(geo,mat,r,side,z,label,group)=>{ const [x,y,zz]=at(r,side,z); const m=meshAt(geo,mat,x,y,zz,a); (group||cat.decks).add(tag(m,n.id,label)); return m; };
  for(const rr_ of [r0-0.005,r1+0.005]){ put(new THREE.BoxGeometry(0.012,0.22,0.045),M({color:0x141a22}),rr_,0,0.0,'arm portal'); put(new THREE.BoxGeometry(0.014,0.23,0.004),EM(COL.cyan,1.1),rr_,0,0.046,'portal lintel light'); }
  put(new THREE.BoxGeometry(len,0.24,0.003),M({color:0xd0cbb3}),r0+len/2,0,0.004,'concourse floor');
  put(new THREE.BoxGeometry(len,0.03,0.003),roadMat,r0+len/2,-0.06,0.006,'concourse road');
  put(new THREE.BoxGeometry(len,0.06,0.002),walkMat,r0+len/2,0.07,0.006,'concourse walkway');
  for(let k=0;k<14;k++){ put(new THREE.BoxGeometry(0.004,0.2,0.002),EM(COL.cyan,0.6),r0+len*(k+0.5)/14,0,0.044,'concourse ceiling light'); }
  for(const sg of [1,-1]) put(new THREE.BoxGeometry(len,0.004,0.018),new THREE.MeshPhysicalMaterial({color:COL.glass,transparent:true,opacity:0.45,transmission:0.5}),r0+len/2,sg*Math.min(0.125,armHalf(0.024)-0.02),0.024,'concourse window band');
  put(new THREE.BoxGeometry(len,0.3,0.003),M({color:COL.deck,transparent:true,opacity:0.75}),r0+len/2,0,0.05,'upper gallery floor');
  for(let k=0;k<10;k++) for(const sg of [1,-1]) put(new THREE.CylinderGeometry(0.005,0.005,0.046,10).rotateX(Math.PI/2),M({color:0x9aa0aa}),r0+len*(k+0.5)/10,sg*0.13,0.027,'gallery column');
  for(let k=0;k<6;k++) for(const sg of [1,-1]){ const side=Math.min(0.105,armHalf(0.073)-0.035); put(new THREE.BoxGeometry(0.04,0.045,0.02),M({color:0xd8d2b6}),r0+len*(k+0.5)/6,sg*side,0.053,'hangar bay'); put(new THREE.BoxGeometry(0.03,0.002,0.014),EM(0xffd060,0.8),r0+len*(k+0.5)/6,sg*(side-0.024),0.06,'bay door light'); }
  put(new THREE.BoxGeometry(len,0.3,0.003),M({color:COL.deck,transparent:true,opacity:0.6}),r0+len/2,0,-0.05,'service deck');
  for(let k=0;k<8;k++) put(new THREE.CylinderGeometry(0.012,0.012,0.04,12).rotateX(Math.PI/2),M({color:0x7a8a7a}),r0+len*(k+0.5)/8,0.1,-0.03,'service tank');
  // windows: the STL has a flat shelf at z +0.033 on both shoulders from r ≈ 1.45 to the pod (|side| 0.21→0.26); lit panels sit on it flush
  const winMat=new THREE.MeshPhysicalMaterial({color:0x9fe8ff,emissive:0x3fd0ff,emissiveIntensity:0.9,transmission:0.4,roughness:0.15,transparent:true,opacity:0.85});
  const W=DB.arm_section.windows||{}; const rA=W.r_start||1.47, rB=Math.min(W.r_end||1.72, r1+0.05); const count=W.count_per_shoulder||6; const zs=(W.z||0.033)+0.0015;
  for(const sg of [1,-1]) for(let k=0;k<count;k++){ const f=(k+0.5)/count; const rr_=rA+(rB-rA)*f; const side=sg*((W.side_inner||0.215)+((W.side_outer||0.255)-(W.side_inner||0.215))*0.5); const L=(rB-rA)/count*0.72; put(new THREE.BoxGeometry(L,0.03,0.003),winMat,rr_,side,zs,'shoulder-shelf window (STL ledge, #23)',cat.glass); }
});

// ---------------- UI + visibility
const panel=document.createElement('div'); panel.innerHTML='<h2>Interior (generated)</h2>'+Object.keys(cat).map(k=>`<label class="row"><input type="checkbox" data-int="${k}" ${k==='labels'?'':'checked'}> ${k}</label>`).join('')+'<div class="sub">Generated fill inherits the placement class of its district; the inspector labels it GENERATED. See INTERIOR.md.</div>';
document.getElementById('placements').parentNode.insertBefore(panel, document.getElementById('placements').nextSibling.nextSibling);
cat.labels.visible=false; panel.querySelectorAll('[data-int]').forEach(e=>e.addEventListener('change',ev=>{ cat[ev.target.dataset.int].visible=ev.target.checked; }));
const HIDE=['DOME-P','DOME-P-HUB','DOME-S1','DOME-S2','DOME-MB','DOME-S1-HUB','DOME-S2-HUB','DOME-MB-HUB','LM-CORE-WATER','LM-CENTRAL-PLAZA','CIRC-RING-1','CIRC-RING-2','CIRC-RING-3','CIRC-RADIALS','CIRC-HOVER-BAND','CIRC-TRAM-PLAZA','CIRC-CORE-WALKWAYS'].concat(LM.map(n=>n.id)).concat(MESH_B64?['ARM-S1','ARM-S2','ARM-MB','SHELL-DRUM','SHELL-PLATES','SHELL-UNDERHUB','SHELL-LOWER-BODY','SHELL-UNDERSIDE','KEEL-FIN-1','KEEL-FIN-2','KEEL-FIN-3','KEEL-FIN-4','KEEL-FIN-5']:[]);
const _rv=refreshVisibility; window.refreshVisibility=function(){ _rv(); const st=stateSel.value; const intact=['DS-01','DS-02','DS-03','DS-04','DS-05','all'].includes(st); IG.visible=intact; const cut=document.getElementById('cut').checked; cat.glass.visible=!cut&&document.querySelector('[data-int=glass]').checked; if(window.__tiers) window.__tiers.visible=['DS-01','DS-02','all'].includes(st); HIDE.forEach(id=>{ if(groups[id]) groups[id].visible=false; }); };
[stateSel, document.getElementById('cut'), ...document.querySelectorAll('[data-layer],[data-placement]')].forEach(e=>e.addEventListener('change', ()=>window.refreshVisibility()));
window.refreshVisibility();
const _castAt=castAt; window.castAt=function(e){ const r=canvas.getBoundingClientRect(); mouse.x=((e.clientX-r.left)/r.width)*2-1; mouse.y=-((e.clientY-r.top)/r.height)*2+1; ray.setFromCamera(mouse,camera); const hits=ray.intersectObjects([...Object.values(groups).filter(g=>g.visible), IG], true); for(const h of hits){ let o=h.object; while(o&&!o.userData.nodeId) o=o.parent; if(o){ window.__lastGenerated=o.userData.generated||null; return o.userData.nodeId; } } return null; };

// ---------------- audit: block-block (OBB/SAT), block-road, block-rail, block-landmark, block-plaza, landmark-landmark, glass clearance
function obbCorners(b){ const c=Math.cos(b.az), s=Math.sin(b.az); const hx=b.sx/2, hy=b.sy/2; return [[-hx,-hy],[hx,-hy],[hx,hy],[-hx,hy]].map(([u,v])=>[b.x+c*u-s*v, b.y+s*u+c*v]); }
function obbOverlap(A,B){ const pa=obbCorners(A), pb=obbCorners(B); const axes=[[Math.cos(A.az),Math.sin(A.az)],[-Math.sin(A.az),Math.cos(A.az)],[Math.cos(B.az),Math.sin(B.az)],[-Math.sin(B.az),Math.cos(B.az)]]; for(const [ax,ay] of axes){ const pr=P=>P.map(([x,y])=>x*ax+y*ay); const a=pr(pa), b=pr(pb); if(Math.max(...a)<=Math.min(...b)+1e-6||Math.max(...b)<=Math.min(...a)+1e-6) return false; } return true; }
window.__auditInterior=function(){
  const rep={blocks:placed.length, block_block:0, block_road:0, block_rail:0, block_landmark:0, block_plaza:0, landmark_landmark:[], landmark_road:[], glass:0, samples:[]};
  // spatial hash
  const cell=0.06; const H={}; placed.forEach((b,i)=>{ const k=`${Math.floor(b.x/cell)},${Math.floor(b.y/cell)}`; (H[k]=H[k]||[]).push(i); });
  const seen=new Set(); placed.forEach((b,i)=>{ const gx=Math.floor(b.x/cell), gy=Math.floor(b.y/cell); for(let dx=-1;dx<=1;dx++) for(let dy=-1;dy<=1;dy++){ (H[`${gx+dx},${gy+dy}`]||[]).forEach(j=>{ if(j<=i) return; const key=i+'_'+j; if(seen.has(key)) return; seen.add(key); if(obbOverlap(b,placed[j])){ rep.block_block++; if(rep.samples.length<6) rep.samples.push(['block-block',b.id,+b.x.toFixed(3),+b.y.toFixed(3)]); } }); } });
  const podC=DB.nodes.filter(n=>(n.id.startsWith('DOME-S')||n.id==='DOME-MB')&&n.geometry.type==='lens').map(n=>n.position);
  placed.forEach(b=>{ const inPod=podC.some(p=>Math.hypot(b.x-p[0],b.y-p[1])<0.6); if(inPod) return; const cs=obbCorners(b); for(const [x,y] of cs){ const r=Math.hypot(x,y); if(RINGS.some(q=>Math.abs(r-q)<ROAD_HALF+WALK)) { rep.block_road++; break; } const th=(Math.atan2(y,x)+2*Math.PI)%(2*Math.PI); let hit=false; for(let j=0;j<RAD.count;j++){ const ta=(RAD.az_start*Math.PI/180+j*2*Math.PI/RAD.count)%(2*Math.PI); let d=Math.abs(th-ta); d=Math.min(d,2*Math.PI-d); if(r>=RAD.r_inner&&d*r<ROAD_HALF+WALK){ hit=true; break; } } if(hit){ rep.block_road++; break; } if(Math.abs(r-RAIL.radius)<0.008){ rep.block_rail++; break; } if(r<PLAZA_R+0.015){ rep.block_plaza++; break; } }
    for(const f of footprints){ if(f.id==='LM-CENTRAL-PLAZA') continue; if(cs.some(([x,y])=>Math.hypot(x-f.x,y-f.y)<f.r-0.006)||Math.hypot(b.x-f.x,b.y-f.y)<f.r-0.006){ rep.block_landmark++; if(rep.samples.length<6) rep.samples.push(['block-landmark',f.id,b.id]); break; } }
    const rO=Math.hypot(b.x,b.y)+Math.max(b.sx,b.sy)*0.75; if(b.h>lensTop(Math.min(rO,1))) rep.glass++; });
  const lmBox=n=>{ const g=n.geometry; return g.size?{x:n.position[0],y:n.position[1],az:(n.azimuth||0)*Math.PI/180,sx:g.size[0],sy:g.size[1]}:{x:n.position[0],y:n.position[1],az:0,sx:lmRadius(n)*2,sy:lmRadius(n)*2}; };
  for(let i=0;i<LM.length;i++) for(let j=i+1;j<LM.length;j++){ const A=LM[i],B=LM[j]; if(A.parent===B.id||B.parent===A.id) continue; const sa=new Set(A.states), inter=B.states.some(s=>sa.has(s)); if(!inter) continue; if(obbOverlap(lmBox(A),lmBox(B))) rep.landmark_landmark.push([A.id,B.id]); }
  LM.forEach(n=>{ const r=Math.hypot(n.position[0],n.position[1]); if(r>1.02) return; const g=n.geometry; const az=(n.azimuth||0)*Math.PI/180; const pts=g.size?obbCorners({x:n.position[0],y:n.position[1],az,sx:g.size[0],sy:g.size[1]}):[[n.position[0],n.position[1]]]; const R=g.size?0:lmRadius(n); const test=(x,y)=>{ const rr_=Math.hypot(x,y); if(RINGS.some(q=>Math.abs(rr_-q)<R+ROAD_HALF+WALK-0.003)) return 'ring'; const th=(Math.atan2(y,x)+2*Math.PI)%(2*Math.PI); for(let j=0;j<RAD.count;j++){ const ta=(RAD.az_start*Math.PI/180+j*2*Math.PI/RAD.count)%(2*Math.PI); let d=Math.abs(th-ta); d=Math.min(d,2*Math.PI-d); if(rr_>=RAD.r_inner-R&&d*rr_<R+ROAD_HALF+WALK-0.003) return 'radial '+j; } if(n.id!=='LM-CENTRAL-MONUMENT'&&rr_<PLAZA_R+R-0.003) return 'plaza'; return null; }; for(const [x,y] of pts){ const hit=test(x,y); if(hit){ rep.landmark_road.push([n.id,hit,+r.toFixed(3)]); break; } } });
  return rep;
};
console.log('interior v2.4 built:', placed.length, 'blocks; audit:', JSON.stringify(window.__auditInterior()));
})();
