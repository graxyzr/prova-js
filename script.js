function verificaTudo() {
    let inputElementNome = document.getElementById("nome");
    let valorInputNome = inputElementNome.value;

    if (valorInputNome.trim() === "") {
        alert("Caro usuário... \n\nO nome não está preenchido!");
        inputElementNome.focus();
    }



    let inputElementCPF = document.getElementById("cpf");
    let valorInputCPF = inputElementCPF.value;

    if (!(valorInputCPF != "" && valorInputCPF.length === 11)) {
        alert("Caro usuário... \n\nVerifique o campo 'CPF' \n\nO campo não está preenchido corretamente. \n\nDeve estar preenchido com 11 caracteres!");
        inputElementCPF.focus();
    }



    let inputElementIdade = document.getElementById("idade");
    let valorInputIdade = inputElementIdade.value;

    if (!(valorInputIdade >= 0 && valorInputIdade <= 100)) {
        alert("Caro usuário... \n\nVerifique o campo 'Idade' \n\nO campo não está preenchido corretamente. \n\nInforme sua idade entre 0 e 100!");
        inputElementIdade.focus();
    }



    let inputElementSenha = document.getElementById("senha");
    let inputElementConfirmarSenha = document.getElementById("confirmarSenha");
    let valorInputSenha = inputElementSenha.value;
    let valorInputConfirmarSenha = inputElementConfirmarSenha.value;

    if (!(senha.length >= 6 && senha === confirmarSenha)) {
        alert("Caro usuário... \n\nVerifique o campo 'Senha' \n\nO campo não está preenchido corretamente. \n\nInforme uma senha de 6 caracteres e igual no campo de confirmar!");
        inputElementSenha.focus();
        inputElementConfirmarSenha.focus();
    }
}



function numLista() {
    let elementLista = ['Abacate', 'Laranja', 'Uva']; // Lista de Compras
    let listaCompras = document.getElementById("listaCompras");  // ul do HTML
    let numeroListas = document.getElementById("lista"); // Número do Usuário
    let numeroValue = numeroListas.value;
    let listaHTML = '';                                                                      // Aqui está incorreto o funcionamento

    for (let c = 0; c < numeroValue; c++) {
        listaHTML += '<li>' + elementLista[c] + '</li>';
    }

    listaCompras.innerHTML = listaHTML;
}



document.getElementById("criarDiv").addEventListener("click", function () {
    var container = document.getElementById("container");
    var div = document.createElement("div");
    div.classList.add("created-div");
    container.appendChild(div);
});