const isOddOrEven = require('../Pr2-Even-Or-Odd');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe ('isOddOrEven unit testing', function () {
    //Input validation
    it('isOddOrEven(1) => undefined', function () {
        expect(isOddOrEven(1)).to.equal(undefined);
        //assert.equal(isOddOrEven(1), undefined);
    });
    it('isOddOrEven({name:"Pesho"}}) => undefined', function () {
        assert.equal(isOddOrEven({name: "Pesho"}), undefined);
    });

    // Test saturation
    it('isOddOrEven("roar") => even', function () {
        assert.equal(isOddOrEven("roar"), 'even');
    });
    it('isOddOrEven("car") => odd', function () {
        assert.equal(isOddOrEven("car"), 'odd');
    });
});

