/* Módulo 4 - Funciones y programas


1. Desarrolla una función que puntúe una mano de cartas, que tenga como parámetro un array de cartas, 
cada una representada por un diccionario con palo y valor. Al puntuar, las cartas suman su valor excepto si es un as que suma 20. 
Prueba a invocarla con varias manos de cartas con y sin ases.
*/

function puntuacion(mano){
   var total=0;
   var valor = 0;
   for(i=0;i<mano.length;i++){
	   if(mano.valor===1){
		   total = total + 20;
	   }else{
			total = total + mano.valor;
	   }
    }

   return total;
}

/*
2. Partiendo de la función anterior, modíficala para que además las cartas rojas sumen el doble. 
Prueba a invocarla con varias manos de cartas.
*/

function puntacion(mano){
   var total=0;
   var valor = 0;
   for(i=0;i<mano.length;i++){
		if(mano.palo==="c" || mano.palo==="d"){
			if(mano.valor===1){
				total = total + (20*2);
			}else{
				total = total + (mano.valor*2);
			}
		}
		else{
			if(mano.valor===1){
				total = total + 20;
			}else{
				total = total + mano.valor;
			}
		}
		
   return total;
   }
}

/*
3. Desarrolla un programa que use la función anterior para puntuar las manos de cartas de dos jugadores e imprima por consola al ganador, 
es decir, al que obtenga mayor puntuación.
*/

function ganador(){
	var mano1=[{palo:"c", valor:4},{palo:"t", valor:1}];
	var mano2 =[{palo:"d", valor:12},{palo:"c", valor:1}];
	if(puntuacion(mano1)>=puntuacion(mano2)){
		console.log("Gana la mano 1");
    }else{
        console.log("Gana la mano 2");
    }
}