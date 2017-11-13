$(document).ready(function () {

    /* MONSTRAR E FECHAR(MAIS OU MENOS)*/
    $("#btn-menos").click(function () {
        $("#div-botoes").hide();
        $('#btn-menos').corner();
        $('#btn-mais').corner();
    });
    $("#btn-mais").click(function () {
        $("#div-botoes").show();
    });

    /*botoes operador all*/
    $("#btn_operadores_all").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_operadores_all").click(function () {
        $("#operadores_all").show();
    });

    $("#btn_voltar_operadores").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_voltar_operadores").click(function () {
        $("#div-inicio").show();
    });

    /*Operadores atribuição*/

    $("#btn_atribuicao").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_atribuicao").click(function () {
        $("#operadores_atribuicao").show();
    });

    $("#btn_voltar_operadores_atribuicao").click(function () {
        $("#operadores_atribuicao").hide();
    });
    $("#btn_voltar_operadores_atribuicao").click(function () {
        $("#operadores_all").show();
    });

    /*Operadores comparacao*/

    $("#btn_comparacao").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_comparacao").click(function () {
        $("#operadores_comparacao").show();
    });

    $("#btn_voltar_operadores_comparacao").click(function () {
        $("#operadores_comparacao").hide();
    });
    $("#btn_voltar_operadores_comparacao").click(function () {
        $("#operadores_all").show();
    });
    /*#operadores_aritmeticos*/
 $("#btn_aritmeticos").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_aritmeticos").click(function () {
        $("#operadores_aritmeticos").show();
    });

    $("#btn_voltar_operadores_aritmeticos").click(function () {
        $("#operadores_aritmeticos").hide();
    });
    $("#btn_voltar_operadores_aritmeticos").click(function () {
        $("#operadores_all").show();
    });
    
       /*#operadores_logicos*/
 $("#btn_logicos").click(function () {
        $("#operadores_all").hide();
    });
    $("#btn_logicos").click(function () {
        $("#operadores_logicos").show();
    });

    $("#btn_voltar_operadores_logicos").click(function () {
        $("#operadores_logicos").hide();
    });
    $("#btn_voltar_operadores_logicos").click(function () {
        $("#operadores_all").show();
    });



    /*BOTOES OBJETOS*/
    $("#btn_obj").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_obj").click(function () {
        $("#div-obj").show();
    });

    $("#btn_voltar_obj").click(function () {
        $("#div-obj").hide();
    });
    $("#btn_voltar_obj").click(function () {
        $("#div-inicio").show();
    });
    /*BOTOES PALAVRAS RESERVADAS*/
    $("#btn_p_reservadas").click(function () {
        $("#div-inicio").hide();
    });
    $("#btn_p_reservadas").click(function () {
        $("#div-p-reservadas").show();
    });

    $("#btn-voltar-p-reservadas").click(function () {
        $("#div-p-reservadas").hide();
    });
    $("#btn-voltar-p-reservadas").click(function () {
        $("#div-inicio").show();
    });
   

    /*VARIAVEIS*/

    $("#btn_variaveis").click(function () {
        $("#inicio").hide();
    });
    $("#btn_variaveis").click(function () {
        $("#variaveis").show();
    });
    $("#btn_voltar_2").click(function () {
        $("#variaveis").hide();
    });

    $("#btn_voltar_2").click(function () {
        $("#inicio").show();
    });

    /*tooltip */
    $('[data-toggle="tool_atribuicao"]').tooltip();

    $('[data-toggle="tool_soma"]').tooltip();
    $('[data-toggle="tool_subtracao"]').tooltip();
    $('[data-toggle="tool_multiplicacao"]').tooltip();
    $('[data-toggle="tool_divisao"]').tooltip();
    $('[data-toggle="tool_igual"]').tooltip();
    $('[data-toggle="tool_menor"]').tooltip();
    $('[data-toggle="tool_maior"]').tooltip();
    $('[data-toggle="tool_diferente"]').tooltip();

    /*TOPNAV*/
    $('#aparece_top').mouseover(function () {
        $('#topnavId').show();
    });
    $('#div-inicio').mouseout(function () {
        $('#topnavId').hide();
    });


});



	