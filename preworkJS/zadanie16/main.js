function count (param1, param2) {
    let sum = param1 + param2;
    if (sum > 0) {
        console.log(`Wynik dodawania wynosi ${sum}`)
    }else{
        console.log("Wynik jest nieprawidłowy");
    }
    
    console.log(`Wynik odejmowania wynosi ${param1-param2}`)
    console.log(`Wynik mnożenia wynosi ${param1*param2}`)
}

count(-21,4)
