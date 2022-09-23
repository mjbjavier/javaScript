console.log(miNombre + "Soy ese hoisting")//fx que nos da el navegador esta nos ayuda a imprimir en consola los resultados
                     //aquí esta sucediendo hoisting estamos llamado una variable antes de declararla e inicalizarla
var miNombre; // declarando una variable 1er estado
miNombre = "Mario"; //inicializando una variable 2do estado de una variable


//Hoisting en fx
//Para evitar el hoisting debemos declarar nuestras fx al inicio
//y despues regresar al lugar donde necesito llamarla 
hey();

function hey(){
    console.log("Hola " + miNombre);
}

var miNombre = "Mario";

