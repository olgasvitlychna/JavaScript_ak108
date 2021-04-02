
// let wprowadzNazwisko = prompt('Podaj swoje nazwisko');
// let wprowadzEmail = prompt('Wpisz email');


function getName () {
    let wprowadzImie = prompt('Podaj swoje imię');
    if (wprowadzImie === ""){
        alert('bląd');
        
    }else{
        let imie = document.getElementById('imie');
        imie.value = wprowadzImie;
        
    }

}
getName();

function getSurname (param) {
    if (param === ""){
        alert('bląd');
    }else{
        let nazwisko = document.getElementById('nazwisko');
        nazwisko.textContent = param;
    }

}
getSurname(wprowadzNazwisko);

function getEmail (param) {
    if (param === ""){
        alert('bląd');
    }else{
        let email = document.getElementById('email');
        email.textContent = param;
    }

}
getEmail(wprowadzEmail)