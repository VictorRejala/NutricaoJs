var titulo = document.querySelector (".titulo");
titulo.textContent = "Stephanie Nutrição";

var pacientes = document.querySelectorAll (".paciente");

function calculaImc (peso, altura) {
    
    var imc;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

for(i = 0; i < pacientes.length; i++) {
    
    var trPaciente = pacientes [i];
    
    var tdPeso = trPaciente.querySelector (".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = trPaciente.querySelector (".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = trPaciente.querySelector (".info-imc");

    pesoEhValido = validaPeso(peso);
    alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {

        tdImc.textContent = "Peso inválido";
        trPaciente.classList.add ("paciente-invalido");
    }

    if (!alturaEhValida) {

        tdImc.textContent = "Altura inválida";
        trPaciente.classList.add ("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {

        tdImc.textContent = calculaImc(peso, altura);
    }
}

function validaPeso (peso) {

    if ( peso >= 0 && peso <= 1000) {

        return true;
    } else {

        return false;
    }
}

function validaAltura (altura) {

    if ( altura >= 0 && altura <= 3.00) {

        return true;
    } else {

        return false;
    }
}

