function solve(arr) {

    let sentance = arr[0];
    let words = arr[1];

    let myObj = {};

    for (let i = 0; i < words.length; i++) {
        let length = words[i].length;
        myObj[words[i]] = length;
    }

    let simvol = sentance.split(' ');
    let dyljina = 0;


    for (let i = 0; i < simvol.length; i++) {

        if (simvol[i].includes('_')) {
            dyljina = simvol[i].trim().length;
            if (simvol[i].includes('.') || simvol[i].includes(',')) {
                dyljina -= 1;
            }

            for (let [key, value] of Object.entries(myObj)) {
                if (value == dyljina) {
                    let duma = sentance.substring(sentance.indexOf(simvol[i]), sentance.indexOf(simvol[i]) + dyljina);
                    sentance = sentance.replace(duma, key);
                    delete myObj[key];
                }
            }
        }
    }

    console.log(sentance);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);