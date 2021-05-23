function solve(string) {

    let splitnat = string.match(/[A-Z][a-z]+/g);


    console.log(splitnat.join(', '));

}

solve('HoldTheDoor');
