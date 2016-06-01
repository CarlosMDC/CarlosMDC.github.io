function Wall(size,x=0,y=0){
	
  //THREE.ImageUtils.crossOrigin = '';
  //this.textura = 	THREE.ImageUtils.loadTexture('http://3.bp.blogspot.com/-bPbC3gBml80/T02bLOgIu5I/AAAAAAAAKFE/vmC-AZt2wWY/s1600/photofusionvirtual@blogspot+(1).jpg');	
  //THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size),new THREE.MeshBasicMaterial({map: this.textura}));
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size),new THREE.MeshPhongMaterial({color:0x0000ff}));
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
 Environment.prototype.setMuro=function(x,y){
	this.muro = new THREE.Mesh(new THREE.BoxGeometry(1.1,1.1,1.1),new THREE.MeshBasicMaterial({color: 0x0000ff}));
	this.muro.position.x = x;
	this.muro.position.y = y;
	this.add(this.muro);
}

 
 
Wall.prototype= new THREE.Mesh();
Environment.prototype.setMap= function(map){
  var _offset= Math.floor(map.length/2);
  for(var i=0; i< map.length; i++)
  for(var j=0; j< map.length; j++){
    if (map[i][j]==="x")
    this.add(new Wall(1,j-_offset,-(i-_offset)));
    else if (map[i][j]==="r")
    this.add(new Walle(1,j-_offset,-(i-_offset)));
  }
}

function setup(){
  var mapa=new Array();
   mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxx";
   mapa[1]="xx     xxxxxx          x";
   mapa[2]="x               xxxx   x";
   mapa[3]="x    xxxxx             x";
   mapa[4]="x            xx        x";
   mapa[5]="x         xxxxxxxxx  x x";
   mapa[6]="xxxxx        xxx  r    x";
   mapa[7]="x                      x";
   mapa[8]="x             xx       x";
   mapa[9]="xxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[10]="x                      x";
  mapa[11]="x       xxxxx      xx  x";
  mapa[12]="x                      x";
  mapa[13]="x xxxxx    xxxx     xx x";
  mapa[14]="x  r  xxxxxxx          x";
  mapa[15]="x                      x";
  mapa[16]="x   xxxx     xxx       x";
  mapa[17]="x             x        x";
  mapa[18]="xxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[19]="x         xxx          x";
  mapa[20]="x                    xxx";
  mapa[21]="xxxx     xxx           x";
  mapa[22]="x                      x";
  mapa[23]="xxxx   r   xxxxx     x x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  environment.setMap(mapa);
   //luzPuntual = new THREE.PointLight(0xffffff);
 //luzPuntual.position.x=0;  
 //luzPuntual.position.y=10;
 //luzPuntual.position.z=30;
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  renderer= new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
  //environment.add(luzPuntual);
}

function loop(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment, camera);
}

var environment, camera, renderer, step, Walle, angle;
var murod, lugarx, lugary;

setup();
loop();