function getIP(json) {
	input = document.getElementById('ip-server');
	input.setAttribute('value', json.ip);
}
// let $ = document.querySelector.bind(document);
let contactForm = $('#contact form')

function others(that) {
	outrosResponsaveis = contactForm.querySelector('[name="outros-responsaveis"]');
	if (that.value == "outros") {
		document.getElementById("outros").style.display = "block";

		// REQUIRED
		outrosResponsaveis.setAttribute('required', '');
	} else {
		document.getElementById("outros").style.display = "none";
		
		// REQUIRED
		outrosResponsaveis.removeAttribute('required');
	}
}

Helpers.listen('[name="perfil"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);
	email = contactForm.querySelector('[name="email"]');
	problemaAnalise = contactForm.querySelector('[name="problema-analise"]');
	analiseCompetencias = contactForm.querySelector('[name="analise-competencias"]');
	b2b = contactForm.querySelector('.b2b');
	b2c = contactForm.querySelector('.b2c');

	// CAMPOS B2B	
	empresa = contactForm.querySelector('[name="company"]');
	cargo = contactForm.querySelector('[name="cargo"]');
	nFuncionarios = contactForm.querySelector('[name="n-funcionarios"]');
	
	experienciaB2C = contactForm.querySelector('[name="experiencia-b2c"]');
	if(campos == '.b2c') {
		problemaAnalise.removeAttribute('required');
		analiseCompetencias.setAttribute('required', '');
		email.setAttribute('placeholder', 'Email Pessoal*');
		campo.classList.remove('none');
		b2b.classList.add('none');

		// REQUIRED
		empresa.removeAttribute('required');
		cargo.removeAttribute('required');
		nFuncionarios.removeAttribute('required');

		experienciaB2C.setAttribute('required', '');
	} else {
		problemaAnalise.setAttribute('required', '');
		analiseCompetencias.removeAttribute('required');
		email.setAttribute('placeholder', 'Email Corporativo*');
		campo.classList.remove('none');
		b2c.classList.add('none');

		// REQUIRED
		empresa.setAttribute('required', '');
		cargo.setAttribute('required', '');
		nFuncionarios.setAttribute('required', '');

		experienciaB2C.removeAttribute('required');
	}

});	

Helpers.listen('[name="problema-analise"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);

	comoLidar = contactForm.querySelector('[name="lidar"]');
	solucaoB2B = contactForm.querySelector('[name="solucao-b2b"]');
	avaliacaoCompetencias = contactForm.querySelector('[name="avaliacao-competencias"]');
	if(campos == '.value-analise-a') {
		campoB = contactForm.querySelector('.value-analise-b');
		campo.classList.remove('none');
		campoB.classList.add('none');

		// REQUIRED
		comoLidar.setAttribute('required', '');
		solucaoB2B.setAttribute('required', '');
		avaliacaoCompetencias.removeAttribute('required');
	} else {
		campoA = contactForm.querySelector('.value-analise-a');
		campo.classList.remove('none');
		campoA.classList.add('none');
		
		// REQUIRED
		comoLidar.removeAttribute('required');
		solucaoB2B.removeAttribute('required');
		avaliacaoCompetencias.setAttribute('required', '');
	}
});

Helpers.listen('[name="analise-competencias"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);

	solucaoB2C = contactForm.querySelector('[name="solucao-b2c"]');
	if(campos == '.value-competencias-b') {
		campoA = contactForm.querySelector('.value-competencias-b');
		campoA.classList.add('none');
		
		// REQUIRED
		solucaoB2C.removeAttribute('required');
	} else {
		campoA = contactForm.querySelector('.value-competencias-b');
		campoA.classList.remove('none');;

		// REQUIRED
		solucaoB2C.setAttribute('required', '');
	}
});

Helpers.listen('#modal .mask', 'click', (element)=> {
	return Helpers.fecharModal();
});

Helpers.listen('#modal .fechar', 'click', (element)=> {
	return Helpers.fecharModal();
});