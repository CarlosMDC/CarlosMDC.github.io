function Pierna(){
//Para definir una pierna heredara el comportamiento de l objeto 3d, habra que revisar primeramente
THREE.Object3D.call(this);
//entonces se procede a desarrollar las mallas par dar forma a un a pierna muy senciulla+

this.pierna=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
this.pie =new THREE.Mesh(new THREE.BoxGeometry(2,1,1));

this.pierna.position.y=-2.5;
this.pie.position.y=-4.5;
this.pie.position.x=1;
this.add(this.pie);
}


//finalmente se agraga 
Pierna.prototype=new THREE.Object3D();
function setup(){
  var cuerpo= new THREE.Mesh(new THREE.CylinderGeometry(1,2,5,10));
  piernaD=new Pierna();
  piernaI=new Pierna();
  cuerpo.position.y=2;
  piernaD.position.z=-1;
  piernaI.position.z=1;
  step=0.1;
  escena=new THREE.Scene();
  escena.add(cuerpo);
  escena.add(piernaD);
  escena.add(piernaI);
  camara= new THREE.PerspectiveCamera();
  camara.position.z=20;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.append.Child(renderer.domElement);
}

function loop (){

  requestAnimationFrame(loop);
  renderer.render(escena,camara);
  if(Math.abs(piernaD.rotation.z)>.5)
  step=-step;
  piernaD.rotation.z+=step;
  piernaI.rotation.z-=step;
}

var escena,camara, renderer;
var step, piernaI, piernaD;

setup();
loop();
  
  
  
  
  
  
  
  
  
  
//una ves que se definio piernan
