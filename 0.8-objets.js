// Objetos, sirven para guardar datos
// crear un pagina html con un div id: output para que se visualice
//JSON es una funcion muy utilizada

let persona = {
    nombre: 'Damaris',
    apellido: "Benavides",
    edad: "27",
    estadocivil: 'casada',
    estatura: " 1.60",
    tienehijos: false
}

console.log(persona);

document.getElementById("output").innerText = JSON.stringify(persona.edad);

let automovil = new Object ();

automovil.motor = 2.0;
automovil.marca = 'Chevrolet'
automovil.capacidad = 5;
automovil.tipoGasolina = "Super"

console.log(automovil);

//ejercicios de objetos 1
let computadora = {
    precio:1000,
    color:"Plateada",
    memoria: "2000gb"
}
//ejercicio 2


let persona1 = new Object (
    {
        firstName: "Juan",
        lastname:"Salazar",
        age: 25
    }
)

let persona2 = new Object (
    {
        firstName: "Juan",
        lastname:"Salazar",
        age: 25
    }
)

function persona(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

let person1 = new persona("Damaris","Benavides",27);
let person2 = new persona("Josue","Angulo",26);







