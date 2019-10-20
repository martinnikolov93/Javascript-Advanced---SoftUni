const PaymentPackage = require('../Pr6-Payment-Package');
const expect = require('chai').expect;

describe ('PaymentPackage class unit tests', function () {
    describe('initialization tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(paymentPackage.name).to.equal('Ivan');
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(paymentPackage.value).to.equal(1);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(paymentPackage.VAT).to.equal(20);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(paymentPackage.active).to.equal(true);
        });
    });

    describe('bad initialization tests', function () {
        it('', function () {
            expect(() => new PaymentPackage('Ivan')).to.throw(Error).with.property('message', 'Value must be a non-negative number');
        });
        it('', function () {
            expect(() => new PaymentPackage(1)).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
        it('', function () {
            expect(() => new PaymentPackage()).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
        it('', function () {
            expect(() => new PaymentPackage(1,1)).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
        it('', function () {
            expect(() => new PaymentPackage('',1)).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
        it('', function () {
            expect(() => new PaymentPackage('Ivan','1')).to.throw(Error).with.property('message', 'Value must be a non-negative number');
        });
        it('', function () {
            expect(() => new PaymentPackage('Ivan',-1)).to.throw(Error).with.property('message', 'Value must be a non-negative number');
        });
    });

    describe('name property tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.name = 'Gosho';
            expect(paymentPackage.name).to.equal('Gosho');
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.name = 1 }).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.name = '' }).to.throw(Error).with.property('message', 'Name must be a non-empty string');
        });
    });

    describe('value property tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.value = 2;
            expect(paymentPackage.value).to.equal(2);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.value = 0;
            expect(paymentPackage.value).to.equal(0);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.value = '1' }).to.throw(Error).with.property('message', 'Value must be a non-negative number');
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.value = -1 }).to.throw(Error).with.property('message', 'Value must be a non-negative number');
        });
    });

    describe('VAT property tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.VAT = 21;
            expect(paymentPackage.VAT).to.equal(21);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.VAT = 0;
            expect(paymentPackage.VAT).to.equal(0);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.VAT = '1' }).to.throw(Error).with.property('message', 'VAT must be a non-negative number');
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.VAT = -1 }).to.throw(Error).with.property('message', 'VAT must be a non-negative number');
        });
    });

    describe('active property tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.active = false;
            expect(paymentPackage.active).to.equal(false);
        });
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            expect(() => { paymentPackage.active = '1' }).to.throw(Error).with.property('message', 'Active status must be a boolean');
        });
    });

    describe('toString method tests', function () {
        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            let expectedString =    'Package: Ivan\n' +
                                    '- Value (excl. VAT): 1\n' +
                                    '- Value (VAT 20%): 1.2';
            expect(paymentPackage.toString()).to.equal(expectedString);
        });

        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',5);
            let expectedString =    'Package: Ivan\n' +
                '- Value (excl. VAT): 5\n' +
                '- Value (VAT 20%): 6';
            expect(paymentPackage.toString()).to.equal(expectedString);
        });

        it('', function () {
            let paymentPackage = new PaymentPackage('Ivan',1);
            paymentPackage.active = false;
            let expectedString =    'Package: Ivan (inactive)\n' +
                '- Value (excl. VAT): 1\n' +
                '- Value (VAT 20%): 1.2';
            expect(paymentPackage.toString()).to.equal(expectedString);
        });
    });
});