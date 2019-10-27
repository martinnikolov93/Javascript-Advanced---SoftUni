class Forum {
    _users;
    _questions;
    _id;

    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        let usernameExists = this._users.filter(user => user.username === username)[0];
        let emailExists = this._users.filter(user => user.email === email)[0];
        if (usernameExists !== undefined || emailExists !== undefined) {
            throw new Error("This user already exists!");
        }

        let user = {
            username: username,
            password: password,
            email: email,
            logged: false,
        };

        this._users.push(user);

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let user = this._users.filter(user => user.username === username)[0];
        if (user === undefined) {
            throw new Error("There is no such user");
        }

        let userPassword = user.password;
        if (password === userPassword) {
            user.logged = true;
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        let user = this._users.filter(user => user.username === username)[0];
        if (user === undefined) {
            throw new Error("There is no such user");
        }

        let userPassword = user.password;
        if (password === userPassword) {
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        let user = this._users.filter(user => user.username === username)[0];
        if (user === undefined) {
            throw new Error('You should be logged in to post questions');
        }

        let userIsLogged = user.logged;
        if (!userIsLogged) {
            throw new Error('You should be logged in to post questions');
        }

        if (question === '') {
            throw new Error('Invalid question');
        }

        let questionObj = {
            id: this._id,
            title: question,
            username: username,
            answers: [],
        };

        this._questions.push(questionObj);

        this._id++;

        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {
        let user = this._users.filter(user => user.username === username)[0];
        if (user === undefined) {
            throw new Error('You should be logged in to post answers');
        }

        let userIsLogged = user.logged;
        if (!userIsLogged) {
            throw new Error('You should be logged in to post answers');
        }

        if (answer === ''){
            throw new Error("Invalid answer");
        }

        let question = this._questions.filter(question => question.id === questionId)[0];
        if (question === undefined ) {
            throw new Error('There is no such question');
        }

        let answerObj = {
            username: username,
            answer: answer,
        };

        question.answers.push(answerObj);

        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let string = '';
        for (let i = 0; i < this._questions.length; i++) {
            let questionsArray = this._questions[i];
            string += `Question ${questionsArray.id} by ${questionsArray.username}: ${questionsArray.title}\n`;
            let answersArray = questionsArray.answers;
            for (let j = 0; j < answersArray.length; j++) {
                let answer = answersArray[j];
                string += `---${answer.username}: ${answer.answer}\n`;

                /*if (j !== answersArray.length - 1){
                    string += '\n';
                }*/
            }
        }

        return string.trim();
    }
}

let forum = new Forum();

forum.register('Jonny', '12345', '12345', 'jonny@abv.bg');
forum.register('Peter', '123ab7', '123ab7', 'peter@gmail@.com');
forum.login('Jonny', '12345');
forum.login('Peter', '123ab7');

forum.postQuestion('Jonny', "Do I need glasses for skiing?");
forum.postAnswer('Peter',1, "Yes, I have rented one last year.");
forum.postAnswer('Jonny',1, "What was your budget");
forum.postAnswer('Peter',1, "$50");
forum.postAnswer('Jonny',1, "Thank you :)");

console.log(forum.showQuestions());




