function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let menu = document.getElementById('menu');

    function optionGenerator (){
       return  document.createElement('option');
    }

    let optionElement = optionGenerator();

    optionElement.textContent = newItemText.value;
    optionElement.value = newItemValue.value;

    menu.appendChild(optionElement);

    newItemText.value = '';
    newItemValue.value = '';
}