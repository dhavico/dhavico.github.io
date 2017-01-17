function Plataforma(x,y,tamanio,imagen){
	Kinetic.Image.call(this);
	this.setWidth(tamanio);
	this.setHeight(50);
	this.setX(x);
	this.setY(y);
	//this.setFill('gray');
	this.setImage(imagen);
};
Plataforma.prototype = Object.create(Kinetic.Image.prototype);