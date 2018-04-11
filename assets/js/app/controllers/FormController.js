class FormController {

    constructor() {

        //FORM MAKER
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._currentDate = new Date().toLocaleString();
        this._formList = new FormList();
        //CHANGE MAKER
        this._obrigado = $('#obrigado')
        this._form = $('#formulario')
        this._hero = $('#main');
        this._tipo = '';

    }

    add(event) {

        //ADD FORM
        event.preventDefault();
        this._formList.add(this._createForm());
        //CHANGE HERO FOR OBRIGADO
        // window.location.href = 'obrigado.html';
        // this._obrigado.classList.remove("submit");
        this._form.classList.add('obrigado');

    }

    _createForm() {

        //CREATE FORM
        return new Form(
            this._inputName.value,
            this._inputEmail.value,
            this._currentDate,
        );
    }

}
