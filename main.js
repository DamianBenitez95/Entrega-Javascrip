function solicitarNombre(){
    let nombre = true
    while(isNaN(nombre) != true){
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






function edadIngreso(){
    while(isNaN(edad) || edad <18){
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

function elegiProducto(){
    producto = prompt( ` Que esta buscando?
    1: Whiskys
    2: Vasos
    3: Accesorios
    `)

    if( producto === "1"){
        alert ("Elegiste whiskys")
    }else if (producto === "2"){
        alert ("Elegiste Vasos")
    }else if (producto === "3"){
        alert ("Elegiste Accesorios")
    }

}

let nombre;
let edad;
let producto;
solicitarNombre()
edadIngreso()
elegiProducto()



