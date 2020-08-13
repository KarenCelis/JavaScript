/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write("Programa para determinar si un numero es par:<br/>");
/*REcibir un parametro asignarlo y convertir un String a un numero entero*/
var num = parseInt(prompt("Proporciona un numero:", 1));

if (num >= 0) {

    if (num % 2 == 0) {
        document.write("El numero es par<br/>");

    } else {
        document.write("El numero no es par<br/>");

    }
} else {
    document.write("Prporcione uin valor mayor a 0<br/>");

}
document.write("el valor que escribio fue " + num);