function Sensor(position, direction){
	THREE.Raycaster.call(this,position,direction);
	this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();


function Brazo (){

THREE.Object3D.call(this);

THREE.ImageUtils.crossOrigin = '';
this.textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif')

this.brazoMaterial = new THREE.MeshBasicMaterial( {map: this.textura} );
//this.brazoMaterial = new THREE.MeshNormalMaterial();
this.brazoForma = new THREE.BoxGeometry(20,20,120);
 
this.brazo = new THREE.Mesh( this.brazoForma, this.brazoMaterial );

  
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
  
  this.gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  this.griperMaterial = new THREE.MeshBasicMaterial( {map: this.textura} );
  //this.griperMaterial = new THREE.MeshNormalMaterial();
  
  this.griper = new THREE.Mesh( this.gripperForma, this.griperMaterial ); 

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

THREE.ImageUtils.crossOrigin = '';
this.textura   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif')

this.brazoMaterial = new THREE.MeshBasicMaterial( {map: this.textura} );
//this.brazoMaterial = new THREE.MeshNormalMaterial();
this.brazoForma = new THREE.BoxGeometry(20,20,120);
 
this.brazo = new THREE.Mesh( this.brazoForma, this.brazoMaterial );

  
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
  
  this.gripperForma = new THREE.ExtrudeGeometry(gripper,{amount:15});
  this.griperMaterial = new THREE.MeshBasicMaterial( {map: this.textura} );
  //this.griperMaterial = new THREE.MeshNormalMaterial();  
  this.griper = new THREE.Mesh(this.gripperForma, this.griperMaterial);
  
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

THREE.ImageUtils.crossOrigin = '';
this.textura2   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif')

this.cilindroForma = new THREE.CylinderGeometry(20,20,50,100);
this.cilindroMaterial = new THREE.MeshBasicMaterial( {map: this.textura2} );
//this.cilindroMaterial = new THREE.MeshNormalMaterial();
this.cilindro2Forma = new THREE.CylinderGeometry(10,10,50,100);
this.cilindro2Material = new THREE.MeshBasicMaterial( {map: this.textura2} );
//this.cilindro2Material = new THREE.MeshNormalMaterial();
         

this.cilindro1 = new THREE.Mesh( this.cilindroForma, this.cilindroMaterial );
this.cilindro2 = new THREE.Mesh( this.cilindroForma, this.cilindroMaterial );
this.cilindro3 = new THREE.Mesh( this.cilindro2Forma, this.cilindro2Material );

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

function Pierna (){

THREE.Object3D.call(this);

THREE.ImageUtils.crossOrigin = '';
this.textura3   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif')


var tri= new THREE.Shape();
tri.moveTo(0,0);
tri.lineTo(50,50);
tri.lineTo(100,0);
tri.lineTo(0,0);
this.trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:-50});
this.trianguloMaterial = new THREE.MeshBasicMaterial( {map: this.textura3} );
//this.trianguloMaterial = new THREE.MeshNormalMaterial();         

this.pierna = new THREE.Mesh( this.trianguloForma, this.trianguloMaterial );
this.pierna2 = new THREE.Mesh( this.trianguloForma, this.trianguloMaterial );


 this.pierna.position.x=100;
 this.pierna.position.y=-70;
 this.pierna.position.z=50;
 this.pierna.rotation.y +=1.57;

 this.pierna2.position.x=-50;
 this.pierna2.position.y=-70;
 this.pierna2.position.z=50;
 this.pierna2.rotation.y +=1.57

 this.add(this.pierna); 
 this.add(this.pierna2);
 
}


function Cuerpo(){
 
THREE.Object3D.call(this);
 
THREE.ImageUtils.crossOrigin = ''; 
this.textura4   = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif')

this.cuboForma=new THREE.BoxGeometry(100,100,100,100);
this.cuboMaterial = new THREE.MeshBasicMaterial( {map: this.textura4} );
//this.cuboMaterial = new THREE.MeshNormalMaterial();

this.cuerpo = new THREE.Mesh( this.cuboForma, this.cuboMaterial );

 this.cuerpo.position.x=0;
 this.cuerpo.position.y=0;
 this.cuerpo.position.z=0;
 this.cuerpo.rotation.y +=1.57;
 
 this.add(this.cuerpo);
 
}


Cuerpo.prototype = new THREE.Object3D();
Brazo.prototype  = new THREE.Object3D();
Brazo2.prototype = new THREE.Object3D();
Cabeza.prototype = new THREE.Object3D();
Pierna.prototype = new THREE.Object3D();



function Walle(x=0, y=0){
	Agent.call(this,x,y);

	this.sensor    = new Sensor();
	this.actuator  = new Array();
	this.cuerpo    = new Cuerpo();
	this.brazo1    = new Brazo();
	this.brazo2    = new Brazo2();
	this.cabeza    = new Cabeza();
	this.piernas   = new Pierna(); 
  

 //var luzPuntual=new THREE.PointLight(0xffffff);
 //luzPuntual.position.x=10;
 //luzPuntual.position.y=10;
 //luzPuntual.position.z=10;

 
 this.add(this.cuerpo);
 this.add(this.brazo1);
 this.add(this.brazo2);
 this.add(this.cabeza);
 this.add(this.piernas);
 //this.add(this.luzPuntual);

 }

Walle.prototype = new Agent();

Walle.prototype.sense = function(environment){
	this.sensor.set(this.position,
		new THREE.Vector3(Math.cos(this.rotation.z),
			Math.sin(this.rotation.z),
			0));
	var obstaculo=this.sensor.intersectObjects(environment.children,true);

	if((obstaculo.length > 0 &&
	(obstaculo[0].distance<=.5)))
		this.sensor.colision=true;
	else
		this.sensor.colision=false;
};
Walle.prototype.plan=function(environment){
	this.actuator.commands=[];

	if(this.sensor.colision==true)
	this.actuator.commands.push('rotateCW');
	else
	this.actuator.commands.push('goStraight');
};

Walle.prototype.act= function (environment){
  var command= this.actuator.commands.pop();
  if (command===undefined)
  console.log('Undefined command');
  else if (command in this.operations)
  this.operations[command](this);
  else
  console.log('Unknown command');
};

Walle.prototype.operations={ };
Walle.prototype.operations.goStraight= function(Walle,distance){
  if (distance===undefined)
  distance=0.1;
  Walle.scale.set( 0.005, 0.005, 0.005);
   
 step2=0.5; 
 step=0.2;
   
  Walle.cabeza.rotation.y  += step;
  Walle.cuerpo.rotation.y  = 1.57;
  Walle.piernas.rotation.y = 1.57;
  Walle.brazo1.rotation.y  = 1.57;
  Walle.brazo2.rotation.y  = 1.57;
	if(Math.abs(Walle.brazo1.rotation.x)>.05)
		step=-step;
  Walle.brazo1.rotation.z+=step;
  Walle.brazo2.rotation.z-=step;

  
  Walle.position.x+=distance*Math.cos(Walle.rotation.z);
  Walle.position.y+=distance*Math.sin(Walle.rotation.z); 

};

Walle.prototype.operations.rotateCW= function(Walle,angle){
  if (angle===undefined)
  angle=-Math.PI/2;
  Walle.rotation.z+=angle;
};

Walle.prototype.operations.rotateCCW= function(Walle,angle){
  if (angle===undefined)
  angle=Math.PI/2;
  Walle.rotation.z+=angle;
};