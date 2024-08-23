const formulario = document.getElementById('formulario')
const nomeCompleto = document.getElementById('nomeCompleto');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');
const botaoEnviar = document.getElementById('botaoEnviar');
const avisoErroNomeCompleto = document.getElementById('erroNomeCompleto');
const avisoErroEmail = document.getElementById('erroEmail');
const avisoErroTelefone = document.getElementById('erroTelefone');
const avisoErroMensagem = document.getElementById('erroMensagem');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    const valorNomeCompleto = nomeCompleto.value;
    const valorEmail = email.value;
    const valorTelefone = telefone.value;
    const valorMensagem = mensagem.value;

    if (valorNomeCompleto === '') {
        invalidarInputNomeCompleto();
    } else {
        validarInputNomeCompleto();
    };

    if (valorEmail === '') {
        invalidarInputEmail();
    } else {
        validarInputEmail();
    };

    if (valorTelefone === '') {
        invalidarInputTelefone();
    } else {
        validarInputTelefone();
    };

    if (valorMensagem === '') {
        invalidarInputMensagem();
    } else {
        validarInputMensagem();
    };
});


function invalidarInputNomeCompleto() {

    nomeCompleto.style.border = "2px solid #F52E2E";
    avisoErroNomeCompleto.style.display = 'block';
};

function invalidarInputEmail() {

    email.style.border = "2px solid #F52E2E";
    avisoErroEmail.style.display = 'block';
};

function invalidarInputTelefone() {

    telefone.style.border = "2px solid #F52E2E";
    avisoErroTelefone.style.display = 'block';
};

function invalidarInputMensagem() {

    mensagem.style.border = "2px solid #F52E2E";
    avisoErroMensagem.style.display = 'block';
};

function validarInputNomeCompleto() {

    nomeCompleto.style.border = "2px solid #00C22B";
    avisoErroNomeCompleto.style.display = 'none';
};

function validarInputEmail() {

    email.style.border = "2px solid #00C22B";
    avisoErroEmail.style.display = 'none';
};

function validarInputTelefone() {

    telefone.style.border = "2px solid #00C22B";
    avisoErroTelefone.style.display = 'none';
};

function validarInputMensagem() {

    mensagem.style.border = "2px solid #00C22B";
    avisoErroMensagem.style.display = 'none';
};