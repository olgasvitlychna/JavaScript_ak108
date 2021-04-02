


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

function getSurname () {
    let wprowadzNazwisko = prompt('Podaj swoje nazwisko');
    if (wprowadzNazwisko === ""){
        alert('bląd');
    }else{
        let nazwisko = document.getElementById('nazwisko');
        nazwisko.value = wprowadzNazwisko;
    }

}
getSurname();

function getEmail () {
    let wprowadzEmail = prompt('Wpisz email');
    if (wprowadzEmail === ""){
        alert('bląd');
    }else{
        let email = document.getElementById('email');
        email.value = wprowadzEmail;
    }

}
getEmail()