﻿const fornecedorForm = document.getElementById('fornecedorForm');
const fornecedorTableBody = document.querySelector('#fornecedorTable tbody');
const searchInput = document.getElementById('searchInput');
const filterColumn = document.getElementById('filterColumn');
const successNotification = document.getElementById('successNotification');
const editNotification = document.getElementById('editNotification');
const deleteNotification = document.getElementById('deleteNotification');
const submitButton = document.getElementById('submitButton');
let editingRow = null;

showTab('adicionar');

// Função para mostrar a notificação de sucesso
function showNotification(type) {
    let notification;
    switch (type) {
        case 'success':
            notification = successNotification;
            break;
        case 'edit':
            notification = editNotification;
            break;
        case 'delete':
            notification = deleteNotification;
            break;
        default:
            return;
    }
    notification.classList.remove('hidden');
    notification.classList.add('visible');

    setTimeout(function () {
        notification.classList.remove('visible');
        notification.classList.add('hidden');
    }, 3000);
}

// Função para adicionar um novo fornecedor na tabela
fornecedorForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const email = document.getElementById('email').value;
    const cnpj = document.getElementById('cnpj').value;
    const inscricao = document.getElementById('inscricao').value;
    const telefone = document.getElementById('telefone').value;
    const rua = document.getElementById('rua').value;
    const cep = document.getElementById('cep').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    if (!nomeEmpresa || !email || !cnpj || !inscricao || !telefone || !rua || !cep || !numero || !cidade || !estado) {
        alert('Todos os campos obrigatórios devem ser preenchidos.');
        return;
    }

    if (editingRow) {
        editingRow.innerHTML =
            `<td data-label="Nome Empresa">${nomeEmpresa}</td>
            <td data-label="E-mail">${email}</td>
            <td data-label="CNPJ">${cnpj}</td>
            <td data-label="Inscrição Estadual">${inscricao}</td>
            <td data-label="Telefone">${telefone}</td>
            <td data-label="Rua">${rua}</td>
            <td data-label="CEP">${cep}</td>
            <td data-label="Número">${numero}</td>
            <td data-label="Bairro">${bairro}</td>
            <td data-label="Cidade">${cidade}</td>
            <td data-label="Estado">${estado}</td>
            <td data-label="Ações">
                <button class="editar" onclick="editarfornecedor(this)">Editar</button>
                <button class="excluir" onclick="excluirfornecedor(this)">Excluir</button>
            </td>`;

        editingRow = null;
        submitButton.textContent = 'Adicionar fornecedor';
        submitButton.classList.remove('edit-button');
        showNotification('edit');
        showTab('visualizacao');
    } else {
        const newRow = document.createElement('tr');
        newRow.innerHTML =
            `<td data-label="Nome Empresa">${nomeEmpresa}</td>
            <td data-label="E-mail">${email}</td>
            <td data-label="CNPJ">${cnpj}</td>
            <td data-label="Inscrição Estadual">${inscricao}</td>
            <td data-label="Telefone">${telefone}</td>
            <td data-label="Rua">${rua}</td>
            <td data-label="CEP">${cep}</td>
            <td data-label="Número">${numero}</td>
            <td data-label="Bairro">${bairro}</td>
            <td data-label="Cidade">${cidade}</td>
            <td data-label="Estado">${estado}</td>
            <td data-label="Ações">
                <button class="editar" onclick="editarfornecedor(this)">Editar</button>
                <button class="excluir" onclick="excluirfornecedor(this)">Excluir</button>
            </td>`;

        fornecedorTableBody.appendChild(newRow);
        fornecedorForm.reset();
        showNotification('success');
    }
});

// Função para editar um fornecedor
function editarfornecedor(button) {
    const row = button.parentElement.parentElement;
    const cells = row.querySelectorAll('td');

    document.getElementById('nomeEmpresa').value = cells[0].textContent;
    document.getElementById('email').value = cells[1].textContent;
    document.getElementById('cnpj').value = cells[2].textContent;
    document.getElementById('inscricao').value = cells[3].textContent;
    document.getElementById('telefone').value = cells[4].textContent;
    document.getElementById('rua').value = cells[5].textContent;
    document.getElementById('cep').value = cells[6].textContent;
    document.getElementById('numero').value = cells[7].textContent;
    document.getElementById('bairro').value = cells[8].textContent;
    document.getElementById('cidade').value = cells[9].textContent;
    document.getElementById('estado').value = cells[10].textContent;

    editingRow = row;

    submitButton.textContent = 'Editar fornecedor';
    submitButton.classList.add('edit-button');

    showTab('adicionar');
}

