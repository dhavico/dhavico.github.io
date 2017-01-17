function Luna(imagen,animaciones){
	Kinetic.Sprite.call(this);
	this.setWidth(468);
	this.setHeight(460);
	this.setX(200);
	this.setY(-10);
	this.setAnimations(animaciones);
    this.setAnimation('abierto');
	this.attrs.image = imagen;
	this.attrs.frameRate = 15;
	this.pestaniar = false;
};
Luna.prototype = Object.create(Kinetic.Sprite.prototype);