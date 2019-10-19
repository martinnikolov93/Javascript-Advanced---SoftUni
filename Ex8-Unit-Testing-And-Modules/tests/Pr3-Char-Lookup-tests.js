const lookupChar = require('../Pr3-Char-Lookup');
const expect = require('chai').expect;

describe ('lookupChar unit tests', function () {
    it ('lookupChar(1, 1) => undefined', function () {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it ('lookupChar({name: \'gosho\'}, 1) => undefined', function () {
        expect(lookupChar({name: 'gosho'}, 1)).to.equal(undefined);
    });
    it ('lookupChar(\'sometext\', "1") => undefined', function () {
        expect(lookupChar('sometext', '1')).to.equal(undefined);
    });
    it ('lookupChar(\'sometext\', "1") => undefined', function () {
        expect(lookupChar('sometext', 1.23)).to.equal(undefined);
    });
    it ('lookupChar(\'text\', 4) => Incorrect index', function () {
        expect(lookupChar('text', 4)).to.equal('Incorrect index');
    });
    it ('lookupChar(\'text\', -1) => Incorrect index', function () {
        expect(lookupChar('text', -1)).to.equal('Incorrect index');
    });
    it ('lookupChar(\'text\', 2) => x', function () {
        expect(lookupChar('text', 2)).to.equal('x');
    });
});