

// const pobierzDane = () => {
//     fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
//     .then(response => response.json())
//     .then((data) => {
//         console.log(data)
//         $('.dane-programisty').text(`Imie: ${data.imie}; Nazwisko: ${data.nazwisko}; Zawod: ${data.zawod}; Firma: ${data.firma}`)
//     });   
// }

// $('button').on('click', pobierzDane);

const pobierzDane = () => {

    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
        console.log(data)
        $('.dane-programisty').text(`Imie: ${data.imie}; Nazwisko: ${data.nazwisko}; Zawod: ${data.zawod}; Firma: ${data.firma}`)
    });
    
}

$('button').on('click', pobierzDane);


