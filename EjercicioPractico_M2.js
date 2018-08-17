/* Módulo 2 - Estructuras de control


Ejercicio 1.-  Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones, 
compruebe si es de corazones y además es el número 4. 
En caso afirmativo, lo imprimimos en la consola. 
Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?
*/

function compruebaCorazon(){
	var carta = '4c';
	var numero = carta[0];
	var palo = carta[1];

	if((numero == 4) && (palo == "c")){
		console.log("La carta es el: " + carta);
	}

};

/*
Si probamos el programa con el 3 de corazones, el programa no muestra ningun resultado
al no cumplirse la condicion del if ya que deberia mostrarse solo si la variable numero fuese igual a 4
y el palo fuese "c" pero en ese caso sus valores serian 3 y "c" respectivamente, en el caso del rey de corazones
pasaria igual ya que los valores de ambas variables serian en este caso 1 y 3 respectivamente, no cumpliendose de
nuevo la condicion del if. 
*/


/*
Ejercicio 2.- Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, 
e imprímelos en la consola.
*/

function aniosBisiestos2(){
	var fin = 2050;
	var bisiestos = [];

	for( i = 0 ; i <= fin; i++){
		if((i % 4 === 0) && (i % 100 != 0)){
			bisiestos.push(i);
		}else if ((i % 100 === 0) && (i % 400 === 0)){
			bisiestos.push(i);
		}					
	}				
	console.log (bisiestos);
};

/*
Ejercicio 3.- Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo. 
Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.
*/

function cartaRojaMultiplo3(){
	//palos: Picas, Trebol, Corazones, Diamantes //Values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
	var baraja = [ {value:1, palo:"Picas"},{value:2, palo:"Picas"},
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
	{value:13, palo:"Diamantes"}];

	var filtro = [];

	for(var i = 0 ; i < baraja.length; i++){	
		if( baraja[i].value % 3 === 0 && ( baraja[i].palo === "Corazones" || baraja[i].palo === "Diamantes")){
			filtro.push(baraja[i].value+" de "+baraja[i].palo);
		}		
	}
	return filtro;
};