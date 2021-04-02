
let number = prompt('Enter a number');



function enterNumber (param){
    let numberParam = parseInt(param);
    

    if( !isNaN(numberParam)){
        console.log(`Your number is ${numberParam}`)
    } else{
        console.log('Only numbers!')
    }
}
enterNumber(number);