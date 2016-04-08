function setup() {

	Pared1= new THREE.Mesh(new THREE.BoxGeometry(10,100,1),new THREE.MeshNormalMaterial());
	Pared2= new THREE.Mesh(new THREE.BoxGeometry(10,100,1),new THREE.MeshNormalMaterial());
	Pared3= new THREE.Mesh(new THREE.BoxGeometry(100,10,1),new THREE.MeshNormalMaterial());
	Pared4= new THREE.Mesh(new THREE.BoxGeometry(100,10,1),new THREE.MeshNormalMaterial());
	

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
 
	 var material =new THREE.MeshNormalMaterial();
	 wally= new THREE.Mesh(forma, material);

	Pared1.position.x=50;
	Pared2.position.x=-50;
	Pared3.position.y=50;
	Pared4.position.y=-50;	

	camara = new THREE.PerspectiveCamera();
	camara.position.z=200;

	raycaster1= new THREE.Raycaster(wally.position, new THREE.Vector3(1,0,0));
	raycaster2= new THREE.Raycaster(wally.position, new THREE.Vector3(-1,0,0));
	raycaster3= new THREE.Raycaster(wally.position, new THREE.Vector3(0,1,0));
	raycaster4= new THREE.Raycaster(wally.position, new THREE.Vector3(0,-1,0));
	
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
	step=0.9;
	step2=0.01;
 }


function loop() {

	obstaculo1= raycaster1.intersectObject(Pared1);
	obstaculo2= raycaster2.intersectObject(Pared2);
	obstaculo3= raycaster3.intersectObject(Pared3);
	obstaculo4= raycaster4.intersectObject(Pared4);

	wally.position.x +=step;



	if((obstaculo1.length>0 && (obstaculo1[0].distance<=10)))
	step=-step;
	wally.position.x +=step;

		if((obstaculo1.length>0 && (obstaculo1[0].distance>1)))
		step=step;
		wally.position.y =step;
	
			if((obstaculo3.length>0 && (obstaculo3[0].distance<=10)))
			step=step;
			wally.position.x =step;

				if((obstaculo2.length>0 && (obstaculo2[0].distance<=10)))
				step=step;
				wally.position.y -=step;
	
					if((obstaculo4.length>0 && (obstaculo4[0].distance<=10)))
					step=step;
					wally.position.x +=step;
					
				
			
		


	raycaster1.set(wally.position, new THREE.Vector3(1,0,0))
	raycaster2.set(wally.position, new THREE.Vector3(-1,0,0))
	raycaster3.set(wally.position, new THREE.Vector3(0,1,0))
	raycaster4.set(wally.position, new THREE.Vector3(0,-1,0))

	requestAnimationFrame(loop);
	renderer.render(escena,camara);
}

var escena, camara, renderer, Pared1, Pared2,Pared3,Pared4, wally;
var raycaster1, raycaster2, raycaster3,raycaster4,step,step2;
var obstaculo1, obstaculo2,obstaculo3,obstaculo4;
setup();
loop();
