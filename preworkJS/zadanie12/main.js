let text1 = "Uwielbiam JavaScript";
let text2 = "Jestem świetnym programistą";

function compare(param1, param2){
    if (param1.lenght > param2.lenght){
        return param1
    }else{
        return param2
    }
}

console.log(compare (text1, text2))