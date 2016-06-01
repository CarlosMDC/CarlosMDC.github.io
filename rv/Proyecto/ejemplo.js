function Wall(size,x,y){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/2.5,size), new THREE.MeshBasicMaterial({color:0x99CC00}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}


Environment.prototype.setMuro=function(x,y){
	this.muro = new THREE.Mesh(new THREE.BoxGeometry(1.1,1.1,1.1),new THREE.MeshBasicMaterial({color: 0xff0000}));
	this.muro.position.x = x;
	this.muro.position.y = y;
	this.add(this.muro);
}



function Wall1(size,x,y){
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size/2.5,size), new THREE.MeshBasicMaterial({color: 0x00ff00}));
  this.size=size;
  this.position.x=x;
  this.position.z=y;
}



Wall1.prototype= new THREE.Mesh(); 
Wall.prototype= new THREE.Mesh();
Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var i=0; i< map.length; i++)
  for(var j=0; j< map.length; j++){
    if (map[i][j]==="x")
    this.add(new Wall(1,j-_offset,(i-_offset)));
    else if (map[i][j]==="r")
    this.add(new Walle(0.5,j-_offset,(i-_offset)));
	else if (map[i][j]==="y")
	{
	a=j-_offset;
	b=i-_offset;
    this.add(new Wall1(1,j-_offset,(i-_offset))); 
	}
  }
}

function setup(){
THREE.ImageUtils.crossOrigin='';
  var mapa=new Array();
   mapa[0]="x xxxxxxxxxxxxxxxxxxxxxx";
   mapa[1]="x    x   xxxx   x      x";
   mapa[2]="x    x xxxx     xxxx   x";
   mapa[3]="x       xx         x   x";
   mapa[4]="x            xx    x   x";
   mapa[5]="x        xxxxxxx xx  x x";
   mapa[6]="xxxxx        xxx       x";
   mapa[7]="x                      x";
   mapa[8]="x             xx       x";
   mapa[9]="x     xxxxxx      xxxxxx";
  mapa[10]="x                      x";
  mapa[11]="x       xxxxx      xx  x";
  mapa[12]="x                      x";
  mapa[13]="x xxxxx    xxxx     xx x";
  mapa[14]="x     xxxxxxx          x";
  mapa[15]="x                      x";
  mapa[16]="x   xxxx     xxx       x";
  mapa[17]="x    xx       x        x";
  mapa[18]="xx   xxxxx       xxxxxxx";
  mapa[19]="x        xxx     xxxxxxx";
  mapa[20]="x                    xxx";
  mapa[21]="xxxx     xxx      x    x";
  mapa[22]="xxxx                   x";
  mapa[23]="xxxx       xxxxx   r x x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxx";

  environment = new Environment();
  environment.setMap(mapa);
  
  camera2=new THREE.PerspectiveCamera();
  camera2.position.y=30;
  camera2.rotation.x=-1.57;
  
  camera = new THREE.OrthographicCamera( window.innerWidth / - 80, window.innerWidth / 80, window.innerHeight / 80, window.innerHeight / - 80, - 500, 1000 );
  camera.position.x = 200;
  camera.position.y = 100;
  camera.position.z = 200;
  
  
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  var cube = new THREE.Mesh( geometry, material );
  
  cube.position.x=2;
  cube.position.y=0;
  cube.position.z=-11;
  //environment.add( cube );
  
  
  renderer= new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
}




function loop(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  
  if (keyboard.pressed("P")){
	renderer.render(environment,camera2);
		
	}
	else{  
  
	var timer = Date.now() * 0.0001;
 camera.position.x = Math.cos( timer ) * 200;
  camera.position.z = Math.sin( timer ) * 200;
  camera.lookAt( environment.position );
  renderer.render(environment, camera);
	}
  
  
}

var environment, camera, renderer;
var a,b;
var pfin;
var keyboard	= new THREEx.KeyboardState();

setup();
loop();