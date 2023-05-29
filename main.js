class miEdad {
    constructor(edad){
        this.edad = edad;
    }
    
}
function edadIngreso(){
    while(edad = Number || edad < 18){
    edad = parseInt(prompt("Ingrese su edad "));
    
    if(edad >=18){
        alert("Bienvenido!")
        return edad
    }
    else if(edad < 18){
        alert("Debes ser mayor de edad");
    }
}
}

class Nombre {
    constructor(nombre){
        this.nombre = nombre;
    }
}
function solicitarNombre(){
    let nombre = true
    while(nombre != Number){
        nombre = prompt("Ingrese su nombre ");
        if(isNaN(nombre)){
            alert ("Bienvenido " + nombre + "!")
            return nombre
        }
        else{
            alert("Por favor ingrese su nombre")
        }
    }
}


let edad;
let nombre;
edadIngreso()
solicitarNombre()


class Whisky {
    constructor(etiquetas, precio){
        this.etiquetas = etiquetas;
        this.precio = precio;
    }
}

let precios = [
    {etiquetas:"Red Label", precio:"6000"},
    {etiquetas:"Black Label", precio:"9000"},
    {etiquetas:"Double Black Laber", precio:"12000"},
    {etiquetas:"Green Label", precio:"20000"},
    {etiquetas:"Blue Label", precio:"60000"},
]


function elegirEtiqueta(){
    let etiqueta = prompt("Elija la Etiqueta que desea")
    let precio = parseInt(prompt("Ingrese Precio"))

    const nuevaEtiqueta = new Whisky(etiqueta, precio)
    arrayCarrito.push(nuevaEtiqueta)
    alert("Producto añadido al carrito")
}
function verCarrito(){
    arrayCarrito.forEach(producto => {
        alert(`Eligio ${producto.etiquetas} al precio de ${producto.precio}` )
    });
}


class Accesorio {
    constructor(accesorios, precio){
        this.accesorios = accesorios;
        this.precio = precio;
    }
}

let precios2 = [
    {accesorios: "Vasos de whisky", precio:"500"},
    {accesorios: "Apoya Vasos de Goma", precio:"1000"},
    {accesorios: "Kit Cocetelero Completo", precio: "10000"},
]

function elegirAccesorio(){
    let accesorios = prompt("Elija el accesorio que desea")
    let precio = parseInt(prompt("Ingrese Precio"))

    const nuevoAccesorio = new Accesorio (accesorios, precio)
    arrayCarrito.push(nuevoAccesorio)
    alert("Producto añadido al carrito")
}

function verCarrito(){
    arrayCarrito.forEach(producto => {
        alert(`Eligio ${producto.accesorios} al precio de ${producto.precio}` )
    });
}

function finalizarCompra(){
 const total = arrayCarrito.reduce((acc, pre)=> acc + pre.precio, 0)
 alert(`El total a pagar es de ${total}`)
}

let arrayCarrito = []


let opcion = prompt(
    ` -Ingrese una opcion:
     1: Comprar etiqueta
     2: Comprar accesorio
     3: Ver carrito
     4: Ir a pagar
     5: Salir`
)

while (opcion != "5") {
    if(opcion === "1") {
        elegirEtiqueta(arrayCarrito);
    }
    if (opcion === "2"){
        elegirAccesorio(arrayCarrito)
    } 
    if (opcion === "3") {
        verCarrito();
    }
    if (opcion === "4"){
        finalizarCompra()
    }
        
    opcion = prompt(
        ` -Vuelva a elegir una opcion:
         1: Seguir comprando etiquetas
         2: Seguir comprando accesorios
         3: Ver carrito
         4: Ir a pagar
         5: Salir`
    );
}
alert("Gracias por su compra, vuelva pronto")

