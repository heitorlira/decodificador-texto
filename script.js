const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiar = document.querySelector(".div-btn-copia");

// Logica do botão de encriptar
function btnEncriptar() {

    if (inputTexto.value == 0) {
        alert('É necessário digitar o texto que você deseja >ENCRIPTAR< primeiro.');
    } else if (inputTexto.value != 0) {
        const textoEncriptado = encriptar(inputTexto.value);
        mensagem.value = textoEncriptado;
        mensagem.style.backgroundImage = "none";
        copiar.style.display = "flex";
    }
}

// função de criptografia
function encriptar(stringEncriptada) {

    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

// Logica do botão de desencriptar
function btnDesencriptar() {

    if (inputTexto.value == 0) {
        alert('É necessário digitar o texto que você deseja >DESENCRIPTAR< primeiro.')
    } else if (inputTexto.value != 0) {
        const textoEncriptado = desencriptar(inputTexto.value); // Mesma coisa que lá em cima
        mensagem.value = textoEncriptado;
        mensagem.style.backgroundImage = "none";
        copiar.style.display = "flex";
    }
}

// função de descriptografia
function desencriptar(stringEncriptada) {

    let matrizCodigo = [
        ["enter", "e"],
        ["imes", "i"],
        ["ai", "a"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

// ------------------------------

function btnCopiar() {

    if (mensagem.value == '') {
        mensagem.placeholder = 'Nenhuma mensagem foi encontrada';
        mensagem.style.backgroundImage = "none";
    } else {
        navigator.clipboard.writeText(mensagem.value); // Pega valor escrito em <textarea .mensagem>
        mensagem.value = '';
        inputTexto.value = '';
        mensagem.placeholder = 'Texto copiado com sucesso!';
        inputTexto.placeholder = 'Cole seu texto aqui'
    }
}