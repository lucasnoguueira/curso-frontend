function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/*
* formulario de envio de dados para calculo da média
*/

const formulario1 = document.getElementById('formulario-01');

if(formulario1)
formulario1.addEventListener('submit',function( evento ){

    evento.preventDefault();
    evento.stopPropagation();

    if (this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);
    let notas = [];

    for(let key of dados.keys()) {

        /*let numero =  parseFloat(dados.get(key)); /*- parseFloat - indica q é um numero e permite numéro decimal*/

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; 

        /* /\d/ expressão regular que verifica se é um dígito*/

        if (!isNaN(numero)) {
            notas.push(numero)
        }  
        
        //.push adiciona itens no array
   

    console.log(notas);

    texto = aprovacao(notas)

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    }
})



function ValidaCampo(elemento){
    
    elemento.addEventListener('focusout', function(event){

    event.preventDefault();

    if(this.value == ""){
        document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
        this.classList.add('erro')
        this.parentNode.classList.add('erro');
        return false;
    } else {
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro')
        this.parentNode.classList.remove('erro');
    }})


}


function ValidaCampoNumerico(elemento){
    
    elemento.addEventListener('focusout', function(event){

    event.preventDefault();

    let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

    if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro')
        this.parentNode.classList.remove('erro');
    } else {
        document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
        this.classList.add('erro')
        this.parentNode.classList.add('erro');
        return false;
    }})


}

function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();
    
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
            this.classList.add('erro')
            this.parentNode.classList.add('erro');
            return false;
        }})
}

function validaUF(elemento){

    elemento.addEventListener('focusout', function(event){

        event.preventDefault();
    
        const UF = /[a-z]/ ;
        if(this.value.match(UF)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro')
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em vermelho';
            this.classList.add('erro')
            this.parentNode.classList.add('erro');
            return false;
        }})
}


let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.UF');

for( let emFoco of camposObrigatorios){
    ValidaCampo(emFoco)
}

for( let emFoco of camposNumericos){
    ValidaCampoNumerico(emFoco)
}
for( let emFoco of camposEmail){
    validaEmail(emFoco)
}
for( let emFoco of camposUF){
    validaUF(emFoco)
}



