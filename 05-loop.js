const calcularSuma = () => {
    for (let i = 0; i < 5; i++) {
        let suma = 0;
        console.log(suma);
        let inputData = prompt(`Por favor ingrese el${i + 1} digito`);
        let numberInputData = parseInt(inputData)
        console.log(typeof (numberInputData))
        console.log(isNan)(numberInputData);

        if (isNan(numberInputData)) {
            alert('Solo se permite numeros, por favor intente de nuevo')
            i--;
        } else {
            suma += numberInputData;
            console.log(suma)

        }
        document.getElementById("sum").innerHTML = suma;
    }
}