// Função para excluir um fornecedor sem confirmação
function excluirfornecedor(button) {
    const row = button.parentElement.parentElement;
    fornecedorTableBody.removeChild(row);
    showNotification('delete');
}

// Função para pesquisar fornecedors
function pesquisarfornecedor() {
    const filter = searchInput.value.toUpperCase();
    const selectedColumn = filterColumn.value;
    const rows = fornecedorTableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        switch (selectedColumn) {
            case 'nomeEmpresa':
                match = cells[0].textContent.toUpperCase().includes(filter);
                break;
            case 'email':
                match = cells[1].textContent.toUpperCase().includes(filter);
                break;
            case 'cnpj':
                match = cells[2].textContent.toUpperCase().includes(filter);
                break;
            case 'inscricao':
                match = cells[3].textContent.toUpperCase().includes(filter);
                break;
            case 'telefone':
                match = cells[4].textContent.toUpperCase().includes(filter);
                break;
            case 'rua':
                match = cells[5].textContent.toUpperCase().includes(filter);
                break;
            case 'cep':
                match = cells[6].textContent.toUpperCase().includes(filter);
                break;
            case 'numero':
                match = cells[7].textContent.toUpperCase().includes(filter);
                break;
            case 'bairro':
                match = cells[8].textContent.toUpperCase().includes(filter);
                break;
            case 'cidade':
                match = cells[9].textContent.toUpperCase().includes(filter);
                break;
            case 'estado':
                match = cells[10].textContent.toUpperCase().includes(filter);
                break;
        }

        rows[i].style.display = match ? '' : 'none';
    }
}

// Função para mostrar uma aba
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.style.display = 'block';
        } else {
            tab.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('onclick').includes(tabId));
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Esconder a sidebar
        mainContent.style.marginLeft = '0'; // Ajustar o conteúdo principal
    } else {
        sidebar.style.left = '0'; // Mostrar a sidebar
        mainContent.style.marginLeft = '250px'; // Ajustar o conteúdo principal
    }
}

// Fechar o menu ao clicar fora dele
window.onclick = function (event) {
    const sidebar = document.querySelector('.sidebar');
    if (!event.target.matches('.menu-icon') && sidebar.style.left === '0px') {
        sidebar.style.left = '-250px'; // Esconder a sidebar
        document.querySelector('.main-content').style.marginLeft = '0'; // Ajustar o conteúdo principal
    }
};

//profile itens
function toggleProfileMenu(event) {
    const profileMenu = document.querySelector('.profile-menu');

    // Alterna a visibilidade do menu de perfil
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
    event.stopPropagation(); // Impede a propagação do clique para a janela
}

// Função para permitir apenas números
function allowOnlyNumbers(event) {
    const regex = /^[0-9]*$/;
    if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/\D/g, '');
    }
}

// Função para permitir apenas letras
function allowOnlyLetters(event) {
    const regex = /^[A-Za-zÀ-ÿ\s]*$/;
    if (!regex.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
    }
}

// Adicionar validação aos campos específicos
document.getElementById('inscricao').addEventListener('input', allowOnlyNumbers);
document.getElementById('telefone').addEventListener('input', allowOnlyNumbers);
document.getElementById('cnpj').addEventListener('input', allowOnlyNumbers);
document.getElementById('cep').addEventListener('input', allowOnlyNumbers);
document.getElementById('numero').addEventListener('input', allowOnlyNumbers);

document.getElementById('nomeEmpresa').addEventListener('input', allowOnlyLetters);
document.getElementById('rua').addEventListener('input', allowOnlyLetters);
document.getElementById('bairro').addEventListener('input', allowOnlyLetters);
document.getElementById('cidade').addEventListener('input', allowOnlyLetters);
document.getElementById('estado').addEventListener('input', allowOnlyLetters);