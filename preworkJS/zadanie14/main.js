let number1 = 20;
let number2 = 10;

function checknumber (param1, param2){
    if (param1 === 20 || param2 === 20 || param1 + param2 <= 20){
        return true
    }else{
        return false
    }
}
console.log(checknumber(number1, number2))