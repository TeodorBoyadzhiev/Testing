function solve(string) {

    let myArr = string.split('');
    
    let bukva = myArr.shift();
    let poredica;
    
    for (let i = 0; i < string.length;i++) {
        let counter = 0;
        while (bukva === string[i]) {
            counter++;
            bukva = myArr.shift();  
        }
        if (counter > 0 && bukva === undefined) {
            poredica = string.substring(i, i + counter);
            string = string.replace(poredica, string[i]);
        
        } else if (counter > 0) {
            poredica = string.substring(string.indexOf(string[i]), string.indexOf(string[i]) + counter);
            string = string.replace(poredica, string[i]);
        } else {
            poredica = string[i];
            bukva = myArr.shift();
        }
        
    }
    
    console.log(string);

}

solve('aaaaabbbbbcdddeeeedssaa');