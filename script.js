document.addEventListener('DOMContentLoaded', function () {
    var mensagem = document.getElementById('mensagem');
    var surpresaButton = document.getElementById('surpresaButton');

    var textoOriginal = 'oioioioioioi angela, já fazia um tempo que eu não fazia algo desse tipo pra ti e queria inovar dessa vez, então fiz essa página simples, mas do coração pra que você sempre se lembre que eu te amo muito, sua presença dá cor ao meu dia, como um arco íris depois de uma tempestade nebulosa. é incrivel o fato de como sua mera existência pode afetar tão significativamente a vida de alguém, não? desculpe se eu fui muito intenso, só queria expor pra você mais uma vez se lembrar do quanto é especial; meu diamante bruto <3';
    var indice = 0;

    function exibirTexto() {
        mensagem.textContent += textoOriginal[indice];
        indice++;

        if (indice < textoOriginal.length) {
            setTimeout(exibirTexto, 100); // Ajuste o tempo conforme desejado (em milissegundos)
        }
    }

    // Inicie o efeito gradual imediatamente
    exibirTexto();

    surpresaButton.addEventListener('click', function () {
        alert('Surpresa! Você é incrível! (e gostosa rs) 😊');
    });
});
