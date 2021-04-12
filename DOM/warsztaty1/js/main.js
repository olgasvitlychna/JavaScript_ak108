let button = document.querySelector('button');



const changeBackground = () =>{
    let firstParagraph = document.getElementById('first');
    firstParagraph.setAttribute('class', 'red');
    let secondParagraph = document.getElementById('second');
    secondParagraph.setAttribute('class', 'yellow');
}

button.addEventListener('click', changeBackground);