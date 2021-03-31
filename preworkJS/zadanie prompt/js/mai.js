
let number = prompt('Enter a number');



function enterNumber (param){

    if(typeof param == Number){
        console.log(`Your number is ${param}`)
    } else{
    console.log('Only numbers!')
}
}
enterNumber(number);