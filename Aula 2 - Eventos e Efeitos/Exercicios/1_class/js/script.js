/*
  1. Mude o estilo do body para que a font-family seja "Arial, sans-serif"

  2. Preencha os spans do html utilizando JQuery, adicionando informações suas. 
  ATENÇÃO! As informações devem estar estar guardadas em variáveis!

  3. Imagine que você muda com frequencia de opinião sobre um dos seus filmes favoritos. 
  Sendo assim, crie uma variável "favDoMomento" com esse filme

*/
console.log('to aqui')

$(document).ready(function(){
    let nickname = "od"
    let cidade = "Guanabara"
    let favoritos = "space jam"

    $("body").css("font-family", "Arial, sans-serif")
    
    $("#nickname").text(nickname)
    $("#cidade").text(cidade)
    $("#favoritos").text(favoritos)
//3. selecione o h1 e altere seu texto para "sobre mim". Acrescente também a classe "titulo' para que ele 
  //fique bacanudo
    $("h1").text("Sobre mim")
//4. Adicione as classes 'list' e 'item-list' na lista e nos itens de lista, utilizando JQuery
    $("li").addClass("list")
    $("span").addClass("item-list")
//5. Adicionei uma classe errada! Suma com a classe 'wrongClass', utilizando JQuery
$("li").removeClass("wrongClass")

})