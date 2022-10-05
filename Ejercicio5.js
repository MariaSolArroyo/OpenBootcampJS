//- Una variable que contenga tu altura en centímetros (entero)
let altura = 250;
console.log(altura)
//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaflotante = 2561.561;
console.log(alturaflotante)
//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 70.6;
console.log(peso)
//- Una variable que contenga tu altura en metros redondeada hacia arriba
let alturalta = alturaflotante.toFixed(1);
console.log(alturalta)
//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesobajo = peso.toPrecision();
console.log(pesobajo)
//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let esigual = (Number.MAX_VALUE+1) ==Number.MAX_VALUE
console.log(esigual)