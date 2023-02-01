function converter(){
    var anosLuz = document.querySelector('input[type="number"]').value;
    anosLuz = parseInt(anosLuz); //Transformando string em number
    var velocidadeDaLuzEmMetros = 9460528405000020;
    var anosLuzEmMetros = anosLuz * velocidadeDaLuzEmMetros;
    
    alert(anosLuz + ' anos-luz equivale a ' + anosLuzEmMetros + " de metros.");
}
