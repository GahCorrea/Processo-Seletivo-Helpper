const clientes = new Array();
var cliente = new Object();

function clearForm() {
    document.getElementById('nomeCli').value = ("");
    document.getElementById('emailCli').value = ("");
    document.getElementById('cpf_cnpjCli').value = ("");
    document.getElementById('telCli').value = ("");
    document.getElementById('cepCli').value = ("");
    document.getElementById('ruaCli').value = ("");
    document.getElementById('numCli').value = ("");
    document.getElementById('bairroCli').value = ("");
    document.getElementById('cidadeCli').value = ("");
    document.getElementById('estadoCli').value = ("");
}

function createClient() {
    cliente.nome = document.getElementById('nomeCli').value;
    cliente.email = document.getElementById('emailCli').value;
    cliente.cpf_cnpj = document.getElementById('cpf_cnpjCli').value;
    cliente.tel = document.getElementById('telCli').value;
    cliente.cep = document.getElementById('cepCli').value;
    cliente.rua = document.getElementById('ruaCli').value;
    cliente.numero = document.getElementById('numCli').value;
    cliente.bairro = document.getElementById('bairroCli').value;
    cliente.cidade = document.getElementById('cidadeCli').value;
    cliente.estado = document.getElementById('estadoCli').value;

    clientes.push(cliente);

    clearForm();
}

function searchClient() {

    if (clientes.find(cliente => cliente.nome == document.getElementById('nomeCli').value)) {
        document.getElementById('emailCli').value = cliente.email;
        document.getElementById('cpf_cnpjCli').value = cliente.cpf_cnpj;
        document.getElementById('telCli').value = cliente.tel;
        document.getElementById('cepCli').value = cliente.cep;
        document.getElementById('ruaCli').value = cliente.rua;
        document.getElementById('numCli').value = cliente.numero;
        document.getElementById('bairroCli').value = cliente.bairro;
        document.getElementById('cidadeCli').value = cliente.cidade;
        document.getElementById('estadoCli').value = cliente.estado;
    } else {
        alert("Cliente não encontrado!");
        clearForm();
    }
}

function removeClient() {
    clientes.splice(clientes.indexOf(document.getElementById('nomeCli')), 1);
    clearForm();
}
