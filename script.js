document.getElementById('whatsappLink').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('Assunto').value;
    var mensagem = document.getElementById('mensagem').value;
    var telefone = '5585988663231'; 

    var url = 'https://api.whatsapp.com/send?phone=' + telefone + '&text=' 
        + encodeURIComponent('Nome: ' + nome + '\nAssunto: ' + email + '\nMensagem: ' + mensagem);

    this.href = url;
});