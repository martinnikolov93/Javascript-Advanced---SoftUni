function solve() {
    let sectionCollection = document.getElementsByTagName("section");

    let firstQuestion = sectionCollection[0];
    let secondQuestion = sectionCollection[1];
    let thirdQuestion = sectionCollection[2];

    let answers = 0;
    let rightAnswers = 0;

    document.addEventListener("click", function (event) {

        let clickedElement = event.target;

        if (clickedElement.matches('.answer-text')){

            if (answers === 0) {
                if (clickedElement.textContent === "onclick"){
                    rightAnswers++;
                }
                firstQuestion.style.display = 'none';
                secondQuestion.style.display = 'block';
            } else if (answers === 1) {
                if (clickedElement.textContent === "JSON.stringify()"){
                    rightAnswers++;
                }
                secondQuestion.style.display = 'none';
                thirdQuestion.style.display = 'block';
            } else if (answers === 2) {
                if (clickedElement.textContent === "A programming API for HTML and XML documents"){
                    rightAnswers++;
                }
                thirdQuestion.style.display = 'none';
                let resultTitle = document.getElementsByTagName("h1");
                let resultElement = resultTitle[0];

                if (rightAnswers === 3){
                    resultElement.textContent = "You are recognized as top JavaScript fan!";
                } else {
                    resultElement.textContent = `You have ${rightAnswers} right answers`;
                }

            }

            answers++;

        }

    });

    /*let sections = document.getElementsByTagName('section');
    sections[0].querySelectorAll('.answer-text')[0].click();
    console.log(sections[0].style.display);*/
}
