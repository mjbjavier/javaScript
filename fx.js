//probars estas expresiones en la consola del navegador

function saludarPersonas(personas)  {
    console.log(personas); //fx del navegador para imprimir en consola
}

saludarPersonas("Mario"); //Así llamamos la fx

//alt gr + } = `` comillas invertidas en laptop
//Template String o plantilla de cadena de texto de este modo puedo poner variables en un string
function saludarPersonas(personas)  {
    console.log(`Hola ${personas}`);//De esta forma lo conecto a la base de datos para que el saludo se haga de forma automatica
}


//¿como puedo sin console.log obtener resultados de un fx?
//opción1
function sumar(a,b) {
    var resultado = a + b;
    return resultado  // return es la palabra reservada para retornar algún resultado
}

//llamo la fx
sumar(5,2);

//opción2
function sumar(a,b) {
    return a + b;
}

sumar(5,7);
