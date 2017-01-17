function Enemigo(x,y, distanciaRecorrido, imagen){
	Kinetic.Image.call(this);
	this.setWidth(60);
	this.setHeight(70);
	this.contador = 0;
	this.setX(x);
	this.setY(y-10);
	//this.setFill('red');
	this.setImage(imagen);
	this.mover = function(){
		this.contador++;
		this.setX(this.getX() + Math.sin(this.contador * Math.PI / (20 * distanciaRecorrido)) * distanciaRecorrido);
		/*distanciaRecorrido 
		  2.5  = 140
		  4.15 = 280
		  4.5  = 320
	  	*/
	};
};
Enemigo.prototype = Object.create(Kinetic.Image.prototype);