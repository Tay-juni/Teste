let chorno = document.getElementById("timeDisplay");
let Btn20 = document.getElementById("Btn20");
let BtnCAPPU = document.getElementById("BtnCAPPU");
let BtnThe = document.getElementById("BtnThe");
let BtnPetit = document.getElementById("BtnPetit");


let heures = 0 ;
let minutes= 0;
let secondes = 0 ;

let timeout;
let estArrete = true;
const demarrer = () => {
    if (estArrete) {
        estArrete = false;
        defileTemps();
    }
};

const arreter = () => {
    if (!estArrete) {
        estArrete = true
        clearTimeout(timeout)
    }
};
  {
    if (estArrete) return;

    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);
    secondes++;

    if(secondes == 60 ){
        minutes++;
        secondes = 0;
    }
    if(minutes == 60){
        heures++;
        minutes = 0;
    }
    //affichage du
    if (secondes < 10) {
        secondes = "0" + secondes
    };
    if (miminutes < 10) {
       minutes = "0" +minutes
    };
    if (heures < 10) {
        heures = "0" + heures
    }

    chorno.textContent = `${heures}:${minutes}:${secondes}`;
    timeout = setTimeout(defileTemps,1000);
}