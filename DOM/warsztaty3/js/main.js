let newsletterForm = document.getElementById('newsletter-form');
let allAgree = document.getElementById('all-agree');



function validate (event){

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agree1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');
    
    errors.innerHTML = '';

    if(name.value.trim() === ''){
        let error = document.createElement('li');
        error.innerText = 'Wpisz Imie i nazwisko!';
        errors.appendChild(error);
    }

    if(email.value.trim() === ''){
        let error = document.createElement('li');
        error.innerText = 'Wpisz Adres e-mail!';
        errors.appendChild(error);
    }

    if(!email.value.includes('@')){
        let error = document.createElement('li');
        error.innerText = 'Adres e-mail musi zawierać @';
        errors.appendChild(error);
    }

    if (!agree1.checked) {
        let error = document.createElement('li');
        error.innerText = 'Nie wyraziłeś Zgody 1!';
        errors.appendChild(error);
    }

    if(errors.children.length > 0) {
        event.preventDefault();
    }

}
const allAgreeCheckBox = (event) =>{
    
    let agree1 = document.getElementById('agree-1');
    let agree2 = document.getElementById('agree-2');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;
}





newsletterForm.addEventListener('submit', validate);
allAgree.addEventListener('change', allAgreeCheckBox);