function converter(){
    var anosLuz = document.querySelector('input[type="number"]');
    var velocidadeDaLuzEmMetros = 9460528405000020;
    var anosLuzEmMetros = anosLuz.value * velocidadeDaLuzEmMetros;
    alert(anosLuz.value + ' anos-luz equivale a ' + anosLuzEmMetros + " de metros.");
}
