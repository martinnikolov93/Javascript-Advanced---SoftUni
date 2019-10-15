function encodeAndDecodeMessages() {
    let textAreaCollection = document.getElementsByTagName('textarea');
    let buttonsCollection = document.getElementsByTagName('button');

    let inputTextArea = textAreaCollection[0];
    let messageTextArea = textAreaCollection[1];

    let buttonEncode = buttonsCollection[0];
    let buttonDecode = buttonsCollection[1];

    function encodeString (string){
        let encodedMessage = '';
        for (let i = 0; i < string.length; i++) {
            encodedMessage += String.fromCharCode(string[i].charCodeAt(0) + 1);
        }
        return encodedMessage;
    }

    function decodeString(string) {
        let decodedMessage = '';
        for (let i = 0; i < string.length; i++) {
            decodedMessage += String.fromCharCode(string[i].charCodeAt(0) - 1);
        }
        return decodedMessage;
    }

    buttonEncode.addEventListener('click', function () {
        let inputText = inputTextArea.value;
        messageTextArea.value = encodeString(inputText);
        inputTextArea.value = '';
    });

    buttonDecode.addEventListener('click', function () {
        let messageText = messageTextArea.value;
        messageTextArea.value = decodeString(messageText);
    });
}