
function pedirNome(){
    nome = prompt("Qual é seu nome? ")

}
function converter(){
    var valorEmReal = document.querySelector('input[type="number"]').value
    var cotacaoBitcoin = 117517.83;
    var valorEmBiticoin = valorEmReal / cotacaoBitcoin;
    valorEmBiticoin = valorEmBiticoin.toFixed(3)

    alert(`${nome}, R$${valorEmReal} equivale a ${valorEmBiticoin} BTC.`)
};