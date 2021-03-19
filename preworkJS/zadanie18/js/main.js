
let personName = document.getElementById("myName");
let personSurname = document.getElementById("mySurname");
let personPhoneNumber = document.getElementById("myPhoneNumber");
let butt = document.getElementById("button");


butt.onclick = function (event) {
    event.preventDefault()
    document.getElementById("name").textContent = personName.value
    
}