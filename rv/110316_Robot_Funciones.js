function Brazo (){

THREE.Object3D.call(this);
this.brazo=new THREE.Mesh(new THREE.BoxGeometry(20,20,120));

  
  var gripper =new THREE.Shape();
  gripper.moveTo(0,0);
  gripper.lineTo(0,20);
  gripper.lineTo(20,40);
  gripper.lineTo(40,40);
  gripper.lineTo(60,20);
  gripper.lineTo(60,15);
  gripper.lineTo(50,15);
  gripper.lineTo(50,20);
  gripper.lineTo(40,30);
  gripper.lineTo(20,30);
  gripper.lineTo(10,20);
  gripper.lineTo(10,0);
  gripper.lineTo(20,-10);
  gripper.lineTo(40,-10);
  gripper.lineTo(50,0);
  gripper.lineTo(50,5);
  gripper.lineTo(60,5);
  gripper.lineTo(60,0);
  gripper.lineTo(40,-20);
  gripper.lineTo(20,-20);
  gripper.lineTo(0,0);
  gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  this.griper = new THREE.Mesh(gripperForma);

  this.brazo.position.x=60;
  this.brazo.position.y=20;
  this.brazo.position.z=70;
  
  this.griper.rotation.y=-1.57;
  this.griper.position.x=70;
  this.griper.position.y=10;    
  this.griper.position.z=120;	

this.add(this.brazo);
this.add(this.griper);

}


function Brazo2 (){

THREE.Object3D.call(this);
this.brazo=new THREE.Mesh(new THREE.BoxGeometry(20,20,120));

  
  var gripper =new THREE.Shape();
  gripper.moveTo(0,0);
  gripper.lineTo(0,20);
  gripper.lineTo(20,40);
  gripper.lineTo(40,40);
  gripper.lineTo(60,20);
  gripper.lineTo(60,15);
  gripper.lineTo(50,15);
  gripper.lineTo(50,20);
  gripper.lineTo(40,30);
  gripper.lineTo(20,30);
  gripper.lineTo(10,20);
  gripper.lineTo(10,0);
  gripper.lineTo(20,-10);
  gripper.lineTo(40,-10);
  gripper.lineTo(50,0);
  gripper.lineTo(50,5);
  gripper.lineTo(60,5);
  gripper.lineTo(60,0);
  gripper.lineTo(40,-20);
  gripper.lineTo(20,-20);
  gripper.lineTo(0,0);
  gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  this.griper = new THREE.Mesh(gripperForma);

  this.brazo.position.x=-60;
  this.brazo.position.y=20;
  this.brazo.position.z=70;
  
  this.griper.rotation.y=-1.57;
  this.griper.position.x=-55;
  this.griper.position.y=10;    
  this.griper.position.z=120;	

this.add(this.brazo);
this.add(this.griper);

}


function Cabeza (){

THREE.Object3D.call(this);

this.cilindro1=new THREE.Mesh(new THREE.CylinderGeometry(20,20,50,100));
this.cilindro2=new THREE.Mesh(new THREE.CylinderGeometry(20,20,50,100));
this.cilindro3=new THREE.Mesh(new THREE.CylinderGeometry(10,10,50,100));

 this.cilindro1.position.y=100;
 this.cilindro1.position.x=-20;
 this.cilindro1.rotation.x +=1.57;
 
 this.cilindro2.position.y=100;
 this.cilindro2.position.x=20;
 this.cilindro2.rotation.x +=1.57;

 this.cilindro3.position.y=70;

 this.add(this.cilindro1); 
 this.add(this.cilindro2);
 this.add(this.cilindro3);
}


Brazo.prototype=new THREE.Object3D();
Brazo2.prototype=new THREE.Object3D();
Cabeza.prototype=new THREE.Object3D();

function setup(){

var cuboForma=new THREE.BoxGeometry(100,100,100);
var tri= new THREE.Shape();
tri.moveTo(0,0);
tri.lineTo(50,50);
tri.lineTo(100,0);
tri.lineTo(0,0);
var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-50});


  var cubo = new THREE.Mesh(cuboForma);
  var triangulo1 = new THREE.Mesh(trianguloForma);
  var triangulo2 = new THREE.Mesh(trianguloForma);
  

 triangulo1.position.x=100;
 triangulo1.position.y=-70;
 triangulo1.position.z=50;
 triangulo1.rotation.y +=1.57;

 triangulo2.position.x=-50;
 triangulo2.position.y=-70;
 triangulo2.position.z=50;
 triangulo2.rotation.y +=1.57

 
 var forma = new THREE.Geometry();
  
 THREE.GeometryUtils.merge(forma, cubo);
 THREE.GeometryUtils.merge(forma, triangulo1);
 THREE.GeometryUtils.merge(forma, triangulo2);

 var material =new THREE.MeshNormalMaterial();
 malla= new THREE.Mesh(forma, material);
 
 brazo1= new Brazo();
 brazo2= new Brazo2();
 cabeza= new Cabeza();
  
 //brazo2.position.x=-120;
 
 step=0.05; 
 step2=0.01;

 escena= new THREE.Scene();
 escena.add(malla);
 escena.add(brazo1);
 escena.add(brazo2);
 escena.add(cabeza);

 camara= new THREE.PerspectiveCamera();
 camara.position.z=500;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }

function loop() {
  requestAnimationFrame(loop);
  cabeza.rotation.y +=step2;
  malla.rotation.y-=step2;
  brazo1.rotation.y-=step2;
  brazo2.rotation.y-=step2;
  renderer.render(escena,camara);
if(Math.abs(brazo1.rotation.x)>.5)
  step=-step;
  brazo1.rotation.x+=step;
  brazo2.rotation.x-=step;
  
}

var escena, camara, renderer, malla;
var step, brazo1, brazo2, cabeza;

setup();
loop();
