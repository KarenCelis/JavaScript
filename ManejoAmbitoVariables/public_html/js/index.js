/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//variable global
var nombre = null;
function mostrarNombre(parametro) {

    nombre = parametro.value;
    var saludo = "Hola " + nombre;
    document.getElementById("resultado").innerHTML = saludo;
    
    
}

function saludarLocal(parametro){
        
        var nombre = parametro;
        
        alert("hello"+nombre+"(local)");
        alert("hola"+this.nombre+"(global)");
    }
    
    function saludarGlobal(){
        
        alert("Hola"+nombre);
    }