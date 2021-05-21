function solve(string) {

    string = string.split(' ');

    for (let simvol of string) {
        if (simvol[0] == "#" && simvol.length > 1) {
            console.log(simvol.substring(1, simvol.length));
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
