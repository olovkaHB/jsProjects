
function inflationCalculator()
{
    let inflationRate =  document.querySelector("#inflationRate");
    let money =  document.querySelector("#money");
    let years =  document.querySelector("#years");
    //console.log(inflationRate.value)
//pretvori u decimalne brojeve sa parseFloat inače je string
inflationRate = parseFloat(inflationRate.value);
money = parseFloat(money.value);
years = parseFloat(years.value);
//console.log(typeof(money));

//izračunavanje inflacije
let worth = money + (money * (inflationRate / 100));

for (let i = 1; i< years; i++)  {
    worth += worth * (inflationRate / 100); 
}
// na 2 decimale 

worth = worth.toFixed(2);
//let test ="mojtest"
//element za rezultat
let newElement = document.createElement("div");
newElement.className = "new-value"
// provjeri zašto linija ospod ne radi
//newElement.innerText = 'Današnjih ${money} € vrijedi isto kao ${worth} za ${years} godina.';
newElement.innerText = 'Današnjih' + money + ' € vrijedi isto kao '+ worth + ' za ' + years +' godina.';

//dodavanje elemeta u stranicu
document.querySelector(".container").appendChild(newElement);


console.log(worth);
}
