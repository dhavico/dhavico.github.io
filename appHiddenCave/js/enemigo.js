function Enemigo(x,y, distanciaRecorrido, imagen){
	Kinetic.Rect.call(this);
	this.setWidth(60);
	this.setHeight(60);
	this.contador = 0;
	this.setX(x);
	this.setY(y);
	this.setFill('red');
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
Enemigo.prototype = Object.create(Kinetic.Rect.prototype);