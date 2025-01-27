const example = () => {
    let string = "";
    for (let i = 0; i < 10; i++){
        for(let j = 0; j < (10-i); j++){
        string += "*";}

        string += "/n"; /*salto de linea*/
    }

    document.getElementById("output").innerText = string;
    
}