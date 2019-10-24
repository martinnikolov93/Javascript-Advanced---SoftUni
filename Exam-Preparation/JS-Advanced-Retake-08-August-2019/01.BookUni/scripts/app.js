function solve() {
    let [titleElement, yearElement, priceElement] = Array.from(document.getElementsByTagName('input'));
    let [oldBooksElement, newBooksElement] = Array.from(document.getElementsByClassName('bookShelf'));
    let addButton = document.getElementsByTagName('button')[0];
    let profit = 0;

    addButton.addEventListener('click', function (e) {
        e.preventDefault();

        let title = titleElement.value;
        let year = Number(yearElement.value);
        let price = Number(priceElement.value);

        if (title === '' || year < 0 || price < 0){
            console.log('error');
            return;
        }

        let isOldBook = year < 2000;

        let bookDiv = document.createElement('div');
        bookDiv.setAttribute('class', 'book');
        let p = document.createElement('p');
        p.textContent = title + ` [${year}]`;
        let buyButton = document.createElement('button');
        price = isOldBook ? price - (price * 0.15) : price;
        buyButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
        let moveButton = document.createElement('button');
        moveButton.textContent = 'Move to old section';

        bookDiv.appendChild(p);
        bookDiv.appendChild(buyButton);

        if (isOldBook){
            oldBooksElement.appendChild(bookDiv);
        } else {
            bookDiv.appendChild(moveButton);
            newBooksElement.appendChild(bookDiv);
        }

        buyButton.addEventListener('click', function () {
            profit += price;
            let profitElement = document.getElementsByTagName('h1')[1];
            profitElement.textContent = `Total Store Profit: ${profit.toFixed(2)} BGN`;
            bookDiv.remove();
        });

        moveButton.addEventListener('click', function () {
            price -= (price * 0.15);
            buyButton.textContent = `Buy it only for ${price.toFixed(2)} BGN`;
            moveButton.remove();
            oldBooksElement.appendChild(bookDiv);
        });

    })
}