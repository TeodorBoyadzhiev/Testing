function solve(string) {

    let newString = string.split('');
    newString.reverse();
    newString.toString();
    let izr = '';
    let izr2 = '';

    for (let i = 0; i < newString.length / 2; i++) {
        izr += newString[i];
    }

    for (let i = newString.length / 2; i < newString.length;i++) {
        izr2 += newString[i];
    }
    console.log(izr2);
    console.log(izr);
}

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');