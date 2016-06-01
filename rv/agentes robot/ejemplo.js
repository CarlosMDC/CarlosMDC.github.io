function Wall(size,x=0,y=0){
	
  // THREE.ImageUtils.crossOrigin = '';
  // this.textura = 	THREE.ImageUtils.loadTexture('http://3.bp.blogspot.com/-bPbC3gBml80/T02bLOgIu5I/AAAAAAAAKFE/vmC-AZt2wWY/s1600/photofusionvirtual@blogspot+(1).jpg');	
  // THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size),new THREE.MeshBasicMaterial({map: this.textura}));
  THREE.Mesh.call(this, new THREE.BoxGeometry(size,size,size),new THREE.MeshNormalMaterial());
  this.size=size;
  this.position.x=x;
  this.position.y=y;
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
   mapa[1]="xx r   xxxxxx     r    x";
   mapa[2]="x        r      xxxx   x";
   mapa[3]="x    xxxxx           r x";
   mapa[4]="x      r     xx   r    x";
   mapa[5]="x  r      xxxxxxxxx  x x";
   mapa[6]="xxxxx        xxx  r    x";
   mapa[7]="xr    r                x";
   mapa[8]="x             xx     r x";
   mapa[9]="x  r  xxxxxx r    xxx  x";
  mapa[10]="x                      x";
  mapa[11]="x  r    xxxxx r    xx  x";
  mapa[12]="x                 r    x";
  mapa[13]="x xxxxx r  xxxx     xx x";
  mapa[14]="x  r  xxxxxxx       r  x";
  mapa[15]="x                r     x";
  mapa[16]="xr  xxxx  r  xxx     r x";
  mapa[17]="x      r      x        x";
  mapa[18]="xx    xxxx       xxx   x";
  mapa[19]="x        xxx    r      x";
  mapa[20]="x   r        r       xxx";
  mapa[21]="xxxx r   xxx      x    x";
  mapa[22]="x           r          x";
  mapa[23]="xxxx   r   xxxxx     x x";
  mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxx";
  
  environment = new Environment();
  environment.setMap(mapa);
   luzPuntual = new THREE.PointLight(0xffffff);
 luzPuntual.position.x=0;  
 luzPuntual.position.y=10;
 luzPuntual.position.z=30;
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  renderer= new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
  environment.add(luzPuntual);
}

function loop(){
  requestAnimationFrame(loop);
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment, camera);
}

var environment, camera, renderer, step, Walle, angle;

setup();
loop();