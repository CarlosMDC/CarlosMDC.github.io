function setup(){
//se plantea las geometrias a utillixzar

var cuboForma= new THREE.BoxGeometry(1,1,1);
var cil= new THREE.CircleGeometry(0.1,0.5,1);
var cilindroForma = new THREE.ExtrudeGeometry(cil,{amount:1});
var tri= new THREE.Shape();
tri.moveTo(0,0.1);
tri.lineTo(0.5,0.5);
tri.lineTo(1,0);
tri.lineTo(0,0.1);
var trianguloForma = new THREE.ExtrudeGeometry(tri,{amount:1});

 //Para generar una forma combinada se requiere de las mallas poaras poder desplazar las formas en el espacio virtual
 
  var cubo = new THREE.Mesh(cuboForma);
  var cilindro1 = new THREE.Mesh(cilindroForma);
  var cilindro2 = new THREE.Mesh(cilindroForma);
  var triangulo1 = new THREE.Mesh(trianguloForma);
  var triangulo2 = new THREE.MEsh(trianguloForma)
 //se desplazan las mallas
 
 cilindro1.position.y=0.5;
 cilindro2.position.y=0.6;
 cilindro1.position.x=0.-0.25;
 cilindro2.position.x=0.25;
 triangulo1.position.x=0.5;
 triangulo2.position.x=0.5;
 
 //se genera una forma geometria abstracta
 
 var forma = new THREE.Geometry();
 // se utiliza el paqyuete GeometryUtils para conjuntar las formas
 
 THREE.GeometryUtils.merge(forma, cubo);
 THREE.GeometryUtils.merge(forma, cilindro1);
 THREE.GeometryUtils.merge(forma, cilindro2);
 THREE.GeometryUtils.merge(forma, triangulo1);
 THREE.GeometryUtils.merge(forma, triangulo2);
 
 //se genera la malla a partir de la forma 
 
 malla= new THREE.Mesh(forma);
 
 //Se inicializa la escena y se agrega la malla a esta 
 
 escena= new THREE.Scene();
 escena.add(malla);
 //se inicializa la camara y el renderet
 
 camara= new THREE.PerspectiveCamera();
 camara.position.z=10;
 
 renderer= new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
 document.body.appendChild(renderer.domElement);
 }
 
 function loop() {
  requestAnimationFrame(loop);
  //Es importante notar que las rotaciones son sobre los ejes que  estan fijos a la malla, no los ejees del lienzo, inicialmente ambos coincide
  
  malla.rotation.x +=0.01;
  malla.rotation.t +=0.01;
  
  renderer.render(escena,camara);
}

var escena, camara, renderer, malla;
setup();
loop();
