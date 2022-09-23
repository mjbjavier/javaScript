var miNombre = "Mario"; //scope global

function nombre(){ //scope local
    var miApellido = "Buchely";
    console.log(miNombre+ " " + miApellido);
}

nombre();

