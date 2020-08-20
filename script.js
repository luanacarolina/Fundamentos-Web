let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let mapa = document.querySelector('#mapa');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
nome.style.width = '100%';
email.style.width = '100%';


function validaNome(){
    let txtNome = document.querySelector('#txtNome');
    if(nome.value.length < 3){
    txtNome.innerHTML='Nome Invalido';
    txtNome.style.color = 'red';
    }else{
        nomeOk=true;
        txtNome.innerHTML='Nome Valido';
        txtNome.style.color ='green';
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail');
    if(email.value.indexOf('@')==-1||email.value.indexOf('.')==-1){
        txtEmail.innerHTML='Email invalido';
        txtEmail.style.color="red";
    }else{
        emailOk=true;
        txtEmail.innerHTML='Email valido';
        txtEmail.style.color='green';
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML="Texto muito grande , digite apenas 100 caracteres";
        txtAssunto.style.color="red";
        txtAssunto.style.display="block";
    }else{
        assuntoOk=true;
        txtAssunto.style.display ="none";
    }
}
function enviar(){
    if(nomeOk==true && emailOk==true && assuntoOk==true){
        alert('Formulario enviado com sucesso');
    }else{
        alert('Preencha o formulario corretamente antes de enviar... ')
    }
}
function mapaZoom() {
    mapa.style.width="800px";
    mapa.style.height="400px";
}
function mapaNormal(){
    mapa.style.width="400px";
    mapa.style.height="200px";
}