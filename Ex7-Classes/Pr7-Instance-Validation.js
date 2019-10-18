class CheckingAccount {
    /*_clientId;
    _email;
    _firstName;
    _lastName;*/

    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId (){
        return this._clientId;
    }

    set clientId (clientId){
        if (clientId.length !== 6){ // or regex ^[0-9]{6}+$
            throw new TypeError('Client ID must be a 6-digit number');
        }
        this._clientId = clientId;
    }

    get email(){
        return this._email;
    }

    set email(email){ // regex ^[a-z0-9]+@[a-z]+\.[a-z.]+$
        const pattern = /^[a-z0-9]+@[a-z]+\.[a-z.]+$/g;
        if (!email.match(pattern)){
            throw new TypeError('Invalid e-mail');
        }
        this._email = email;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(firstName){
        this.nameValidation(firstName, 'First');
        this._firstName = firstName;
    }


    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this.nameValidation(lastName, 'Last');
        this._lastName = lastName;
    }

    nameValidation(name, type){
        if (name.length < 3 || name.length > 20){
            throw new TypeError(`${type} name must be between 3 and 20 characters long`);
        }
        const pattern = /^[a-zA-Z]+$/g;
        if (!name.match(pattern)){
            throw new TypeError(`${type} name must contain only Latin characters`);
        }
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')