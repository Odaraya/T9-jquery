/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão

  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração

  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
  
  */
 //liana -----
    // $(document).ready(function () {
    // const corpo = $('body')
    // $(botao).click(function changeBg() {

    //     if( $('body').css('backgroundColor', "")){
    //       $('body').css('backgroundColor' , 'purple')
    //       $('h1').text('Ligado')
    //       $(imagem).src('https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif')
    //     } else {
    //       $('body').css('backgroundColor' , 'yellow')
    //       $('h1').text('Desligado')
    //       $(imagem).src('https://media.giphy.com/media/1etQnLwa9EpdD4wTct/giphy.gif')
    //     }  
    //   
    // })
// $(document).ready(function () {
//   let bodyColor = $('body')
//   bodyColor.css('background', 'yellow')

//     $('body')
//     function changeBg(){
//       if(bodyColor[0].style.background == 'yellow'){
//         $('body').css('background', 'black');
//         $('h1')
//         .text('desligado')

//       }else{
// //incompleto!
//       }
//     }
// })
//incompleto!!!!
let conect =0
$('#botao').click(function(){
  if (conect === 0) {
    $('h1').text('desligado'),
    $('h1').css('color','white'),
    $('.imagem').attr('src','https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif')
    $('*').css('background','black'),
    conect = 1;
  } else{
    $('h1').text('ligado'),
    $('h1').css('color', 'black'),
    $('.imagem').attr('src','https://media.giphy.com/media/3K0yyx4XSPJOawee2e/giphy.gif'),
    $('*').css('background', 'white'),
    conect = 0;
  }
})