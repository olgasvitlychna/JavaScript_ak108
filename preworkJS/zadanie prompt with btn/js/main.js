


let btn = document.getElementById("podajLiczbe");

btn.onclick = function (elemen1, element2) {


    let podajLiczbe = prompt('Podaj liczbę');
    let podajDrugaLiczbe = prompt('Podaj drugą liczbę');

        function enterNumber (param1, param2){
            let showFirstNumber = document.getElementById('pierwszaLiczba');

            showFirstNumber.innerHTML = `Liczba 1 to: ${param1}`;

            let showSecondNumber = document.getElementById('drugaLiczba');

            showSecondNumber.innerHTML = `Liczba 2 to: ${param2}`;
            }
    enterNumber(podajLiczbe, podajDrugaLiczbe);
    
}





