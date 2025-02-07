const arr = ["img/img1.png", "img/img2.png", "img/img3.png"];
const arrWord = ["cohete", "manzana", "foco"];

let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;

document.body.classList.add("backGroundBody");
let btnPlayAgain = document.querySelector(".playAgain");

function selectRandomImage() {
    let counterElement = document.querySelector(".countQuestion");
    if (counterElement) {
        counterElement.textContent = "Question number " + counter;
    }

    let index = Math.floor(Math.random() * arr.length); 
    console.log("Imagen seleccionada:", index);

    let imgElement = document.getElementById("imgToGuess");
    if (imgElement) {
        imgElement.src = arr[index];
    } else {
        
        console.error("Error: No se encontró el elemento con id 'imgToGuess'.");
    }

    return index;
}

function play() {
    counter++;

    if (counter <= 3) {
        const word = arrWord[i];
        const messageElement = document.querySelector(".message");
        const letterInput = document.getElementById("input");

        if (!messageElement || !letterInput) {
            console.error("Error: No se encontraron los elementos necesarios.");
            return;
        }

        const letter = letterInput.value.trim().toLowerCase(); // Convierte a minúsculas y quita espacios

        if (!letter) {
            messageElement.textContent = "No Letter 🥵";
            score -= 2;
        } else if (letter === word[0]) {
            messageElement.textContent = "Correct Answer 🤙";
            score += 5;
        } else {
            messageElement.textContent = "Wrong Answer 👎";
            score -= 2;
        }

        letterInput.value = "";
        document.querySelector(".score").textContent = "Score: " + score;

        if (counter < 3) {
            i = selectRandomImage();
        } else {
            gameOver();
        }
    }
}

document.querySelector(".play").addEventListener("click", play);

function showBtnPlayAgain() {
    btnPlayAgain.classList.remove("hidden");
}

function hideBtnPlayAgain() {
    btnPlayAgain.classList.add("hidden");
}

function gameOver() {
    if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = "🍭 High Score: " + highScore;
    }
    
    document.body.classList.remove("backGroundBody");
    showBtnPlayAgain();
}

document.querySelector(".playAgain").addEventListener("click", reset);

function reset() {
    document.body.classList.add("backGroundBody");
    counter = 0;
    i = selectRandomImage(); // Obtiene una nueva imagen aleatoria
    score = 0;
    
    document.querySelector(".score").textContent = "Score: " + score;
    document.getElementById("input").value = "";
    
    hideBtnPlayAgain();
}




