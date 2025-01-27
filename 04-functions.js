function suma(parametro1, parametro2) {
    //ejecutar un codigo especifico   "ejecutar":
    return parametro1 + parametro2

}
const resultado = suma(6, 7);
console.log(resultado)

function sum() {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    console.log(numero1, numero2)
    alert(numero1 + numero2)
    let suma = parseInt(numero1) + parseInt(numero2);

}