$(document).ready(function(){

    $(document).ready(function(){
        $("#botaoAbrir").click(function() {
            $("#menulateral").css("display", "block");
            $(".div-botao").css("margin-left", "250px")
        })
        $("#botaoFechar").click(function() {
            $("#menulateral").css("display", "none");
            $(".div-botao").css("margin-left", "0px")
        })
    })
    
    //2ª resolução
    // $("#botaoAbrir").click(function(){
    //     $("#menulateral").toggle() ///pode ser show()
    //     $(".div-botao").css("margin-left", "250px")
    // })
    
    // $("#botaoFechar").click(function(){
    //     $("#menulateral").hide()
    //     $(".div-botao").css("margin-left", "0px")
    // })

    



})



/* <div id="menulateral" class="menu-lateral">
<a id="botaoFechar" class="botao-fechar">×</a>
<a href="#">Sobre</a>
<a href="#">Serviços</a>
<a href="#">Clientes</a>
<a href="#">Contato</a>
</div>

<section class="div-botao">
<a id="botaoAbrir" class="botao-abrir">Abre o menu</a> */