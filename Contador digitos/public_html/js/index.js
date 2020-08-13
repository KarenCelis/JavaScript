/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.write("Programa para contar digitos de un numero<br>");
var num = parseInt(prompt("escriba su numero"));
document.write("El numero proporcionado fue "+num+"<br>");
var con = 0;

while(num>=1){
    
    num = num /10;
    con++;
   
}

document.write("El numero proporcionado contiene digitos "+con);
