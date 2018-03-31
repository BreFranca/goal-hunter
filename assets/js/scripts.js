
let $ = document.querySelector.bind(document);
function getPerfil(browser) {
	iptPerfil = browser;
}

let data = new Date();

let dia  = data.getDate(),
	mes  = data.getMonth() + 1,
	ano  = data.getFullYear(),
	hora = data.getHours(),
	min  = data.getMinutes(),
	seg  = data.getSeconds()

let atual = ano + '-' + mes + '-' + dia + ' ' + hora + ':' + min + ':' + seg;


window.addEventListener('load', ()=> {

	window.isMobile = window.innerWidth <= 475;

	window.addEventListener('resize', ()=> window.isMobile = window.innerWidth <= 475);

	let contactForm = $('#contact form')
		body     = $('body'),
		iptIp  = contactForm.querySelector('[name="ip-server"]'),
		iptName  = contactForm.querySelector('[name="fullname"]'),
    	iptEmail = contactForm.querySelector('[name="email"]'),
    	iptEmp   = contactForm.querySelector('[name="company"]'),
    	iptCargo   = contactForm.querySelector('[name="cargo"]'),
    	iptFuncionarios   = contactForm.querySelector('[name="n-funcionarios"]'),
    	iptResponsavel   = contactForm.querySelector('[name="responsavel"]'),
    	iptOutrosResponsaveis   = contactForm.querySelector('[name="outros-responsaveis"]'),
    	iptExperienciaB2B   = contactForm.querySelector('[name="experiencia-b2b"]'),
    	iptComoLidar   = contactForm.querySelector('[name="lidar"]'),
    	iptSolucaoB2B   = contactForm.querySelector('[name="solucao-b2b"]'),
    	iptAvaliacaoCompetencias   = contactForm.querySelector('[name="avaliacao-competencias"]'),
    	iptEspecializacao   = contactForm.querySelector('[name="especializacao"]'),
    	iptExperienciasB2C   = contactForm.querySelector('[name="experiencia-b2c"]'),
    	iptSolucaoB2C   = contactForm.querySelector('[name="solucao-b2c"]');

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
	    	return Helpers.formError("Nome inválido. Por favor, verifique.", iptName);
		}
	});

	iptEmail.addEventListener('keyup', (event) => {
		let email = iptEmail.value;
		Helpers.formErrorClear(iptEmail);
		if(Helpers.empty(email)){
	    	return Helpers.formError("Preencha seu e-mail por favor.", iptEmail);
		} else if(!Helpers.isEmail(email)){
	    	return Helpers.formError("E-mail inválido. Por favor, verifique.", iptEmail);
		}
    });

	contactForm.addEventListener('submit', (event) => {

	    event.preventDefault();
	    event.stopPropagation();

	    let perfil = iptPerfil,
	    	horario   = atual;
		let	ip = iptIp.value,
			name  = iptName.value,
	       	email = iptEmail.value,
	       	emp   = iptEmp.value,
	       	cargo = iptCargo.value,
	       	funcionarios = iptFuncionarios.value,
	       	responsavel = iptResponsavel.value,
	       	outrosResponsaveis = iptOutrosResponsaveis.value,
	       	experienciasB2B = iptExperienciaB2B.value,
	       	comoLidar = iptComoLidar.value,
	       	solucaoB2B = iptSolucaoB2B.value,
	       	avaliacaoCompetencias = iptAvaliacaoCompetencias.value,
	       	especializacao = iptEspecializacao.value,
	       	experienciasB2C = iptExperienciasB2C.value,
	       	solucaoB2C = iptSolucaoB2C.value;

	    Helpers.formErrorClear(iptName);
	    Helpers.formErrorClear(iptEmail);

	    if(Helpers.empty(name) || Helpers.empty(name)){
	    	return Helpers.formError("Campos em branco. Por favor, verifique.");
	    }

	    if(!Helpers.isCorrectName(name)){
	    	return Helpers.formError("Nome inválido. Por favor, verifique.", iptName);
	    }

	    if(!Helpers.isEmail(email)){
	    	return Helpers.formError("E-mail inválido. Por favor, verifique.", iptEmail);
	    }

	    Helpers.saveLead(ip, perfil, horario, name, email, emp, cargo, funcionarios, responsavel, outrosResponsaveis, experienciasB2B, comoLidar, solucaoB2B, avaliacaoCompetencias, especializacao, experienciasB2C, solucaoB2C);
		
		iptName.value = '',
		iptEmail.value = '',
		iptEmp.value = '',
		iptCargo.value = '',
		iptFuncionarios.value = '',
		iptOutrosResponsaveis.value = '',
		iptExperienciaB2B.value = '',
		iptComoLidar.value = '',
		iptSolucaoB2B.value = '',
		iptAvaliacaoCompetencias.value = '',
		iptExperienciasB2C.value = '',
		iptSolucaoB2C.value = '';

		// contacForm.querySelector('form').reset();

    	return Helpers.formMsg("Foi muito valiosa a sua colaboração, o time da Goal Hunter agradece!.", contactForm);

  });

});