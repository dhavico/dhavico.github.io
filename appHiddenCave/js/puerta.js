function Puerta(x,y,imagen){
	Kinetic.Rect.call(this);
	//this.setPoints([1920, 570, 2080, 570, 2080, 440, 2400, 440, 2400, 700, 1920, 700]);
	this.setWidth(140);
	this.setHeight(150);
	this.setX(x);
	this.setY(y);
	this.setFill('gray');
};
Puerta.prototype = Object.create(Kinetic.Rect.prototype);