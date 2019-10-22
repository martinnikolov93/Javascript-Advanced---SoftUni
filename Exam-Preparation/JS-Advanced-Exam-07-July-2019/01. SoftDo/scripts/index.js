// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution() {
    function generateDiv(className) {
        let divElement = document.createElement('div');
        divElement.setAttribute('class', className);
        return divElement;
    }

    function changeDivClass(divElement, className) {
        divElement.setAttribute('class', className);
    }

    function generateImg() {
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', './images/user.png');
        imgElement.setAttribute('width', '32');
        imgElement.setAttribute('height', '32');
        return imgElement;
    }

    function generateSpan(text) {
        let span = document.createElement('span');
        span.textContent = text;
        return span;
    }

    function generateP(text) {
        let p = document.createElement('p');
        p.textContent = text;
        return p;
    }

    function generateButton(className, text) {
        let buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', className);
        buttonElement.textContent = text;
        return buttonElement;
    }

    function generateInput(className, type, placeholder) {
        //<input class="replyInput" type="text" placeholder="Reply to this question here...">
        let inputElement = document.createElement('input');
        inputElement.setAttribute('class', className);
        inputElement.setAttribute('type', type);
        inputElement.setAttribute('placeholder', placeholder);
        return inputElement;
    }

    function generateOl(className, type) {
        //<ol class="reply" type="1">
        let ol = document.createElement('ol');
        ol.setAttribute('class', className);
        ol.setAttribute('type', type);
        return ol;
    }

    function generateLi(text){
    	let liElement = document.createElement('li');
    	liElement.textContent = text;
    	return liElement;
	}

    let buttonsCollection = document.getElementsByTagName('button');
    let sendButton = buttonsCollection[0];

    sendButton.addEventListener('click', function () {
        let textareaCollection = document.getElementsByTagName('textarea');
        let questionTextArea = textareaCollection[0];
        let questionText = questionTextArea.value;

        let inputCollection = document.getElementsByTagName('input');
        let nameInput = inputCollection[0];
        let name = nameInput.value ? nameInput.value : 'Anonymous';

        let divHolder = generateDiv('pendingQuestion');
        let img = generateImg();
		divHolder.appendChild(img);
        let span = generateSpan(name);
		divHolder.appendChild(span);
        let p = generateP(questionText);
		divHolder.appendChild(p);

		let actionsDiv = generateDiv('actions');

        let buttonArchive = generateButton('archive', 'Archive');
		actionsDiv.appendChild(buttonArchive);
        buttonArchive.addEventListener('click', function () {
            divHolder.remove();
        });

        let buttonOpen = generateButton('open', 'Open');
		actionsDiv.appendChild(buttonOpen);
        buttonOpen.addEventListener('click', function () {

            buttonArchive.remove();
            buttonOpen.remove();

			changeDivClass(divHolder, 'openQuestion');

            let buttonReply = generateButton('reply', 'Reply');
            actionsDiv.appendChild(buttonReply);

            let replySection = generateDiv('replySection');
			divHolder.appendChild(replySection);
            replySection.setAttribute('style', 'display: none;');

			buttonReply.addEventListener('click' , function () {
				if (replySection.style.display === 'none'){
					buttonReply.textContent = 'Back';
					replySection.style.display = 'block';
				} else {
					buttonReply.textContent = 'Reply';
					replySection.style.display = 'none';
				}
			});

            let inputReply = generateInput('replyInput', 'text', 'Reply to this question here...');
			replySection.appendChild(inputReply);

            let buttonSendReply = generateButton('replyButton', 'Send');
			replySection.appendChild(buttonSendReply);
			buttonSendReply.addEventListener('click', function () {
				let inputReplyText = inputReply.value;
				let li = generateLi(inputReplyText);
				ol.appendChild(li);
				inputReply.value = '';
			});

			let ol = generateOl('reply', '1');
			replySection.appendChild(ol);

            let openQuestionsHolder = document.getElementById('openQuestions');
            openQuestionsHolder.appendChild(divHolder);
        });

        divHolder.appendChild(actionsDiv);

        let pendingQuestionsHolder = document.getElementById('pendingQuestions');
        pendingQuestionsHolder.appendChild(divHolder);

        questionTextArea.value = '';
        nameInput.value = '';
    });
}

// To check out your solution, just submit mySolution() function in judge system.