var botaoCor = document.querySelector("#mudar-modo");

botaoCor.addEventListener("click", mudarCor);


function mudarCor(event) {

    event.preventDefault;

    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var sectionH2 = document.querySelector("section h2");
    var informacao = document.querySelector(".informacao");
    var campo = document.querySelectorAll(".campo");
    var td = document.querySelectorAll("td");
    var th = document.querySelectorAll("th");
    var addpaciente = document.querySelector(".adicionar-paciente");
    var label = document.querySelectorAll("label");

    body.classList.toggle("light-body");
    header.classList.toggle("light-header");
    sectionH2.classList.toggle("light-section");
    informacao.classList.toggle("light-informacao");
    addpaciente.classList.toggle("light-section");

    for (i=0; i < campo.length; i++) {

        var campos = campo[i];

        campos.classList.toggle("light-campo");
    }

    for (i=0; i < td.length; i++) {

        var tds = td[i];

        tds.classList.toggle("light-td");
    }

    for (i=0; i < th.length; i++) {

        var ths = th[i];

        ths.classList.toggle("light-th");
    }

    for (i=0; i < label.length; i++) {

        var labels = label[i];

        labels.classList.toggle("light-informacao");
    }
}  