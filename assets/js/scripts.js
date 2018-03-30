
let $ = document.querySelector.bind(document);
window.addEventListener('load', ()=> {

	window.isMobile = window.innerWidth <= 475;

	window.addEventListener('resize', ()=> window.isMobile = window.innerWidth <= 475);

	let contactForm = $('.contact form')
		body     = $('body'),
		iptPerfil  = contactForm.querySelector('[name="perfil"]'),
		iptName  = contactForm.querySelector('[name="fullname"]'),
    	iptEmail = contactForm.querySelector('[name="email"]'),
    	iptEmp   = contactForm.querySelector('[name="company"]'),
    	iptCargo   = contactForm.querySelector('[name="cargo"]'),
    	iptFuncionarios   = contactForm.querySelector('[name="n-funcionarios"]'),
    	iptResponsavel   = contactForm.querySelector('[name="responsavel"]'),
    	iptOutrosResponsaveis   = contactForm.querySelector('[name="outros-responsaveis"]');

	Helpers.listen('header nav ul li', 'click', (element)=> {
		let item = element.getAttribute('menu');
		let y = $(`.${item}`).offsetTop;
		console.log(isMobile)
		Helpers.scrollTo(document.body, isMobile? y - 50: y, 500)
	});

	firebase.initializeApp({
	    apiKey            : "AIzaSyAWX1RB6FCeEBamTwx-uO9XUFm1ZCdYVTo",
	    authDomain        : "xp-assignement-2.firebaseapp.com",
	    databaseURL       : "https://xp-assignement-2.firebaseio.com",
	    projectId         : "xp-assignement-2",
	    storageBucket     : "xp-assignement-2.appspot.com",
	    messagingSenderId : "1053116422880"
    });

	iptName.addEventListener('keyup', (event) => {
		let name = iptName.value;
		Helpers.formErrorClear(iptName);
		if(Helpers.empty(name)){
	    	return Helpers.formError("Preencha seu nome por favor.", iptName);
		} else if(!Helpers.isCorrectName(name)){
	    	return Helpers.formError("Nome invÃ¡lido. Por favor, verifique.", iptName);
		}
    });

	iptEmail.addEventListener('keyup', (event) => {
		let email = iptEmail.value;
		Helpers.formErrorClear(iptEmail);
		if(Helpers.empty(email)){
	    	return Helpers.formError("Preencha seu e-mail por favor.", iptEmail);
		} else if(!Helpers.isEmail(email)){
	    	return Helpers.formError("E-mail invÃ¡lido. Por favor, verifique.", iptEmail);
		}
    });

	contactForm.addEventListener('submit', (event) => {

	    event.preventDefault();
	    event.stopPropagation();

	    let perfil = iptPerfil.value;
	    	name  = iptName.value,
	       	email = iptEmail.value,
	       	emp   = iptEmp.value,
	       	cargo = iptCargo.value,
	       	funcionarios = iptFuncionarios.value,
	       	responsavel = iptResponsavel.value,
	       	outrosResponsaveis = iptOutrosResponsaveis.value;

	    console.log(perfil);

	    Helpers.formErrorClear(iptName);
	    Helpers.formErrorClear(iptEmail);

	    if(Helpers.empty(name) || Helpers.empty(name)){
	    	return Helpers.formError("Campos em branco. Por favor, verifique.");
	    }

	    if(!Helpers.isCorrectName(name)){
	    	return Helpers.formError("Nome invÃ¡lido. Por favor, verifique.", iptName);
	    }

	    if(!Helpers.isEmail(email)){
	    	return Helpers.formError("E-mail invÃ¡lido. Por favor, verifique.", iptEmail);
	    }

	    Helpers.saveNews(perfil, name, email, emp, cargo, funcionarios, responsavel, outrosResponsaveis);

	    iptName.value = '';
	    iptEmail.value = '';
	    iptEmp.value = '';

    	return Helpers.formMsg("Obrigado por se cadastrar na nossa base.", contactForm);

  });

});