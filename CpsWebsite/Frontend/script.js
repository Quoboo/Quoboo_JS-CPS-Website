const cpsButton = document.getElementById("cpsButton");
const cpsDisplay = document.getElementById("cpsDisplay");
const countdownDisplay = document.getElementById("countdown");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const resultGrade = document.getElementById("resultGrade");

let cps = 0;
let countdown = 5;
let timer;
let gameStarted = false;

cpsDisplay.style.display = "none";
resultContainer.style.display = "none";

cpsButton.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        cpsButton.style.display = "none";
        startCountdown();
    } else {
        incrementCPS();
    }
});

function startCountdown() {
    countdownDisplay.style.display = "block";
    countdownDisplay.textContent = `Spiel startet in: ${countdown}`;
    let countdownInterval = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = `Spiel startet in: ${countdown}`;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            countdownDisplay.style.display = "none";
            cpsDisplay.style.display = "block";
            cpsButton.style.display = "block";
            startTimer();
        }
    }, 1000);
}

function startTimer() {
    timer = setTimeout(() => {
        endGame();
    }, 5000); // 5 Sekunden
}

function incrementCPS() {
    cps++;
    cpsDisplay.textContent = `Derzeitige CPS: ${cps}`;
}

function endGame() {
    cpsButton.removeEventListener("click", incrementCPS);
    resultText.textContent = `Spiel beendet! Du hast ${cps} CPS erreicht.`;
    resultGrade.textContent = calculateGrade(cps);
    resultContainer.style.display = "block";
    cpsDisplay.style.display = "none";
    cpsButton.style.display = "none";
    gameStarted = false;
    cps = 0;

    setTimeout(() => {
        location.reload();
    }, 3000);
}

function calculateGrade(cps) {
    if (cps < 10) {
        return "Bewertung: Sehr schlecht";
    } else if (cps < 20) {
        return "Bewertung: Schlecht";
    } else if (cps < 35) {
        return "Bewertung: Durchschnittlich";
    } else if (cps < 45) {
        return "Bewertung: Ganz gut";
    } else if (cps < 60) {
        return "Bewertung: Hervorragend";
    } else {
        return "Bewertung: Weltklasse";
    }
}


function changeColor(palette) {
    const body = document.body;
    const button = document.querySelector("button");
    const navbar = document.querySelector(".navbar");
    const navbarIcons = document.querySelectorAll(".navbar i");

    if (palette === 'original') {
        body.style.backgroundColor = '#e9e4f6';
        button.style.backgroundColor = '#4f5da1';
        button.style.color = 'white';
        navbar.style.backgroundColor = '#e9e4f6'; 
        navbarIcons.forEach(icon => {
            icon.style.color = '#4f5da1'; 
        });
    } else if (palette === 'palette1') {
        body.style.backgroundColor = '#f2f2f2';
        button.style.backgroundColor = '#3498db';
        button.style.color = 'white';
        navbar.style.backgroundColor = '#f2f2f2';
        navbarIcons.forEach(icon => {
            icon.style.color = '#3498db'; 
        });
    } else if (palette === 'palette2') {
        body.style.backgroundColor = '#d5f3fe';
        button.style.backgroundColor = '#ff5733';
        button.style.color = 'white';
        navbar.style.backgroundColor = '#d5f3fe'; 
        navbarIcons.forEach(icon => {
            icon.style.color = '#ff5733'; 
        });
    }
}