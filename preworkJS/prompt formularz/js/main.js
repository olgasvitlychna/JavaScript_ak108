


function getName () {
    let wprowadzImie = prompt('Podaj swoje imię');
    let imie = document.getElementById('imie');
    if (wprowadzImie === ""){
        
        imie.value = 'bląd';
    }else{
        
        imie.value = wprowadzImie;
        
    }

}
getName();

function getSurname () {
    let wprowadzNazwisko = prompt('Podaj swoje nazwisko');
    let nazwisko = document.getElementById('nazwisko');
    if (wprowadzNazwisko === ""){
        nazwisko.value = 'bląd';
    }else{
        nazwisko.value = wprowadzNazwisko;
    }

}
getSurname();

function getEmail () {
    let wprowadzEmail = prompt('Wpisz email');
    let email = document.getElementById('email');
    if (wprowadzEmail === ""){
        email.value = 'bląd';
    }else{
        email.value = wprowadzEmail;
    }

}
getEmail()