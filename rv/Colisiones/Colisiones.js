function Wally(){


	THREE.Object3D.call(this);	

	var cuboForma= new THREE.BoxGeometry(10,10,10);
	var brazoForma= new THREE.BoxGeometry(2,2,12);
	var cilindroForma= new THREE.CylinderGeometry(2,2,5,100);
	var cilindroForma2= new THREE.CylinderGeometry(1,1,5,100);	
	var tri= new THREE.Shape();
	tri.moveTo(0,0);
	tri.lineTo(2,2);
	tri.lineTo(4,0);
	tri.lineTo(0,0);
	var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-5});
	
	var material =new THREE.MeshNormalMaterial();

	this.cubo = new THREE.Mesh(cuboForma, material);
	this.brazo1= new THREE.Mesh(brazoForma,material);
	this.brazo2= new THREE.Mesh(brazoForma,material);
 	this.cilindro1 = new THREE.Mesh(cilindroForma,material);
	this.cilindro2 = new THREE.Mesh(cilindroForma,material);
	this.cilindro3 = new THREE.Mesh(cilindroForma2,material);
	this.triangulo1 = new THREE.Mesh(trianguloForma,material);
	this.triangulo2 = new THREE.Mesh(trianguloForma,material);
 
 	this.cilindro1.position.y=10;
 	this.cilindro1.position.x=-2;
 	this.cilindro1.rotation.x +=1.57;
 
 	this.cilindro2.position.y=10;
 	this.cilindro2.position.x=2;
 	this.cilindro2.rotation.x +=1.57;

	this.cilindro3.position.y=7;
 
	this.triangulo1.position.x=10;
 	this.triangulo1.position.y=-7;
 	this.triangulo1.rotation.y +=1.57;

	this.triangulo2.position.x=-5;
	this.triangulo2.position.y=-7;
	this.triangulo2.rotation.y +=1.57

	this.brazo1.position.x=5.5;
	this.brazo1.position.y=2;
	this.brazo1.position.z=6;

	this.brazo2.position.x=-5.5;
	this.brazo2.position.y=2;
	this.brazo2.position.z=6;

	this.add(this.cubo);
	this.add(this.brazo1);
	this.add(this.brazo2);
	this.add(this.cilindro1);
	this.add(this.cilindro2);
	this.add(this.cilindro3);
	this.add(this.triangulo1);
	this.add(this.triangulo2);
	this.add(this.luzPuntual);
 
}



Wally.prototype=new THREE.Object3D();



function setup() {

	Pared1= new THREE.Mesh(new THREE.BoxGeometry(3,10,100),new THREE.MeshNormalMaterial({color: '#00ff00'}));
	Pared2= new THREE.Mesh(new THREE.BoxGeometry(100,10,3),new THREE.MeshNormalMaterial({color: '#ff0000'}));
	Pared3= new THREE.Mesh(new THREE.BoxGeometry(3,10,100),new THREE.MeshNormalMaterial({color: '#0000ff'}));	
	Pared4= new THREE.Mesh(new THREE.BoxGeometry(100,10,3),new THREE.MeshNormalMaterial({color: '#aacc00'}));
		

	Pared1.position.x=50;
	Pared2.position.z=50;
	Pared3.position.x=-50;
	Pared4.position.z=-50;	


	wally =	new Wally();


	camara = new THREE.PerspectiveCamera();
	camara.position.y=150;
	camara.rotation.x=-1.57;

	escena= new THREE.Scene();
	escena.add(Pared1);
	escena.add(Pared2);
	escena.add(Pared3);
	escena.add(Pared4);
	escena.add(camara);
	escena.add(wally);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 	document.body.appendChild(renderer.domElement);
	step=1;

	raycaster=new THREE.Raycaster(wally.position,new THREE.Vector3(1,0,0));
	
 }


function loop() {

  
  Obstaculo1=raycaster.intersectObject(Pared1);
  Obstaculo2=raycaster.intersectObject(Pared2);
  Obstaculo3=raycaster.intersectObject(Pared3);
  Obstaculo4=raycaster.intersectObject(Pared4);
  
  if ((Obstaculo1.length>0) && (Obstaculo1[0].distance<=10)){
    raycaster.set(wally.position,new THREE.Vector3(0,0,1));
	dir=2;
	
  }
  
  if ((Obstaculo2.length>0) && (Obstaculo2[0].distance<=10)){
    raycaster.set(wally.position,new THREE.Vector3(-1,0,0));
	dir=3;
  }
 if ((Obstaculo3.length>0) && (Obstaculo3[0].distance<=10)){
    raycaster.set(wally.position,new THREE.Vector3(0,0,-1));
	dir=4;
  }
  
  if ((Obstaculo4.length>0) && (Obstaculo4[0].distance<=10)){
    raycaster.set(wally.position,new THREE.Vector3(1,0,0));
	dir=1;
  }


if (dir==1){
	wally.position.x+=step;
	wally.rotation.y=1.57;
	wally.rotation.z=0;
	 
	 	 
  }
  else if(dir==2){
	wally.position.z+=step;
	wally.rotation.y=0;
	wally.rotation.z=0;
	 
  }
  else if(dir==3){
	wally.position.x-=step;
	wally.rotation.y=-1.57;
	wally.rotation.z=0;
  }
  else if(dir==4){
	wally.position.z-=step;
	wally.rotation.y=3.14;
	wally.rotation.z=0;
    
	
	}
 
  renderer.render(escena,camara);
  requestAnimationFrame(loop);
}

var escena, camara, renderer, Pared1, Pared2,Pared3,Pared4, wally;
var Obstaculo1,Obstaculo2,Obstaculo3,Obstaculo4;
var raycaster;
var dir=1;
setup();
loop()