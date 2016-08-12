var listCidades = [
	{texto: "São Paulo", valor: "SP"},
	{texto: "Rio de Janeiro", valor: "RJ"},
	{texto: "Bahia", valor: "BA"}
];

function PreencheCidades(){
	var ddlCidade = document.getElementById('ddlCidade');

	ddlCidade.innerHTML = "<option value=''>-- Selecione --</option>";
	for (var i = 0; i < listCidades.length; i++) {
		ddlCidade.innerHTML += "<option value='" + listCidades[i].valor + "'>" + listCidades[i].texto + "</option>";
	}

function onCadastrarClienteClick(){

	RemoveMensagemErro();

	var txtNome = document.getElementById('txtNome');
	var txtEmail = document.getElementById('txtEmail');
	var txtTelefone = document.getElementById('txtTelefone');
	var ddlCidade = document.getElementById('ddlCidade');

	if (ValidarCadastro(txtNome,txtEmail,txtTelefone,ddlCidade)){

	}
}

function ValidarCadastro(txtNome, txtEmail, txtTelefone, ddlCidade){
	var validado = true;

	if (txtNome.value ===''){
		validado = false;
		txtNome.classList.add('errorInput');
	}	
	if (txtEmail.value === ''){
		validado = false;
		txtEmail.classList.add('errorInput');
	}
	if (txtTelefone.value === ''){
		validado = false;
		txtTelefone.classList.add('errorInput');
	}
	if (ddlCidade.value === ''){
		validado = false;
		ddlCidade.classList.add('errorInput');
	}

	if(!validado){
		MostrarMensagemErro();
	}

	return validado;

}

function MostrarMensagemErro(){
	var divAlert = document.getElementById('divAlert');
	divAlert.classList.add('alert');
	divAlert.classList.add('alert-danger');

	divAlert.innerHTML = '<strong>Atenção: </strong>' + 'Por favor, preencha os campos indicados abaixo.';
}


function RemoveMensagemErro(){
	var todosElementosComEssaClass = document.getElementsByClassName('errorInput');

	while (todosElementosComEssaClass.length > 0){
		todosElementosComEssaClass[0].classList.remove('errorInput');
	}

	var divAlert = document.getElementById('divAlert');
	divAlert.classList.add('alert');
	divAlert.classList.add('alert-danger');

	divAlert.innerHTML = '';

}