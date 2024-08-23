const form = document.getElementById('formAgenda');
const arrayNomes = [];
const arrayNumeros = [];

let linhas = ``;

form.addEventListener('submit' , function (e) {
    e.preventDefault();

    addLinha();
})

function addLinha(){
    const imputNome = document.getElementById('Nome')
    const imputNumero = document.getElementById('Numero')

    if(arrayNomes.includes(imputNome.value) || arrayNumeros.includes(imputNumero.value) ){
        alert("Contato Ja Cadastrado!");
    }
    else{
        arrayNomes.push(imputNome.value);
        arrayNomes.push(parseInt(imputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${imputNome.value}</td>`;
        linha += `<td>${imputNumero.value}</td>`;
        linha += `</tr>`;

    linhas += linha;
    attTabela();
}
}
function attTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;
}

