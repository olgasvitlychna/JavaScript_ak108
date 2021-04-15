let submit = document.getElementById('submit');
let form = document.getElementById('form');


function sendForm(event){
    event.preventDefault();
    let fName = document.querySelector('[name="fname"]')
    
    let lName = document.querySelector('[name="lname"]');
    console.log(`name: ${fName.value}, surname: ${lName.value}`)
}

form.addEventListener('submit', sendForm);

