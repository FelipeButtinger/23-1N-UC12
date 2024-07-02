$(document).ready(function() {
    $.getJSON('dados.json', function(dados) {
        var tabela = $('#tabela-dados tbody');
        dados.forEach(function(item) {
            var linha = $('<tr></tr>');
            linha.append($('<td></td>').text(item.nome));
            linha.append($('<td></td>').text(item.idade));
            linha.append($('<td></td>').text(item.cidade));
            tabela.append(linha);
        });
    });
});
