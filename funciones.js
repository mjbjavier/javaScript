//conjunto de sentencias - cojunto de tareas - para hacer calculos - para validar algo
//dos tipos de funciones 

//2 tipos de funciones
//declarativas fx que es declaritiva

function funcion1() {
    return 3;
}
funcion1(); // asi llamamos una fx


//expresión fx que es expresiva o funciones anonimas
mifuncion(); // llamando a la fx
var mifuncion = function(a,b ){ //Declarando la fx
    return a+b;
}

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Mario’);

/* Diferencias: A las funciones declarativas se les aplica hoisting, 
y a la expresión de función, no. Ya que el hoisting solo se aplica 
en las palabras reservadas var y function. Lo que quiere decir que 
con las funciones declarativas, podemos mandar llamar la función 
antes de que ésta sea declarada, y con la expresión de función, no, 
tendríamos que declararla primero, y después mandarla llamar. */