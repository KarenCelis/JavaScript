/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function mostrarNombre(parametro){
    
    var nombre = parametro.value;
    var saludo = "Hola "+nombre;
    document.getElementById("resultado").innerHTML=saludo;
}