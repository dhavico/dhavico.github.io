function Moneda(x,y,imagen){
	Kinetic.Image.call(this);
	this.setWidth(32);
	this.setHeight(30);
	this.setX(x);
	this.setY(y-10);
	this.setImage(imagen);
};
Moneda.prototype = Object.create(Kinetic.Image.prototype);