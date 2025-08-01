/* EJ3: Verificacion de elegibilidad para votar:
Escribe un programa que solicite la edad de un usuario y verifique si es elegible para
votar en las elecciones. Debe ser mayor de 18 años y ser ciudadano colombiano
*/

let edad = prompt("Cuál es tu edad?");
let esColombiano = confirm("Eres Ciudadano Colombiano?") // Tipo de dato Buleano

console.log("El tipo de dato de edad es:" +typeof(edad));
// Atajos  =  Shift + alt + flecha abajosaca copias de filas
console.log("Eltipo de dato de esColombiano es:"+typeof(esColombiano));

edad = parseInt(edad); //Convierte dato string a dato numerico
console.log("El tipo de dato de edad después del parse es:" +typeof(edad));

if(edad>=18 && esColombiano == true){
    alert("Puedes votar en las próximas elecciones");
    // caso verdadero;
}else{
    // caso falso
    alert("No Puedes votar en las próximas elecciones");
}
