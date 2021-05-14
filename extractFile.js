function solve(string) {

    let tochka = string.lastIndexOf('.');
    let extension = string.substring(tochka + 1);

    let slash = string.lastIndexOf('\\');
    let template = string.substring(slash + 1, tochka);



    console.log(`File name: ${template}`);
    console.log(`File extension: ${extension}`);

}

solve('C:\\Internal\\training-internal\\Template.pptx');