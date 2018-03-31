// let $ = document.querySelector.bind(document);
window.onload = function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://jsonip.appspot.com/?callback=DisplayIP";
    document.getElementsByTagName("head")[0].appendChild(script);
};
function DisplayIP(response) {
    // document.getElementById("ipaddress").innerHTML = "Your IP Address is " + response.ip;
    console.log(response.ip);
}

let contactForm = $('#contact form')

function others(that) {
	if (that.value == "outros") {
		document.getElementById("outros").style.display = "block";
	} else {
		document.getElementById("outros").style.display = "none";
	}
}

Helpers.listen('[name="perfil"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);
	problemaAnalise = contactForm.querySelector('[name="problema-analise"]');
	analiseCompetencias = contactForm.querySelector('[name="analise-competencias"]');
	b2b = contactForm.querySelector('.b2b');
	b2c = contactForm.querySelector('.b2c');
	if(campos == '.b2c') {
		problemaAnalise.removeAttribute('required');
		analiseCompetencias.setAttribute('required', '');
		campo.classList.remove('none');
		b2b.classList.add('none');
	} else {
		problemaAnalise.setAttribute('required', '');
		analiseCompetencias.removeAttribute('required');
		campo.classList.remove('none');
		b2c.classList.add('none');
	}

});

Helpers.listen('[name="problema-analise"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);
	if(campos == '.value-analise-a') {
		campoB = contactForm.querySelector('.value-analise-b');
		campo.classList.remove('none');
		campoB.classList.add('none');
	} else {
		campoA = contactForm.querySelector('.value-analise-a');
		campo.classList.remove('none');
		campoA.classList.add('none');
	}
});

Helpers.listen('[name="analise-competencias"]', 'click', (element)=> {
	campos = '.' + element.value;
	campo = contactForm.querySelector(campos);
	if(campos == '.value-competencias-a') {
		campoA = contactForm.querySelector('.value-competencias-a');
		campoA.classList.add('none');
		// campoB.classList.add('none');
	} else {
		campoA = contactForm.querySelector('.value-competencias-a');
		campoA.classList.remove('none');;
	}
});