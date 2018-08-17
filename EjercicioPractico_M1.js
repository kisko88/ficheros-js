/* Módulo 1 - Fundamentos de la programación.


Ejercicio 1.- Utiliza la consola de JavaScript para calcular:

A: Los años bisiestos que habrá antes de 2050.
*/

function aniosBisiestos(){
	var anio = new Date().getFullYear();
	var fin = 2050;
	var bisiestos = [];

	for( i = anio ; i <= fin; i++){
		if((i % 4 === 0) && (i % 100 != 0)){
			bisiestos.push(i);
		}elseif ((i % 100 === 0) && (i % 400 === 0)){
			bisiestos.push(i);
		}					
	}				
	return bisiestos;
};

/*
B: Cuántas cartas con número par y negras hay en una baraja de poker.
*/

function cartaParNegra(){
	//palos: Picas, Trebol, Corazones, Diamantes //Values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
	var baraja = [ 
		{value:1, palo:"Picas"},{value:2, palo:"Picas"},
		{value:3, palo:"Picas"},{value:4, palo:"Picas"},
		{value:5, palo:"Picas"},{value:6, palo:"Picas"},
		{value:7, palo:"Picas"},{value:8, palo:"Picas"},
		{value:9, palo:"Picas"},{value:10, palo:"Picas"},
		{value:11, palo:"Picas"}, {value:12, palo:"Picas"},
		{value:13, palo:"Picas"},
		{value:1, palo:"Trebol"},{value:2, palo:"Trebol"},
		{value:3, palo:"Trebol"},{value:4, palo:"Trebol"},
		{value:5, palo:"Trebol"},{value:6, palo:"Trebol"},
		{value:7, palo:"Trebol"},{value:8, palo:"Trebol"},
		{value:9, palo:"Trebol"},{value:10, palo:"Trebol"},
		{value:11, palo:"Trebol"}, {value:12, palo:"Trebol"},
		{value:13, palo:"Trebol"},
		{value:1, palo:"Corazones"},{value:2, palo:"Corazones"},
		{value:3, palo:"Corazones"},{value:4, palo:"Corazones"},
		{value:5, palo:"Corazones"},{value:6, palo:"Corazones"},
		{value:7, palo:"Corazones"},{value:8, palo:"Corazones"},
		{value:9, palo:"Corazones"},{value:10, palo:"Corazones"},
		{value:11, palo:"Corazones"}, {value:12, palo:"Corazones"},
		{value:13, palo:"Corazones"},
		{value:1, palo:"Diamantes"},{value:2, palo:"Diamantes"},
		{value:3, palo:"Diamantes"},{value:4, palo:"Diamantes"},
		{value:5, palo:"Diamantes"},{value:6, palo:"Diamantes"},
		{value:7, palo:"Diamantes"},{value:8, palo:"Diamantes"},
		{value:9, palo:"Diamantes"},{value:10, palo:"Diamantes"},
		{value:11, palo:"Diamantes"}, {value:12, palo:"Diamantes"},
		{value:13, palo:"Diamantes"}
	];

	var filtro = [];

	for(var i = 0 ; i < baraja.length; i++){	
		if( baraja[i].value % 2 === 0 && ( baraja[i].palo === "Picas" || baraja[i].palo === "Trebol")){
			filtro.push(baraja[i].value,baraja[i].palo);
		}		
	}
	return filtro;
};

/*
Ejercicio 2.- Define una variable cuyo valor sea una cadena que represente una carta de la baraja. 
Recuerda que representamos las cartas con una cadena formada por un número que representa el valor,  
seguido de una letra que representa el palo. Ahora crea otras dos variables que representan a la carta anterior 
y a las carta posterior en una baraja ordenada. Finalmente, crea una última variable que concatene las cadenas 
de las 3 cartas anteriores usando las variables que ya tienes.
*/
function ordenBaraja(){
	var cartaPrimera = '7p';
	var cartaPrevia = '6p';
	var cartaPosterior = '8p';
	var cartas = cartaPrevia + ", " + cartaPrimera + ", " + cartaPosterior;
	return cartas;
}

/*
Ejercicio 3.- Define una variable cuyo valor sea una cadena que represente una carta de la baraja, 
cuyo valor sea mayor que 9. Ahora utiliza el operador para indexar la cadena, y accede al palo de la carta. 
¿Cuál es la diferencia si la carta tiene un valor menor o igual que 9?
*/

var carta = '12t';
var valor = carta[0];
var palo = carta[1];

console.log(palo);

/*
La diferencia es la forma en como lo interpreta JS, y el número de caracteres presentes.
Si es menor o igual que 9, toma como primer carácter número y el otro es el palo.
En cambio si es mayor o igual a 10, toma el primer carácter como el 1, el segundo como el 0 y el palo 
lo toma como un tercer carácter.
*/
