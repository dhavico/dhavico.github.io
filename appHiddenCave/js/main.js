var framesP = {
	estatico: [{
		x: 30,
        y: 0,
        width: 65,
        height: 79
	}],
    caminar: [{
        x: 30,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 109,
        y: 0,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 0,
        width: 65,
		height: 79
	}, {
		x: 267,
		y: 0,
		width: 65,
		height: 79
	}, {
		x: 346,
		y: 0,
		width: 65,
		height: 79
	}, {
		x: 425,
		y: 0,
		width: 65,
		height: 79
	}],
    saltarFrames: [{
        x: 109,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 188,
        y: 70,
        width: 65,
        height: 79
    },{
        x: 188,
        y: 70,
        width: 65,
        height: 79
    }, {
        x: 267,
        y: 70,
        width: 65,
		height: 79
	}, {
        x: 267,
        y: 70,
        width: 65,
		height: 79
	}, {
		x: 346,
		y: 70,
		width: 65,
		height: 79
	}, {
		x: 346,
		y: 70,
		width: 65,
		height: 79
	}, {
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	},{
		x: 425,
		y: 70,
		width: 65,
		height: 79
	}]
};
var frameLuna = {
	abierto:[{
		x: 0,
        y: 0,
        width: 468,
        height: 460
	}],
	pestaniando:[{
		x: 0,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 511,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 1022,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 1533,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 2045,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 2556,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 2045,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 1533,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 1022,
        y: 0,
        width: 468,
        height: 460
	},{
		x: 511,
        y: 0,
        width: 468,
        height: 460
	}]
};
var stage, fondo, grupoAssets;
var personaje,luna;
var techo, piso, piso2, paredIzq, paredDer;
var keyboard = {};
var intv;
var colision = false;
var jWidth = 1920, jHeight = 720;
var grav = 0.9;
var val_reb = 0;
var puntaje, vidas;
var juego = new Game();
var imgMu = new Image();
imgMu.src = 'img/muro.jpg';
var imgFondo = new Image();
imgFondo.src = 'img/fondo.png';
var imgLuna = new Image();
imgLuna.src = 'img/spriteLuna.png';
var imgMoneda = new Image();
imgMoneda.src = 'img/moneda.png';
var imgPl70 = new Image();
imgPl70.src = 'img/plataforma_70x50.png';
var imgPl140 = new Image();
imgPl140.src = 'img/plataforma_140x50.png';
var imgPl280 = new Image();
imgPl280.src = 'img/plataforma_280x50.png';
var imgPl700 = new Image();
imgPl700.src = 'img/plataforma_700x50.png';
var imgEnemigo = new Image();
imgEnemigo.src = 'img/enemigoRosa.png';
var imgLlave = new Image();
imgLlave.src = 'img/llave.png';
//var audio = new Audio('sound/salto.ogg');

grupoAssets = new Kinetic.Group({
	x: 0,
	y: 0
});
stage = new Kinetic.Stage({
	container: 'game',
	width: document.documentElement.clientWidth,
	height: document.documentElement.clientHeight < 700 ? jHeight : document.documentElement.clientHeight
});
imagenFondo = new Kinetic.Image({
    x:0,
    y:0,
    image: imgFondo,
    width: stage.getWidth(),
    height: stage.getHeight()
});
puntaje = new Kinetic.Text({
	text: 'Puntaje: 0',
	height: 25,
	width: 150,
	x: stage.getWidth()-150,
	y: 10,
	fill: '#fff',
	fontFamily: 'Arial',
	fontSize: 22
});
vidas = new Kinetic.Text({
	text: 'Vidas: ' + juego.vidas,
	height: 25,
	width: 150,
	x: 50,
	y: 10,
	fill: '#fff',
	fontFamily: 'Arial',
	fontSize: 22
});

