


let btnPodajLiczbe = document.getElementById("podajLiczbe");

btnPodajLiczbe.onclick = function (elemen1, element2) {


    let podajLiczbe = prompt('Podaj liczbę');
    let podajDrugaLiczbe = prompt('Podaj drugą liczbę');

        function enterNumber (param1, param2){
            let showFirstNumber = document.getElementById('pierwszaLiczba');

            showFirstNumber.textContent = `Liczba 1 to: ${param1}`;

            let showSecondNumber = document.getElementById('drugaLiczba');

            showSecondNumber.textContent = `Liczba 2 to: ${param2}`;
            }

    enterNumber(podajLiczbe, podajDrugaLiczbe);
    


    let dodawanie = document.getElementById("dodawanie");
    let odejmowanie = document.getElementById("odejmowanie");
    let mnozenie = document.getElementById("mnozenie");
    let wpiszWynik = document.getElementById("wpiszWynik");

    dodawanie.onclick = function (num1, num2){
        num1 = podajLiczbe;
        console.log(typeof num1)
        num2 = podajDrugaLiczbe;
        let resultDodawania = parseInt(num1) + parseInt(num2);
        
        wpiszWynik.textContent = resultDodawania;
    };

    odejmowanie.onclick = function (num1, num2){
        num1 = podajLiczbe;
        console.log(typeof num1)
        num2 = podajDrugaLiczbe;
        let resultOdejmowania = num1 - num2;
        wpiszWynik.textContent = resultOdejmowania;
    };

    mnozenie.onclick = function (num1, num2){
        num1 = podajLiczbe;
        num2 = podajDrugaLiczbe;
        let resultMnozenia = num1 * num2;
        wpiszWynik.textContent = resultMnozenia;
    };

}