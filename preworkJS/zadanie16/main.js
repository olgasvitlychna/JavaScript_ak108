function count (param1, param2) {
    let sum = param1 + param2;
    if (sum > 0) {
        console.log(`Wynik dodawania wynosi ${sum}`);
    }else{
        console.log("Wynik jest nieprawidłowy");
    }
    
    let roznica = param1 - param2;
    if (roznica > 0) {
        console.log(`Wynik dodawania wynosi ${roznica}`);
    }else{
        console.log("Wynik jest nieprawidłowy");
    }

    let iloczyn = param1 * param2;
    if (iloczyn > 0) {
        console.log(`Wynik dodawania wynosi ${iloczyn}`);
    }else{
        console.log("Wynik jest nieprawidłowy");
    }

}

count(21,-4);
