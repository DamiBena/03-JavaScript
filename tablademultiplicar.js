const example = () => {

    let number = "";
    for (let i = 1; i * 5; i++) {
        for (let j = 1; j < (5 * 1); j++) {
            string += "";
        }

        string += "/n"; /*salto de linea*/

        document.getElementById("example").innerText = example;
    }
}

const creartablademultiplicar = () => {
    let result = 0;

    for (let i = 0; i < 10;i++){
        console.log(`Tabla del ${i + 1}`);
        
            for (let j = 0; j <10; j++){
                result=(i+1)*(j+1);
                console.log(`${i+1}*${j+1}={result}`)
            }

            console.log("/n")
    }
}