function Llave(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(40);
	this.setHeight(30);
	this.setX(x);
	this.setY(y);
	//this.setFill('#f7e019');
	this.setImage(imagen);
};
Llave.prototype = Object.create(Kinetic.Image.prototype);