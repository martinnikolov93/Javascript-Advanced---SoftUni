let SkiResort = require('./solution');
let expect = require('chai').expect;

describe('SkiResort tests', function () {
    describe('Initialization tests', function () {
        it ('name', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.name).to.equal('Bansko');
        });
        it ('voters', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.voters).to.equal(0);
        });
        it ('voters', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.hotels).to.have.length(0);
        });
    });

    describe('bestHotel tests', function () {
        it ('no voters', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.bestHotel).to.equal('No votes yet');
        });

        it ('proper return', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 10);
            skiResort.leave('Premium', 10, 5);
            skiResort.build('Cura', 10);
            skiResort.leave('Cura', 10, 4);
            expect(skiResort.bestHotel).to.equal('Best hotel is Premium with grade 50. Available beds: 20');
        });
    });

    describe('build tests', function () {
        it ('throw error empty name', function () {
            let skiResort = new SkiResort('Bansko');
            expect(() => skiResort.build('', 1)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('throw error beds < 1', function () {
            let skiResort = new SkiResort('Bansko');
            expect(() => skiResort.build('Premium', 0)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('throw error beds < 1', function () {
            let skiResort = new SkiResort('Bansko');
            expect(() => skiResort.build('Premium', -1)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('build hotel should be builded', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(skiResort.hotels).to.have.length(1);
        });
        it ('build hotel name', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(skiResort.hotels[0].name).to.equal('Premium');
        });
        it ('build hotel beds', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(skiResort.hotels[0].beds).to.equal(1);
        });
        it ('build hotel voters', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(skiResort.hotels[0].points).to.equal(0);
        });
        it ('build hotel proper return', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.build('Premium', 1)).to.equal('Successfully built new hotel - Premium');
        });
    });

    describe('book tests', function () {
        it ('empty name', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(() => skiResort.book('', 1)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('beds < 1', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(() => skiResort.book('Premium', 0)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('wrong hotel', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(() => skiResort.book('asd', 1)).to.throw(Error).with.property('message', 'There is no such hotel');
        });
        it ('no free beds', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 1);
            expect(() => skiResort.book('Premium', 2)).to.throw(Error).with.property('message', 'There is no free space');
        });
        it ('beds should be booked', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            skiResort.book('Premium', 1)
            expect(skiResort.hotels[0].beds).to.equal(1);
        });
        it ('proper return', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);

            expect(skiResort.book('Premium', 1)).to.equal('Successfully booked');
        });
    });

    describe('leave tests', function () {
        it ('empty name', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            expect(() => skiResort.leave('', 1)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('beds  < 1', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            expect(() => skiResort.leave('Premium', 0)).to.throw(Error).with.property('message', 'Invalid input');
        });
        it ('beds  < 1', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            expect(() => skiResort.leave('asd', 1)).to.throw(Error).with.property('message', 'There is no such hotel');
        });
        it ('proper points', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            skiResort.leave('Premium', 2, 2);
            expect(skiResort.hotels[0].points).to.equal(4);
        });
        it ('proper beds', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            skiResort.leave('Premium', 2, 2);
            expect(skiResort.hotels[0].beds).to.equal(4);
        });
        it ('proper voters', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);
            skiResort.leave('Premium', 2, 2);
            expect(skiResort.voters).to.equal(2);
        });
        it ('proper return', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 2);

            expect(skiResort.leave('Premium', 2, 2)).to.equal('2 people left Premium hotel');
        });
    });

    describe('averageGrade tests', function () {
        it ('no voters', function () {
            let skiResort = new SkiResort('Bansko');
            expect(skiResort.averageGrade()).to.equal('No votes yet');
        });
        it ('proper return', function () {
            let skiResort = new SkiResort('Bansko');
            skiResort.build('Premium', 10);
            skiResort.leave('Premium', 5, 2);
            expect(skiResort.averageGrade()).to.equal('Average grade: 2.00');
        });
    });
});
