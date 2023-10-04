// Carne - 400 gr por pessoas + de 6 horas- 650gr
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// refrigerante/agua - 1000 ml + 6 horas 1500ml
// crianças valem por 0,5

function churras(){
    function qtd_carne() {
        let adulto = document.getElementById("adulto");
        let criança = document.getElementById("criança");
        let duracao = document.getElementById("horas");
        let resultado = document.getElementById("resultado");
        

        if (duracao.value < 7) {
            let soma = adulto.value * 400;
            let soma_kid = criança.value * 200;
            resultado.innerHTML = `<p>${(soma + soma_kid)}g de carne</p>`;
        } else {
            let soma = adulto.value * 650;
            let soma_kid = criança.value * 325;
            resultado.innerHTML = `<p>${(soma + soma_kid)}g de carne</p>`;
        }
    }

    function qtd_cerveja() {
        let adulto = document.getElementById("adulto");
        let duracao = document.getElementById("horas");
        let resultado = document.getElementById("resultado");

        if (duracao.value < 7) {
            let soma = (adulto.value * 1200)/1000;
            resultado.innerHTML += `<p>${soma}litros de cerveja</p>`;
        } else {
            let soma = (adulto.value * 2000)/1000;
            resultado.innerHTML += `<p>${soma}litros de cerveja</p>`;
        }
    }

    function qtd_bebida() {
        let adulto = document.getElementById("adulto");
        let criança = document.getElementById("criança");
        let duracao = document.getElementById("horas");
        let resultado = document.getElementById("resultado");

        if (duracao.value < 7) {
            let soma = (adulto.value * 1000)/1000;
            let soma_kid = ((criança.value * 0,5) * 1000)/1000;
            resultado.innerHTML += `<p>${(soma + soma_kid)} litros de refrigerante</p>`;
        } else {
            let soma = (adulto.value * 1500)/1000;
            let soma_kid = ((criança.value * 0,5) * 1500)/1000;
            resultado.innerHTML += `<p>${(soma + soma_kid)} litros de refrigerante</p>`;
        }
        
    }
    qtd_carne();
    qtd_cerveja();
    qtd_bebida();
}