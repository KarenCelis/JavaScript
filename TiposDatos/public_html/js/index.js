/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write("Programa para el manejo de tipos de datos");

//cadena
var cadena = "hola mundito";
document.write("Valor cadenita: "+cadena+"<br>");
//numeros
var num1 = 15;
var num2 = parseInt("45");
var num3 = num1 + num2;
document.write("Resultado: "+num3+"<br>");
//Boolean
var bandera = true;
var resultado = (num1==num2);
document.write("Bandera: "+bandera+"<br>");
document.write("Resultado: "+resultado+"<br>");

//especiales
var tipoNull= null;
document.write("Valor: "+tipoNull+"<br>");

//no definido
var indefinido;
document.write("Valor: "+indefinido+"<br>");

//conocer el tipo de dato

resultado = (typeof num1=="number");
document.write("Es numero? "+resultado+"<br>");
resultado = (typeof cadena=="string");
document.write("Es cadena? "+resultado+"<br>");
resultado = (typeof bandera=="boolean");
document.write("Es booleano? "+resultado+"<br>");