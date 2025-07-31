//------------- CONDICIONALES-----------

/*SON ESTRUCTURAS DE DECISIONY depende de una condicion
*/
console.log("Condicionales JS");

//1.Solicitamos al usuraio su edad
let edad = prompt("Ingrese su Edad");

//2. Evaluamos si la condicion se cumple

// operadores de Comparación
/*
== Igualdad
===  Igualdad estricta
< menor que
> mayor que
< = menor o igual
> = mayor o igual
*/


/*
if (Condicion){
accion si es verdad
}else {
    accionsi es falso
    }
*/


if (edad >= 18) {
    alert("Puedes Votar");
} else{
    alert ("No Puedes Votar");
}