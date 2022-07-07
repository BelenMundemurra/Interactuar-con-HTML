function compra() {

    //Obtener datos del formulario
    let nombre = document.getElementById("nombre").value;
    let cantidad = document.getElementById("cantidad").value;
    let tipo = document.getElementById("tipo-torta").value;

    //Crear elemento con pedido
    let resumen = document.getElementById("resumen");

    //Cambiar html
    resumen.innerHTML = "<h2>Resumen de compra:</h2> <br><p>Nombre: </p>" + nombre + "<br><p> Tipo de torta: </p>" + tipo + "<br><p>Cantidad: </p>" + cantidad;

    //Agregamos el html al body
    document.body.appendChild(resumen);

}

