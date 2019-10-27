function solve() {
   let ulCollection = document.getElementsByTagName('ul');
   let ulAvailableProducts = ulCollection[0];
   let ulMyProducts = ulCollection[1];

   let inputCollection = document.getElementsByTagName('input');
   let inputFilter = inputCollection[0];
   let inputName = inputCollection[1];
   let inputQuantity = inputCollection[2];
   let inputPrice = inputCollection[3];

   let buttonCollection = document.getElementsByTagName('button');
   let buttonFilter = buttonCollection[0];
   let buttonAdd = buttonCollection[1];
   let buttonBuy = buttonCollection[2];

   let totalPriceElement = document.getElementsByTagName('h1')[1];
   let totalPrice = 0;

    buttonAdd.addEventListener('click', function (e) {
        e.preventDefault();

        let name = inputName.value;
        let quantity = Number(inputQuantity.value);
        let price = Number(inputPrice.value);

        let li = document.createElement('li');

        let span = document.createElement('span');
        span.textContent = name;
        li.appendChild(span);

        let strong = document.createElement('strong');
        strong.textContent = `Available: ${quantity}`;
        li.appendChild(strong);

        let div = document.createElement('div');
        let strongInChildDiv = document.createElement('strong');
        strongInChildDiv.textContent = price.toFixed(2);
        let buttonAddToCart = document.createElement('button');
        buttonAddToCart.textContent = 'Add to Client\'s List';
        div.appendChild(strongInChildDiv);
        div.appendChild(buttonAddToCart);
        li.appendChild(div);

        ulAvailableProducts.appendChild(li);

        buttonAddToCart.addEventListener('click', function () {
            let liInCart = document.createElement('li');
            liInCart.textContent = name;
            let strongInCart = document.createElement('strong');
            strongInCart.textContent = price.toFixed(2);
            liInCart.appendChild(strongInCart);
            ulMyProducts.appendChild(liInCart);

            strong.textContent = `Available: ${--quantity}`;
            totalPrice += price;
            totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)}`;

            if (quantity === 0){
                li.remove();
            }
        })

    });

    buttonFilter.addEventListener('click', function () {
        let products = ulAvailableProducts.children;
        let filterValue = inputFilter.value;

        for (let i = 0; i < products.length; i++) {
            if (filterValue === ''){
                products[i].style.display = 'block';
            } else {
                let span = products[i].firstChild;
                let productText = span.textContent;
                if (!productText.includes(filterValue)){
                    products[i].style.display = 'none';
                }
            }
        }

    });

    buttonBuy.addEventListener('click', function () {
        ulMyProducts.textContent = '';
        totalPriceElement.textContent = `Total Price: 0.00`;
    })
}