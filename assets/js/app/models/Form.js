//FORM CONSTRUCTOR AND METHODS
class Form {
    
    constructor(name, email, currentDate) {

        this._name = name;
        this._email = email;
        this._currentdate = currentDate;
        Object.freeze(this);
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }

    get currentdate () {
        return this._currentdate;
    }

}