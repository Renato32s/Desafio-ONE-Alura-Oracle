let entDeTexto = document.querySelector('.entrada_de_texto');
let saidaDeTexto = document.querySelector('#saida_de_texto');
let divDaSaidaDeTexto = document.querySelector('.div_da_saida_de_texto');
let divInitSaidaDeTexto = document.querySelector('.div_inicial_da_saida_de_texto');
let btnCrip = document.querySelector('#btn_crip');
let btnDecrip = document.querySelector('#btn_decrip');
let btnCopiar = document.querySelector('#btn_copiar');

const listaChave = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
};

function criptografia(listaChave, texto) {
    const textoCriptografado = texto.split('').map((x) => {
        if (listaChave[x]) {
            return listaChave[x];
        }
        return x;
    }).join('');

    return textoCriptografado;
};


function descripitografia(listaChave, entDeTexto) {
    let nTexto = "";
    for (let x = 0; x < entDeTexto.length; x++) {
        const elm = entDeTexto[x];
        const valChave = listaChave[elm];

        if (valChave) {
            const vl = valChave.length;
            const nt = entDeTexto.slice(x, x + vl);
            if (valChave === nt) {
                x += vl - 1;
            }
        }
        nTexto += elm;
    }
    return nTexto;
}

function verificarTexto(entDeTexto) {
    const regex = /^[a-z\s.,;:!?]*$/;
    if (!regex.test(entDeTexto)) {
        alert('Digite apenas letras minúsculas e sem acentos');
        return false;
    }
    return true;
}

function limparTexto() {
    entDeTexto.value = '';
    btnDecrip.disabled = true;
}

function focarTexto() {
    entDeTexto.focus();
}

function limparSaidaDeTexto() {
    saidaDeTexto.innerHTML = '';  // Corrigido para limpar o elemento correto
}

function adicionarConteudoHtml(elm, texto) {
    elm.innerHTML = texto;
}

function desativarElementos() {
    // Verifica se a área de saída de texto está vazia
    if (saidaDeTexto.textContent.trim() === '') {
        divInitSaidaDeTexto.style.display = '';
        saidaDeTexto.style.display = 'none';
        btnCopiar.style.display = 'none';
    } else {
        divInitSaidaDeTexto.style.display = 'none';
        saidaDeTexto.style.display = '';
        btnCopiar.style.display = '';
    }
}


desativarElementos();

entDeTexto.addEventListener('input', (e) => {
    if (entDeTexto.value === '') {
        btnDecrip.disabled = true;
    } else {
        btnDecrip.disabled = false;
    }
});

btnCrip.addEventListener('click', (e) => {
    const textoValor = entDeTexto.value;

    if (textoValor === '') {
        alert('Texto inválido');
        return;
    }

    if (!verificarTexto(textoValor)) {
        return;
    }

    limparSaidaDeTexto();

    const textoCriptografado = criptografia(listaChave, textoValor); // Ajuste aqui

    adicionarConteudoHtml(saidaDeTexto, textoCriptografado);


    desativarElementos();
    limparTexto();
    focarTexto();
});

btnDecrip.addEventListener('click', (e) => {
    const textoValor = entDeTexto.value;

    if (textoValor === '') {
        alert('Texto inválido');
        return;
    }

    if (!verificarTexto(textoValor)) {
        return;
    }

    limparSaidaDeTexto();

    const textoCriptografado = descripitografia(listaChave, textoValor); // Ajuste aqui

    adicionarConteudoHtml(saidaDeTexto, textoCriptografado);


    desativarElementos();
    limparTexto();
    focarTexto();
});

btnCopiar.addEventListener('click', (e) => {
    // Selecionar o texto da área de saída de texto
    const textToCopy = saidaDeTexto.textContent;
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);

    limparSaidaDeTexto();
    // Esconder a área de saída de texto e o botão "Copiar"
    desativarElementos();

    // Desabilitar outros botões
    [btnCrip, btnDecrip].forEach(btn => btn.disabled = true);

    // Limpar o texto de entrada após copiar
    setTimeout(() => {
        entDeTexto.value = '';
        // Habilitar novamente os botões após um tempo
        [btnCrip, btnDecrip].forEach(btn => btn.disabled = false);
    }, 1000); // Tempo de exibição pode ser ajustado conforme necessário
});
