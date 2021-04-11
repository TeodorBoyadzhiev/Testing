const { describe } = require('mocha');
const { assert } = require('chai');



const stringOperations = {
    stringSlicer: function (str) {
        return str.slice(0, 3) + '...';
    },
    wordChecker: function (word, text) {
        word = word.toLowerCase().trim();
        text = text.toLowerCase();

        if (text.includes(word)) {
            return word;
        } else {
            return `${word} not found!`;
        }
    },
    printEveryNthElement: function (n, arr) {
        n = Number(n);

        if (isNaN(n) || !Array.isArray(arr)) {
            throw new Error('The input is not valid!');
        }

        const outputArray = [];

        for (let i = 0; i < arr.length; i += n) {
            outputArray.push(arr[i]);
        }
        return outputArray;
    }
};



describe('tests', () => {
    describe('StringSlicer', () => {
        it('slice1', () => {
            assert.equal(stringOperations.stringSlicer('string'), 'str...');
        });

        it('slice2', () => {
            assert.equal(stringOperations.stringSlicer('Bring'), 'Bri...');
        });

        it('slice3', () => {
            assert.equal(stringOperations.stringSlicer('st'), 'st...');
        });

        it('slice4', () => {
            assert.equal(stringOperations.stringSlicer('t'), 't...');
        });

        it('slice5', () => {
            assert.equal(stringOperations.stringSlicer('55555'), '555...');
        });

        it('slice6', () => {
            assert.equal(stringOperations.stringSlicer(''), '...');
        });
    });

    describe('wordChecker', () => {
        it('checker1', () => {
            assert.equal(stringOperations.wordChecker('  String', 'String not found!'), 'string');
        });

        it('checker2', () => {
            assert.equal(stringOperations.wordChecker('string', 'another string'), 'string');
        });

        it('checker3', () => {
            assert.equal(stringOperations.wordChecker('String', 'another string'), 'string');
        });

        it('checker4', () => {
            assert.equal(stringOperations.wordChecker('string', 'another word'), 'string not found!');
        });

        it('checker5', () => {
            assert.equal(stringOperations.wordChecker('string', 'Another Word'), 'string not found!');
        });
    });

    describe('printEveryNthElement', () => {
        it('print1', () => {
            assert.throw(() => stringOperations.printEveryNthElement('string', [1, 2]), 'The input is not valid!');
        });

        it('print2', () => {
            assert.throw(() => stringOperations.printEveryNthElement(4, 'string'), 'The input is not valid!');
        });

        it('print3', () => {
            assert.throw(() => stringOperations.printEveryNthElement(true, 5), 'The input is not valid!');
        });

        it('print4', () => {
            assert.deepEqual(stringOperations.printEveryNthElement(2, [1, 2, 3, 4, 5]), [1, 3, 5]);

        });

        it('print5', () => {
            assert.deepEqual(stringOperations.printEveryNthElement(3, [1, 2, 3, 'string', 4, 'string']), [1, 'string']);

        });


    });

});