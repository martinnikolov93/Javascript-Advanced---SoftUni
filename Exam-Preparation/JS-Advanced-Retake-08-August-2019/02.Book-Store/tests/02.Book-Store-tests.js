const BookStore = require('../02.Book-Store'); //дай книгата
const expect = require('chai').expect; // сипи чай

describe("Book Store class tests", function() {
    describe("Initialization tests", function() {
        it("name", function() {
            let bookStore = new BookStore('Store');
            expect(bookStore.name).to.equal('Store');
        });
        it("books", function() {
            let bookStore = new BookStore('Store');
            expect(bookStore.books).to.have.length(0);
        });
        it("_workers", function() {
            let bookStore = new BookStore('Store');
            expect(bookStore._workers).to.have.length(0);
        });
    });

    describe("stockBooks tests", function() {
        it("stockBooks length", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            expect(bookStore.books).to.have.length(2);
        });

        it("stockBooks proper title", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            expect(bookStore.books[1].title).to.equal('Harry Potter');
        });

        it("stockBooks proper author", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling']);
            expect(bookStore.books[1].author).to.equal('J.Rowling');
        });

        it("stockBooks proper return", function() {
            let bookStore = new BookStore('Store');

            expect(bookStore.stockBooks(['Inferno-Dan Braun'])).to.equal(bookStore.books);
        });

    });

    describe("hire tests", function() {
        it("workers hire length", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');
            expect(bookStore._workers).to.have.length(1);
        });

        it("workers hire proper name", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');
            expect(bookStore._workers[0].name).to.equal('George');
        });

        it("workers hire proper position", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');
            expect(bookStore._workers[0].position).to.equal('seller');
        });

        it("workers hire proper booksSold", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');
            expect(bookStore._workers[0].booksSold).to.equal(0);
        });
        it(" hire throw error if exists", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');

            expect(() => bookStore.hire('George', 'seller')).to.throw(Error).with.property('message', 'This person is our employee');
        });

        it("hire proper return", function() {
            let bookStore = new BookStore('Store');
            expect(bookStore.hire('George', 'seller')).to.equal(`George started work at Store as seller`);
        });
    });

    describe("fire tests", function() {
        it("fire proper length", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');
            bookStore.fire('George');
            expect(bookStore._workers).to.have.length(0);
        });

        it("fire proper throw if missing worker", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');

            expect(() => bookStore.fire('Ivan')).to.throw(Error).with.property('message', 'Ivan doesn\'t work here');
        });

        it("fire proper return", function() {
            let bookStore = new BookStore('Store');
            bookStore.hire('George', 'seller');

            expect(bookStore.fire('George')).to.equal('George is fired');
        });
    });

    describe("sellBook tests", function() {
        it("sellBook proper throw if book is missing", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Harry Potter-J.Rowling']);

            expect(() => bookStore.sellBook('Javascript for babies', 'George')).to.throw(Error).with.property('message', 'This book is out of stock');
        });

        it("sellBook proper throw if worker is missing", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Harry Potter-J.Rowling']);

            expect(() => bookStore.sellBook('Harry Potter', 'George')).to.throw(Error).with.property('message', 'George is not working here');
        });

        it("sellBook proper booksSold after selling a book", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Harry Potter-J.Rowling']);
            bookStore.hire('George', 'seller');
            bookStore.sellBook('Harry Potter', 'George');
            expect(bookStore.workers[0].booksSold).to.equal(1);
        });
    });

    describe("printWorkers tests", function() {
        it("printWorkers proper return", function() {
            let bookStore = new BookStore('Store');
            bookStore.stockBooks(['Harry Potter-J.Rowling']);
            bookStore.hire('George', 'seller');
            bookStore.hire('Ivan', 'programmer');
            bookStore.sellBook('Harry Potter', 'George');

            let expectedFakeStringBuilderLMAO = '';
            expectedFakeStringBuilderLMAO += `Name:George Position:seller BooksSold:1\n`;
            expectedFakeStringBuilderLMAO += `Name:Ivan Position:programmer BooksSold:0`;

            expect(bookStore.printWorkers()).to.equal(expectedFakeStringBuilderLMAO);
        });

    });

});
