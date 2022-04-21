alert("Bienveninidos a la tienda de Rick and Morty")


// Solicito de Producto //

const IGV = 1.18
const precioPoleras = 10
const precioPijamas = 20

function precioTotal (num1) {
    return (num1 * precioPoleras) * (IGV)
}


function precioTotal2 (num1) {
    return (num1 * precioPijamas) * (IGV)
}





let producto;
let valor = true;
while (valor) {
    producto = prompt("Ingresa el Producto que deseas : Poleras y Pijamas");
    producto = producto.toLowerCase(); //convierto variable a minusculas //
    if (producto === "poleras") {
        valor = false; // si es V entonces termina el ciclo //

       

    } else if (producto === "pijamas") {
        valor = false; // si es V entonces termina el ciclo //
    } else if (producto == null) {
        break;
    } else {
        alert("Lo siento no tenemos ese Producto, gracias");
    }
}



let color;
let valor1 = true;
while (valor1) {
    color = prompt("Tenemos dos Colores: Blanco - Negro");
    color = color.toLowerCase(); //convierto variable a minusculas //
    if (color == "blanco") {
        valor1 = false; // si es V entonces termina el ciclo //

    
        

    } else if (color == "negro") {
        valor1 = false; // si es V entonces termina el ciclo //
    } else if (color == null) {
        break;
    } else {
        alert("Lo siento no tenemos ese Color, gracias");
    }
}


let talla;
let valor2= true;
while (valor2){
    talla = prompt ("Tenemos Tallas: M y talla L")
    talla = talla.toLowerCase();
    if (talla == "m") {
        valor2 = false; // si es V entonces termina el ciclo //    

    } else if (talla == "l") {
        valor2 = false; // si es V entonces termina el ciclo //
    } else if (talla == null) {
        break;
    } else {
        alert("Lo siento no tenemos esa talla, gracias");
    }
}



alert (" Por el momento has elegido el producto"+ " "+  producto +" "+ "en color"+" "+ (color)+" ," +  "en talla"+ " "+(talla.toUpperCase()) );



// Solicito informacion de cantidad //

let cantidad;
let valor3 = true;
while (valor3) {
    cantidad = Number(prompt("Ingresa la cantidad "));
    if (cantidad >= 1 && cantidad <= 10 ) {
        valor3 = false;
    } 
    else { 
        alert("lo siento solo podemos ofrecerte hasta un maximos de 10 unidades");
        
    }
}










if (producto==="poleras"){
    let precioFinal =precioTotal(cantidad)
    alert("El precio por "+ cantidad +" Poleras "+"es: S/. " +precioFinal.toFixed(2) +" Incluido impuestos")
}


else if (producto==="pijamas"){
    let precioFinal =precioTotal2(cantidad)
    alert("El precio por "+ cantidad +" Pijamas "+"es: S/. " +precioFinal.toFixed(2) +" Incluido impuestos")
}





