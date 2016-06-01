
function setup() {

	THREE.ImageUtils.crossOrigin='';
	textura= THREE.ImageUtils.loadTexture('cuadros.jpg')
	var material = new THREE.MeshBasicMaterial({map: textura});
	var material2 = new THREE.MeshPhongMaterial({color: 0xffff00});
	material2.transparent = true;
	material2.opacity =0;
	
	Pared1= new THREE.Mesh(new THREE.BoxGeometry(3,10,100),material2);
	Pared2= new THREE.Mesh(new THREE.BoxGeometry(100,10,3),material2);
	Pared3= new THREE.Mesh(new THREE.BoxGeometry(3,10,100),material2);	
	Pared4= new THREE.Mesh(new THREE.BoxGeometry(100,10,3),material2);
	Plataforma=  new THREE.Mesh(new THREE.BoxGeometry(100,-10,100),material);

	Pared1.castShadow = true;
	Pared2.castShadow = true;
	Pared3.castShadow = true;
	Pared4.castShadow = true;
	
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
	Pared2.position.z=50;
	Pared3.position.x=-50;
	Pared4.position.z=-50;
	Plataforma.position.y=-5;

	
	camara2 = new THREE.PerspectiveCamera();
	camara2.position.z=200;
	camara2.position.y=30;
	//camara2.rotation.x=-1.57;
	
	camara = new THREE.OrthographicCamera( window.innerWidth / - 12, window.innerWidth / 12, window.innerHeight / 8, window.innerHeight / - 8, - 500, 1000 );
	camara.position.x = 200;
	camara.position.y = 100;
	camara.position.z = 200;

	
	escena= new THREE.Scene();
	escena.add(Pared1);
	escena.add(Pared2);
	escena.add(Pared3);
	escena.add(Pared4);
	escena.add(camara);
	escena.add(camara2);
	escena.add(wally);
	escena.add(Plataforma);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 	document.body.appendChild(renderer.domElement);
	step=1;

	raycaster=new THREE.Raycaster(wally.position,new THREE.Vector3(1,0,0));
	
 }


 function onWindowResize() {
				camera.left = window.innerWidth / - 2;
				camera.right = window.innerWidth / 2;
				camera.top = window.innerHeight / 2;
				camera.bottom = window.innerHeight / - 2;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
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

  }
  else if(dir==2){
     wally.position.z+=step;
	 wally.rotation.y=0;
	 
  }
  else if(dir==3){
    wally.position.x-=step;
	wally.rotation.y=-1.57;
	

  }
  else if(dir==4){
    wally.position.z-=step;
	wally.rotation.y=3.14;
	}

	if (keyboard.pressed("P")){
		var timer = Date.now() * 0.0001;
				camara.position.x = Math.cos( timer ) * 200;
				camara.position.z = Math.sin( timer ) * 200;
				camara.lookAt( escena.position );
				renderer.render( escena, camara );
	}
	else renderer.render(escena,camara2);
	
	//renderer.render(escena,camara2);
  
  requestAnimationFrame(loop);
}

var escena, camara,camara2, renderer, Pared1, Pared2,Pared3,Pared4, wally, Plataforma;
var Obstaculo1,Obstaculo2,Obstaculo3,Obstaculo4;
var raycaster;
var dir=1;
var keyboard	= new THREEx.KeyboardState();


setup();
loop();