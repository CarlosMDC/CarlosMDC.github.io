function Sensor(position, direction){
	THREE.Raycaster.call(this,position,direction);
	this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();






function Walle(x=0, y=0){
	Agent.call(this,x,y);

	THREE.ImageUtils.crossOrigin = '';
	var textura = THREE.ImageUtils.loadTexture('http://threejs.org/examples/textures/crate.gif');
	var material = new THREE.MeshBasicMaterial( {map: textura} );
 	
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


	var cubo = new THREE.Mesh(cuboForma);
	var brazo1= new THREE.Mesh(brazoForma);
	var brazo2= new THREE.Mesh(brazoForma);
 	var cilindro1 = new THREE.Mesh(cilindroForma);
	var cilindro2 = new THREE.Mesh(cilindroForma);
	var cilindro3 = new THREE.Mesh(cilindroForma2);
	var triangulo1 = new THREE.Mesh(trianguloForma);
	var triangulo2 = new THREE.Mesh(trianguloForma);

 
 	cilindro1.position.y=10;
 	cilindro1.position.x=-2;
 	cilindro1.rotation.x +=1.57;
 
 	cilindro2.position.y=10;
 	cilindro2.position.x=2;
 	cilindro2.rotation.x +=1.57;

	cilindro3.position.y=7;
 
	triangulo1.position.x=10;
 	triangulo1.position.y=-7;
 	triangulo1.rotation.y +=1.57;

	triangulo2.position.x=-5;
	triangulo2.position.y=-7;
	triangulo2.rotation.y +=1.57

	brazo1.position.x=5.5;
	brazo1.position.y=2;
	brazo1.position.z=6;

	brazo2.position.x=-5.5;
	brazo2.position.y=2;
	brazo2.position.z=6;
 
	var forma = new THREE.Geometry();
  
	THREE.GeometryUtils.merge(forma, cubo);
	THREE.GeometryUtils.merge(forma, brazo1);
	THREE.GeometryUtils.merge(forma, brazo2);
	THREE.GeometryUtils.merge(forma, cilindro1);
	THREE.GeometryUtils.merge(forma, cilindro2);
	THREE.GeometryUtils.merge(forma, cilindro3);
	THREE.GeometryUtils.merge(forma, triangulo1);
	THREE.GeometryUtils.merge(forma, triangulo2);	
	
	this.sensor1=new Sensor();
	this.sensor2=new Sensor();
	this.sensor3=new Sensor();
	
	this.luz = new THREE.SpotLight(0xffffff,10,10,.20,.8,2)
	this.luz.position.x += -1;
	this.luz.position.y += -1;
	this.luz.target.position.set(0,0,0);
	
	this.actuator= new THREE.Mesh(forma,material);
	this.actuator.scale.set(0.04,0.04,0.04);
	this.actuator.rotation.y=-90*(Math.PI)/180;
	this.actuator.commands=[];
	this.add(this.actuator);
	this.add(this.luz);
	

 
 }

Walle.prototype=new Agent();





Walle.prototype.sense=function(environment){
	this.sensor1.set(this.position, new THREE.Vector3(Math.cos(this.rotation.y), 0, Math.sin(this.rotation.y)));  //Sensor de frente
			
	this.sensor2.set(this.position,	new THREE.Vector3(Math.sin(this.rotation.y), 0,	-Math.cos(this.rotation.y)));  //Sensor izquiero

	this.sensor3.set(this.position,	new THREE.Vector3(-Math.sin(this.rotation.y),0,	Math.cos(this.rotation.y)));  //Sensor derecho	
	
	var obstaculo1=this.sensor1.intersectObjects(environment.children,true);
	var obstaculo2=this.sensor2.intersectObjects(environment.children,true);
	var obstaculo3=this.sensor3.intersectObjects(environment.children,true);
	//Sensor frente
	if((obstaculo1.length > 0 && (obstaculo1[0].distance<=0.55	))){
		this.sensor1.colision=true;
		// environment.setMuro(this.position.x+1*Math.cos(this.rotation.z),  this.position.y+1*Math.sin(this.rotation.z));
	}
	else
		this.sensor1.colision=false;
	// Sensor Izquiero
	
	
	if((obstaculo2.length > 0 && (obstaculo2[0].distance<=0.55	))){
		this.sensor2.colision=true;
}
	else
		this.sensor2.colision=false;
	// sensor derecho
	
	
	
	if((obstaculo3.length > 0 && (obstaculo3[0].distance<=0.55))){
	
		this.sensor3.colision=true;
	}
	else
		this.sensor3.colision=false;
	
};



Walle.prototype.plan=function(environment){
	this.actuator.commands=[];
	// Condiciones de giro
	if(this.sensor1.colision==true && this.sensor2.colision==true && this.sensor3.colision==false)
	this.actuator.commands.push('rotateCCW');
	else if (this.sensor1.colision==false && this.sensor2.colision==true && this.sensor3.colision==false)
	this.actuator.commands.push('goStraight');
	else if (this.sensor1.colision==false && this.sensor2.colision==true && this.sensor3.colision==true)
	this.actuator.commands.push('goStraight');
	//else if (this.sensor1.colision==false && this.sensor2.colision==false && this.sensor3.colision==false)
	//this.actuator.commands.push('findWall'); 
	else if (this.sensor1.colision==true && this.sensor2.colision==false && this.sensor3.colision==false)
	this.actuator.commands.push('rotateCCW');
	else if (this.sensor1.colision==false && this.sensor2.colision==false && this.sensor3.colision==true)
	this.actuator.commands.push('goStraight');
	else if (this.sensor1.colision==true && this.sensor2.colision==false && this.sensor3.colision==true)
	this.actuator.commands.push('rotateCW');
	else if (this.sensor1.colision==true && this.sensor2.colision==true && this.sensor3.colision==false)
	this.actuator.commands.push('goStraight');
	/* cube.position.x=2;
    cube.position.y=0;
    cube.position.z=-11; */


	else if (this.actuator.position.x>1.5 && this.actuator.position.x<2.5 && this.actuator.position.z<-10.5 && this.actuator.position.z>-11.5)
	this.actuator.commands.push('stop');
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
  distance=0.05;
  Walle.position.x+=distance*Math.cos(Walle.rotation.y);
  Walle.position.z+=distance*Math.sin(Walle.rotation.y);
};

Walle.prototype.operations.rotateCW= function(Walle,angle){
  if (angle===undefined)
  angle=-Math.PI/2;
  Walle.rotation.y+=angle;
  //Walle.position.x+=Math.cos(Walle.rotation.y);
  //Walle.position.z+=Math.sin(Walle.rotation.y);
};

Walle.prototype.operations.rotateCCW= function(Walle,angle){
  if (angle===undefined)
  angle=Math.PI/2;
  Walle.rotation.y+=angle;
  //Walle.position.x+=Math.cos(Walle.rotation.y);
  //Walle.position.z+=Math.sin(Walle.rotation.y);
};

Walle.prototype.operations.findWall= function(Walle,angle){
  if (angle===undefined)
  angle=-Math.PI/2;
  Walle.rotation.y+=angle;
  Walle.position.x+=Math.cos(Walle.rotation.y);
  Walle.position.z+=Math.sin(Walle.rotation.y);
};

Walle.prototype.operations.stop= function(Walle,angle){
  if (angle===undefined)
  
  Walle.position.x+=0;
  Walle.position.z+=0;
};