let btn = document.getElementById('btn');



btn.onclick = function () {
    let email = document.getElementById('email');

    if (email.value === '') {
        alert('Wpisz adres email!');
    }
}



