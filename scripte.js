let chorno = document.getElementById("timeDisplay");
// .textContent; console.log(chorno)
let btnButton = document.getElementById("BtnButton"); 
let BtnCAPPU = document.getElementById("BtnCappu");


let heures = 0 ;
let minutes= 0;
let secondes = 0 ;

let timeout;
let estArrete = true;

btnButton.addEventListener('click', function (event) {
    if (event.target.click) {
        minutes=20;
        defileTemps();
    }
    
});

const defileTemps = () => {

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
    if (minutes < 10) {
       minutes = "0" +minutes
    };
    if (heures < 10) {
        heures = "0" + heures
    }

    chorno.textContent = `${heures}:${minutes}:${secondes}`;
     setTimeout(defileTemps,1000);
}

BtnCAPPU.addEventListener('click', function (event) {
    if (event.target.click) {
        minutes=5;
        defileTemps();
    }
    
});

let BtnThe = document.getElementById('BtnThe');
BtnThe.addEventListener('click', function (event) {
    if (event.target.click) {
        minutes=15;
        defileTemps();
    }
    
});


let BtnPetit = document.getElementById('BtnPetit');
BtnPetit.addEventListener('click', function (event) {
    if (event.target.click) {
        minutes=25;
        defileTemps();
    }
    
});






// function boutton (event) {
//     event.preventDefault();
//     let secondbtn = event.target.value *1000;
//     if (chorno === '00:00:00') {
//         setInterval(() => {
//             secondbtn -= 1
//         }, 1000);
//     }
//     chorno = secondbtn
// }
// btnButton.onclick('click',boutton())