function Llave(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(40);
	this.setHeight(30);
	this.setX(x);
	this.setY(y);
	this.setFill('#f7e019');
};
Llave.prototype = Object.create(Kinetic.Rect.prototype);