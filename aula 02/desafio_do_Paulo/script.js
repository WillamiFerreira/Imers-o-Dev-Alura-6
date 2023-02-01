var numeroSecreto = parseInt(Math.random() * 101);
// A forma que encontrei para "não sortear" o 0 é se o número escolhido for 0, então ele será substituído por 1.
if (numeroSecreto == 0) {
    numeroSecreto = 1
};
var numeroTentativas = 0
var tentativasRestantes = 10

while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 0 e 100')
    /*Uma forma de verificar se o valor dado pelo user é válido, ou seja, um inteiro é transforma-lo em tipo int
    (já que todo valor que entra pelo prompt é uma string). Para isso é usado a função parseInt, transformando a entrada em number ou NaN*/
    chute = parseInt(chute)
    numeroTentativas++
    tentativasRestantes--
    if (tentativasRestantes == 0) {
        alert('Você esgotou suas chançes')
        break
    };
    //Esse if verifica se o valor que entrou pelo prompt é NaN, o que significa que é inválido.
    if (isNaN(chute)) {
        alert('Digite um valor válido.')
    } else if (chute == numeroSecreto) {
        alert(`Você acertou! com ${numeroTentativas} tentativas.`)
    } else if (chute > numeroSecreto) {
        alert(`Você errou! o número secreto é menor do que ${chute}.\nVocê tem ${tentativasRestantes} tentativas restantes.`)
    } else { //se  o chute for maior
        alert(`Você errou! o número secreto é maior do que ${chute}.\nVocê tem ${tentativasRestantes} tentativas restantes.`)
    }
};