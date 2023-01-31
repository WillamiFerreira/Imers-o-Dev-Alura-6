/*function pedirNome(){
    var nome = prompt("Qual é seu nome? ")
}*/

function converter(){
    var valorEmReal = document.querySelector('input[type="number"]').value;
    var cotacaoBitcoin = 117517.83;
    var valorEmBiticoin = valorEmReal / cotacaoBitcoin;

    alert(valorEmBiticoin)
};