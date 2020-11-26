var haySol = true;
var estaNublado = false;
var estaLloviendo = true;

if((haySol) && (!estaLloviendo)){
    console.log("El dia está soleado XD")
}else if((estaNublado) && (!haySol)){
    console.log("El día esta nublado :(")
}else if((estaLloviendo) && (!haySol)){
    console.log("Está lloviendo X(")
}else if((haySol) && (estaLloviendo)){
    console.log("Un Arcoiris!")
}else{
    console.log("Un día raro.")
}