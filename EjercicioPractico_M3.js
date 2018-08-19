/* Módulo 2 - Estructuras de control


1. Programa un ejemplo que almacene en un array todas las cartas de la baraja, cada una representada con un diccionario que tenga un palo y un valor.
*/

var baraja =[];
var palos = ["corazones","picas","treboles","diamantes"];

for(var i=0;i<palos.length;i=++){
	for(var j=1;j<=12;j=++){
		baraja[baraja.length]={p:palos[i],v:j};
	}
}

/*
2. Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un nuevo array sólo las cartas rojas, y en otro array las cartas negras.
*/

var rojas = [];
var negras = [];

	for(var i = 0; i < baraja.length; i++){
		if(baraja[i].palos === "picas" || baraja[i].palos === "treboles"){
			negras.push(baraja[i].palos);
		}else if(baraja[i].palos === "corazones" || baraja[i].palos === "diamantes"){
			rojas.push(baraja[i].palos);
		}
	}
console.log(negras);
console.log(rojas);

/*
3. Partiendo del array que has construido en el ejercicio anterior, construye un algoritmo que filtre en un nuevo array las cartas rojas y pares. Luego imprime en la consola la última carta de ese nuevo array.
*/

var paresRojas = [];
var ultimaParejaRoja = [];

	for(var i = 0 ; i < baraja.length; i++){	
		if( baraja[i].value % 2 === 0 && ( baraja[i].palos === "corazones" || baraja[i].palos === "diamantes")){
			paresRojas.push(baraja[i].value);
			ultimaParejaRoja = paresRojas.pop();
		}		
	}
console.log(paresRojas);
console.log(ultimaParejaRoja);