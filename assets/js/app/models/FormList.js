//FIREBASE INFO
let firebaseOn = false;
var config = {
    apiKey: "AIzaSyA2bmW732Z5npMqGEr27uj6W0fBIz1AOag",
    authDomain: "xp-assignment-3.firebaseapp.com",
    databaseURL: "https://xp-assignment-3.firebaseio.com",
    projectId: "xp-assignment-3",
    storageBucket: "xp-assignment-3.appspot.com",
    messagingSenderId: "243655044875"
};

class FormList {

    constructor() {

        this._form = [];
    }

    //FORM MAKER
    add(form) {

        //FIREBASE START
        if (firebaseOn == false) {
            firebase.initializeApp(config);
        };
        var database = firebase.database();
        var ref = database.ref('leads');
        firebaseOn = true;

        ref.push(form);

        this._form.push(form);
    }

}