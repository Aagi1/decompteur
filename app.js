let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");


let heures = 8; 
let minutes = 60; 
let secondes = 60; 

let timeout; 

let estArrete = true; 

const demarrer = () => {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
};

const defilerTemps = () => {
    if (estArrete) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);

    if (minutes == 60 && secondes == 60)
    {
        heures--;
        minutes--;
    }

    secondes--;

    if (secondes == 0)
    {
        minutes--;
    }

    //affichage 

    if (secondes < 10) {
        secondes = '0' + secondes;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (heures < 10) {
        heures = '0' + heures;
    }

    chrono.textContent = `${heures}:${minutes}:${secondes}`;

    if (secondes == 0)
    {
        secondes = 60;
    }

    if (minutes == 0)
    {
        minutes == 60;
    }

    timeout = setTimeout(defilerTemps, 1000);
};

const reset = () => {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 8;
    minutes = 0; 
    secondes = 0;
    clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);