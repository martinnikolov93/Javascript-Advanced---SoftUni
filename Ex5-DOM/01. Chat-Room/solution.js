function solve() {

    const button = document.getElementById('send');
    const input = document.getElementById('chat_input');

    button.addEventListener("click", function () {
        let element = document.createElement('div');
        element.classList.add('message', 'my-message');
        let inputValue = input.value;
        element.textContent = inputValue;

        document.getElementById('chat_messages').appendChild(element);
        input.value = '';
    });
}