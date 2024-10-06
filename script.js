$(document).ready(function() {
    $('#somaBtn').click(function() {

        var num1 = parseFloat($('#num1').val());
        var num2 = parseFloat($('#num2').val());
        

        var resultado = num1 + num2;
            $('#resultado').text('Resultado: ' + resultado);
    });
});