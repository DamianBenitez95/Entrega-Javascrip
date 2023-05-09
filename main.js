function solicitarNombre() {
    nombre = prompt("Ingrese su nombre")
    console.log(`El nombre del usuario es: ${nombre}`)
    alert(
        "Bienvenido " + nombre + "!"
    )
}

function edadIngreso(){
    edad = prompt("Ingrese edad")
    if(edad >= 18){
            console.log(`Acceso concedido`)
            alert("Bienvenido a nuestro sitio!")
        }else {
            console.log(`Acceso denegado`)
            alert("No puede ingresar a nuestro sitio")
        }

    
    }



function elegiProducto() {
    producto = prompt( "Nuestros productos: \ 1: Vasos; \ 2: Jhonnie Walker Red ")

    if (producto === "1") {
        alert("Se agrego Vasos a tu carrito")
    } else if (producto === "2"){
        alert("Se agrego Jhonnie Walker Red a tu carrito")
    }
}


let producto;  
let nombre;
let edad;
solicitarNombre()
edadIngreso()
elegiProducto()