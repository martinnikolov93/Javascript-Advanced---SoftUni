function solve() {
    function createOptionTag(value){
        let element = document.createElement('option');
        element.setAttribute('value', value);
        return element;
    }

    const selectMenuTo = document.getElementById('selectMenuTo');

    const binaryOption = createOptionTag('binary');
    binaryOption.textContent = 'Binary';
    const hexadecimalOption = createOptionTag('hexadecimal');
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);

    const resultElement = document.getElementById('result');
    const inputButtonCollection = document.getElementsByTagName('button');
    const inputButton = inputButtonCollection[0];

    inputButton.addEventListener("click", function(){
        let input = document.getElementById('input');
        let inputValue = Number(input.value);
        let selectMenuToValue = document.getElementById('selectMenuTo').value;

        let result = '';

        if (selectMenuToValue === 'binary'){
            result = (inputValue >>> 0).toString(2);
        } else if (selectMenuToValue === 'hexadecimal') {
            result = (inputValue >>> 0).toString(16).toUpperCase();
        }

        resultElement.value = result;
    });
}