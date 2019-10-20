const StringBuilder = require('../Pr5-String-Builder');
const expect = require('chai').expect;

/*beforeEach(function () {
   let StringBuilder = new StringBuilder();
});*/

describe ('StringBuilder unit tests', function () {
    describe('initialization tests', function () {
        it ('',function () {
            let expected = new StringBuilder();
            expect(expected._stringArray).to.have.lengthOf(0);
        });
        it ('',function () {
            let expected = new StringBuilder('text');
            expect(expected._stringArray).to.have.lengthOf(4);
        });
        it ('', function () {
            expect(() => new StringBuilder(1)).to.throw(TypeError).with.property('message', 'Argument must be string');
        });
    });

    describe('append method tests', function () {
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.append('text');
            expect(expected._stringArray).to.have.lengthOf(8);
        });
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.append('text');
            expect(expected._stringArray[7]).to.equal('t');
        });
        it ('',function () {
            let expected = new StringBuilder();
            expect(() => expected.append(1)).to.throw(TypeError).with.property('message', 'Argument must be string');
        });
    });

    describe('prepend method tests', function () {
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.prepend('text');
            expect(expected._stringArray).to.have.lengthOf(8);
        });
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.prepend('text');
            expect(expected._stringArray[0]).to.equal('t');
        });
        it ('',function () {
            let expected = new StringBuilder();
            expect(() => expected.prepend(1)).to.throw(TypeError).with.property('message', 'Argument must be string');
        });
    });

    describe('insertAt method tests', function () {
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.insertAt('text',2);
            expect(expected._stringArray).to.have.lengthOf(8);
        });
        it ('',function () {
            let expected = new StringBuilder('aaaa');
            expected.insertAt('text', 2);
            expect(expected._stringArray[2]).to.equal('t');
        });
        it ('',function () {
            let expected = new StringBuilder();
            expect(() => expected.insertAt(1, 1)).to.throw(TypeError).with.property('message', 'Argument must be string');
        });
    });

    describe('remove method tests', function () {
        it ('',function () {
            let expected = new StringBuilder('text');
            expected.remove(0,2);
            expect(expected._stringArray).to.have.lengthOf(2);
        });
        it ('',function () {
            let expected = new StringBuilder('text');
            expected.remove(0,2);
            expect(expected._stringArray[0]).to.equal('x');
        });
    });

    describe('_vrfyParam method tests', function () {
        it ('',function () {

            expect(() => StringBuilder._vrfyParam(1)).to.throw(TypeError).with.property('message', 'Argument must be string');
        });
    });

    describe('toString method tests', function () {
        it ('',function () {
            let expected = new StringBuilder('text');
            expect(expected.toString()).to.equal('text');
        });
    });
});