function nivelUno() {
	juego.puntaje = 0;
	juego.vidas = 3;
	fondo = new Kinetic.Layer();
	/* Pisos  X, Y, W, H*/
	techo = new Piso(0,-300,jWidth*5 + 500,50);
	piso = new Piso(0,700,jWidth*3,stage.getHeight()-700);
	piso2 = new Piso(jWidth*3 + 600,550,jWidth*2,stage.getHeight()-550);
	paredIzq = new Muro(-685, -300, 700, stage.getHeight()+300);
	paredDer = new Muro(jWidth*5 + 600, -300, 700, stage.getHeight()+300);
	grupoAssets.add(techo);
	grupoAssets.add(piso);
	grupoAssets.add(piso2);
	grupoAssets.add(paredIzq);
	grupoAssets.add(paredDer);
	/* Muros (X, Y, W, H) --> Y = 700 - H*/
	grupoAssets.add(new Muro(jWidth, 570, 160, 130));
	grupoAssets.add(new Muro(jWidth + 160, 440, 320, 260));
	grupoAssets.add(new Muro(jWidth + 1350, 380, 450, 320));
	grupoAssets.add(new Muro(jWidth + 1800, 460, 160, 240));
	grupoAssets.add(new Muro(jWidth + 1960, 570, 250, 130));
	/* Enemigos */
	/*=====================================================================================
	=======================================================================================*/
	grupoAssets.add(new Enemigo(480, 540-60,2.5,imgEnemigo));												//////////////
	grupoAssets.add(new Enemigo(640, jHeight-80,5,imgEnemigo));											//////////////
	grupoAssets.add(new Enemigo(835, 420-60,2.5,imgEnemigo));												/////
	grupoAssets.add(new Enemigo(1129, 180-60,2.5,imgEnemigo));												/////
	grupoAssets.add(new Enemigo(1371, 420-60,4.15,imgEnemigo));											//////////////
	grupoAssets.add(new Enemigo(jWidth + 160, 440-60,4.5,imgEnemigo));										//////////////
	grupoAssets.add(new Enemigo(2040, 10-60,2.5,imgEnemigo));												/////
	grupoAssets.add(new Enemigo(2496, jHeight-80,4.5,imgEnemigo));											/////
	grupoAssets.add(new Enemigo(2822, 440-60,2.5,imgEnemigo));												//////////////
	grupoAssets.add(new Enemigo(2942, jHeight-80,4.5,imgEnemigo));											//////////////
	grupoAssets.add(new Enemigo(3456, 130-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(jWidth + 1800, 460-60,2.75,imgEnemigo));
	grupoAssets.add(new Enemigo(4400, jHeight-80,4.5,imgEnemigo));
	grupoAssets.add(new Enemigo(4440, 360-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(4920, jHeight-80,4.5,imgEnemigo));
	grupoAssets.add(new Enemigo(5310, 520-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(jWidth*3 + 230, jHeight - 100-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(jWidth*3 + 600 + 280, 400-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(6780, -10-60,4.15,imgEnemigo));
	grupoAssets.add(new Enemigo(7270, 210-60,4.15,imgEnemigo));
	grupoAssets.add(new Enemigo(7550, jHeight-230,4.5,imgEnemigo));
	grupoAssets.add(new Enemigo(7970, 400-60,4.15,imgEnemigo));
	grupoAssets.add(new Enemigo(8180, jHeight-230,4.5,imgEnemigo));
	grupoAssets.add(new Enemigo(8500, 210-60,2.5,imgEnemigo));
	grupoAssets.add(new Enemigo(8670, jHeight-230,4.5,imgEnemigo));
	grupoAssets.add(new Enemigo(9020, 400-60,1,imgEnemigo));
	/* Plataforma (X, Y, W)*/
	/*=====================================================================================
	=======================================================================================*/
	/*1*/grupoAssets.add(new Plataforma(480, 540, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(565, 296, 140,imgPl140));
	grupoAssets.add(new Plataforma(640, 480, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(835, 420, 140,imgPl140));//SIN MONEDA
	/*5*/grupoAssets.add(new Plataforma(1129, 180, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(1180, 540, 140,imgPl140));//TRES MONEDAS VERTICALES
	grupoAssets.add(new Plataforma(1280, 296, 140,imgPl140));
	grupoAssets.add(new Plataforma(1371, 420, 280,imgPl280));//DOS MONEDAS EXTREMOS//--ENEMIGO
	grupoAssets.add(new Plataforma(1980, 270, 140,imgPl140));
	/*10*/grupoAssets.add(new Plataforma(2040, 10, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(2112, 130, 140,imgPl140));
	grupoAssets.add(new Plataforma(2496, 10, 700,imgPl700));//MONEDAS EN TODA LA PLATAFORMA
	grupoAssets.add(new Plataforma(2496, 440, 140,imgPl140));
	grupoAssets.add(new Plataforma(2822, 440, 140,imgPl140));//--ENEMIGO
	/*15*/grupoAssets.add(new Plataforma(3110, 550, 140,imgPl140));
	grupoAssets.add(new Plataforma(3456, 130, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(3744, 230, 140,imgPl140));
	grupoAssets.add(new Plataforma(4400, 520, 70,imgPl70));//SIN MONEDA
	grupoAssets.add(new Plataforma(4440, 360, 140,imgPl140));//--ENEMIGO
	/*20*/grupoAssets.add(new Plataforma(4540, 520, 140,imgPl140));
	grupoAssets.add(new Plataforma(4680, 200, 140,imgPl140));//SIN MONEDA
	grupoAssets.add(new Plataforma(4890, 360, 280,imgPl280));//SIN MONEDA
	grupoAssets.add(new Plataforma(5310, 520, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(jWidth*3 + 230, jHeight - 100, 140,imgPl140));//DOS MONEDAS VERTICALES//--ENEMIGO
	/*25*/grupoAssets.add(new Plataforma(jWidth*3 + 600 + 280, 400, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(6780, -10, 280,imgPl280));//--ENEMIGO//LLAVE
	grupoAssets.add(new Plataforma(6920, 300, 140,imgPl140));//SIN MONEDA
	grupoAssets.add(new Plataforma(7130, 110, 140,imgPl140));//SIN MONEDA
	grupoAssets.add(new Plataforma(7270, 210, 280,imgPl280));//--ENEMIGO
	/*30*/grupoAssets.add(new Plataforma(7690, 400, 140,imgPl140));
	grupoAssets.add(new Plataforma(7900, 210, 140,imgPl140));//SIN MONEDA
	grupoAssets.add(new Plataforma(7970, 400, 280,imgPl280));//--ENEMIGO
	grupoAssets.add(new Plataforma(8180, 120, 140,imgPl140));
	grupoAssets.add(new Plataforma(8460, 400, 140,imgPl140));//SIN MONEDA//--ENEMIGO
	/*35*/grupoAssets.add(new Plataforma(8500, 210, 140,imgPl140));//--ENEMIGO
	grupoAssets.add(new Plataforma(8740, 400, 140,imgPl140));
	grupoAssets.add(new Plataforma(9020, 400, 70,imgPl70));//SIN MONEDA
	grupoAssets.add(new Plataforma(9110, 250, 70,imgPl70));
	grupoAssets.add(new Plataforma(9200, 400, 70,imgPl70));//SIN MONEDA
	/* Llave */
	grupoAssets.add(new Llave(6780+30, -10-40,imgLlave))
	/* Monedas */
	/*=====================================================================================
	=======================================================================================*/
	grupoAssets.add(new Moneda(300, jHeight-50,imgMoneda));
	grupoAssets.add(new Moneda(380, jHeight-50,imgMoneda));
	grupoAssets.add(new Moneda(480+70, 540-30,imgMoneda));
	grupoAssets.add(new Moneda(565+70, 296-30,imgMoneda));
	grupoAssets.add(new Moneda(640+70, 480-30,imgMoneda));
	grupoAssets.add(new Moneda(835+30, 320-30,imgMoneda));
	grupoAssets.add(new Moneda(835+70, 320-30,imgMoneda));
	grupoAssets.add(new Moneda(835+110, 320-30,imgMoneda));
	grupoAssets.add(new Moneda(1129+30, 180-30,imgMoneda));
	/*TRES MONEDAS VERTICALES*/
	grupoAssets.add(new Moneda(1180+70, 540-30,imgMoneda));
	grupoAssets.add(new Moneda(1180+70, 540-70,imgMoneda));
	grupoAssets.add(new Moneda(1180+70, 540-110,imgMoneda));
	/*-----------------------*/
	grupoAssets.add(new Moneda(1280+110, 296-30,imgMoneda));
	/*DOS MONEDAS EXTREMOS*/
	grupoAssets.add(new Moneda(1371+30, 420-30,imgMoneda));
	grupoAssets.add(new Moneda(1371+250, 420-30,imgMoneda));
	/*--------------------*/
	grupoAssets.add(new Moneda(1980+30, 270-30,imgMoneda));
	grupoAssets.add(new Moneda(2040+70, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2112+100, 130-30,imgMoneda));
	grupoAssets.add(new Moneda(jWidth + 160 + 280, 440-30,imgMoneda));
	/*MONEDAS EN TODA LA PLATAFORMA*/
	grupoAssets.add(new Moneda(2496+30, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+50, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+70, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+90, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+110, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+130, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+150, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+170, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+190, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+210, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+230, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+210, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+230, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+250, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+270, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+290, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+310, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+330, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+350, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+370, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+390, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+410, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+430, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+450, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+470, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+490, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+510, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+530, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+550, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+570, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+590, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+610, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+630, 10-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+650, -20-30,imgMoneda));
	grupoAssets.add(new Moneda(2496+670, 10-30,imgMoneda));
	/*-----------------------------*/
	grupoAssets.add(new Moneda(2496+70, 440-30,imgMoneda));
	grupoAssets.add(new Moneda(2659+70, 380-30,imgMoneda));
	grupoAssets.add(new Moneda(2822+70, 440-30,imgMoneda));
	grupoAssets.add(new Moneda(3110+70, 550-30,imgMoneda));
	grupoAssets.add(new Moneda(jWidth + 1350+30, 380-30,imgMoneda));
	grupoAssets.add(new Moneda(3456+30, 130-30,imgMoneda));
	grupoAssets.add(new Moneda(3744+70, 230-30,imgMoneda));
	grupoAssets.add(new Moneda(4440+70, 360-30,imgMoneda));
	grupoAssets.add(new Moneda(4490+70, jHeight-50,imgMoneda));
	grupoAssets.add(new Moneda(4540+70, 520-30,imgMoneda));
	grupoAssets.add(new Moneda(4890+230, jHeight-50,imgMoneda));
	grupoAssets.add(new Moneda(5310+70, 520-30,imgMoneda));
	/*DOS MONEDAS VERTICALES*/
	grupoAssets.add(new Moneda(jWidth*3 + 230+70, jHeight - 100-110,imgMoneda));
	grupoAssets.add(new Moneda(jWidth*3 + 230+70, jHeight - 100-150,imgMoneda));
	/*----------------------*/
	grupoAssets.add(new Moneda(6640+70, 400-30,imgMoneda));
	grupoAssets.add(new Moneda(6780+70, -10-30,imgMoneda));
	grupoAssets.add(new Moneda(7270+70, 550-30,imgMoneda));
	grupoAssets.add(new Moneda(7270+140, 210-30,imgMoneda));
	grupoAssets.add(new Moneda(7690+30, 400-30,imgMoneda));
	grupoAssets.add(new Moneda(7970+250, 400-30,imgMoneda));
	grupoAssets.add(new Moneda(8180+70, 120-30,imgMoneda));
	grupoAssets.add(new Moneda(8500+70, 210-30,imgMoneda));
	grupoAssets.add(new Moneda(8740+70, 400-30,imgMoneda));
	grupoAssets.add(new Moneda(9110+35, 250-30,imgMoneda));
	/*=====================================================================================
	=======================================================================================*/
	grupoAssets.add(new Puerta(jWidth*5 + 460,400))
	/* Personaje */
	personaje = new Personaje();
	personaje.setX(15);
	personaje.setY(jHeight - personaje.getHeight());
	personaje.limiteDer = stage.getWidth() - personaje.getWidth();
	personaje.limiteTope = stage.getHeight() + personaje.getHeight();
	luna = new Luna(imgLuna,frameLuna);
	fondo.add(imagenFondo);
	fondo.add(luna);
	luna.start();
	fondo.add(grupoAssets);
	fondo.add(personaje);
	fondo.add(puntaje);
	fondo.add(vidas);
	stage.add(fondo);
	intv = setInterval(frameLoop,1000/20);
	intv2 = setInterval(pestaniarLuna,5000);
}
function pestaniarLuna(){
		luna.setAnimation('pestaniando');
		setTimeout(function(){luna.setAnimation('abierto');},650);
}

function moverPersonaje(){
	if((keyboard[16] && keyboard[39]) || (keyboard[16] && keyboard[37])){
		personaje.vx *=4;
	}
	if(keyboard[37]){
		personaje.retroceder();
	}	
	if(keyboard[39]){
		personaje.caminar();
	}
	if(keyboard[38] && personaje.contador < 1){
		personaje.saltar();
		//audio.play();
	}
}
function addKeyBoardEvents() {
	addEvent(document,"keydown", function(e){
		keyboard[e.keyCode] = true;
	});
	addEvent(document,"keyup", function(e){
		keyboard[e.keyCode] = false;
	});

	function addEvent(element,eventName,func){
		if(element.addEventListener){
			element.addEventListener(eventName, func, false);
		}
		else if(element.attachEvent){
			element.attachEvent(eventName, func);
		}
	}
}
function hit(a, b){
	var hit = false;
	//Colisiones horizontales
	if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth())
	{
		//Colisiones verticales
		if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
			hit = true;
	}
	//Colision de a con b
	if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth())
	{
		if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
			hit=true;
	}

	//Colision de b con a
	if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth())
	{
		if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
			hit=true;
	}
	return hit;
}

function moverFondo(){
	var sv = 1;
	if((keyboard[16] && keyboard[39]) || (keyboard[16] && keyboard[37])){
		sv = 2;
	}
	//Mover ---->
	if(personaje.getX() > (stage.getWidth()/3) && keyboard[39] && grupoAssets.children[0].getX() + grupoAssets.children[0].getWidth() >=600){
		personaje.vx = 2 *sv;
		for (var i = grupoAssets.children.length - 1; i >= 0; i--) {
			var asset = grupoAssets.children[i];
			asset.move(-15 * sv,0);
		}
	}
	//Mover <----
	else if(personaje.getX() < (stage.getWidth()/3) && keyboard[37] && grupoAssets.children[0].getX()<=-15){
		personaje.vx = 2 * sv;
		for (var i = grupoAssets.children.length - 1; i >= 0; i--) {
			var asset = grupoAssets.children[i];
			asset.move(15 * sv,0);
		}
	}
	else{
		personaje.vx = 10;
	}
	//Mover ^
	if(personaje.getY() < (stage.getHeight()/5) && keyboard[38] && personaje.getY()-50<=-10){
		//personaje.vy -= 2;
		for (var i = grupoAssets.children.length - 1; i >= 0; i--) {
			var asset = grupoAssets.children[i];
			asset.move(0,15);
		}
		personaje.arriba = true;
	}
	//Mover v
	else if(personaje.arriba  && !colision && personaje.getY() > 125){
		//personaje.vy -= 2;
		for (var i = grupoAssets.children.length - 1; i >= 0; i--) {
			var asset = grupoAssets.children[i];
			asset.move(0,-15);
		}
		if(grupoAssets.children[0].getY() <= 700)
		{
			personaje.arriba = false;
		}
	}
}

function moverEnemigos(){
	var enemigos = grupoAssets.children;
	for (var i = enemigos.length - 1; i >= 0; i--) {
		var enemigo = enemigos[i];
		if(enemigo instanceof Enemigo)
			enemigo.mover();
	};
	/*for (i in enemigos) {
		var enemigo = enemigos[i];
		enemigo.mover();
	};*/
}
addKeyBoardEvents();
nivelUno();
function aplicarFuerzas(){
	personaje.aplicarGravedad(grav,val_reb);
}
function detectarColPlataformas(){
	colision = false;
	var plataformas = grupoAssets.children;
	for (var i = plataformas.length - 1; i >= 0; i--) {
		var plataforma = plataformas[i];
		if(hit(plataforma, personaje)){
			colision = true;
			/* PISO */
			if(plataforma instanceof Piso){
				//Comportamiento
				if(personaje.getY()+personaje.getHeight() > plataforma.getY() + plataforma.getHeight() && personaje.vy <= 0)
				{
					//personaje.contador = 0;
					personaje.setY(plataforma.getY() + plataforma.getHeight() + personaje.getHeight());
					/*val_reb = 0;*/
					//personaje.vy *= val_reb;
				}
				else if(personaje.getY() < plataforma.getY() && personaje.vy >= 0){
					personaje.contador = 0;
					personaje.setY(plataforma.getY() - personaje.getHeight());
					/*val_reb = 0;*/
					personaje.vy *= val_reb;
				}
				else if(personaje.vx >= 0){
					if(personaje.direccion){
						personaje.setX(plataforma.getX() - personaje.getWidth());
					}
					else{
						personaje.setX(plataforma.getX() + plataforma.getWidth());
					}
				}
			}
			/* MUROS */
			else if(plataforma instanceof Muro){
				//Comportamiento
				if(personaje.getY() + personaje.getHeight() < plataforma.getY() + 20 && personaje.vy >= 0){
					personaje.contador = 0;
					personaje.setY(plataforma.getY() - personaje.getHeight());
					/*val_reb = 0;*/
					personaje.vy *= val_reb;
				}
				else if(personaje.vx >= 0){
					if(personaje.direccion){
						personaje.setX(plataforma.getX() - personaje.getWidth());
					}
					else{
						personaje.setX(plataforma.getX() + plataforma.getWidth());
					}
				}
			}
			/* PLATAFORMAS*/
			else if(plataforma instanceof Plataforma && personaje.getY() + personaje.getHeight() <= plataforma.getY() + 20 && personaje.vy >= 0){
				//Comportamiento
				personaje.contador = 0;
				personaje.setY(plataforma.getY() - personaje.getHeight());
				/*val_reb = -2;*/
				personaje.vy *= val_reb;
			}
			/* ENEMIGOS */
			else if(plataforma instanceof Enemigo){
				if(personaje.vy > 2 && personaje.getY() < plataforma.getY()){
					var muerteEnemigo = new Audio('sound/enemigo.mp3');
					muerteEnemigo.play();
					plataforma.remove();
					juego.puntaje += 5;
				}
				else if(!personaje.recuperando){
					juego.vidas -=1;
					if(juego.vidas<=0){
						alert('Perdiste');
						window.location.reload();
					}
					personaje.recuperando = true;
					setTimeout(function(){personaje.recuperando = false;},1000);
				}
			}
			/* MONEDAS */
			else if(plataforma instanceof Moneda){
				var moneda = new Audio('sound/salto.ogg');
				moneda.play();
				juego.puntaje+=1;
				plataforma.remove();
			}
			/* LLAVE */
			else if(plataforma instanceof Llave){
				plataforma.remove();
				juego.Llave = true;
			}
			/* PUERTA */
			else if(plataforma instanceof Puerta){
				if(juego.Llave)
					alert('Ganaste');
			}
		}
	}
}
function actualizarTexto(){
	puntaje.setText('Puntaje: ' + juego.puntaje);
	vidas.setText('Vidas: ' + juego.vidas);
}
function frameLoop(){
	moverPersonaje();
	moverEnemigos();
	aplicarFuerzas();
	detectarColPlataformas();
	moverFondo();
	actualizarTexto();
	stage.draw();
}