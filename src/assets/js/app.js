// var api = {
//   url:'http://localhost:3000/api/registerNumber'
// }
//
// function getJSON(url) {
//   return new Promise (function(resolve, error){
//     var ajax = new XMLHttpRequest();
//     ajax.open('GET',url)
//     ajax.send()
//     ajax.onreadystatechange = function(){
//       if(ajax.readyState == 4){
//         var response = JSON.parse(ajax.responseText)
//         resolve(response)
//       }
//     }
//   })
// }
// getJSON(api.url);

$(document).ready(function(){
  var $terminos = $('#terminos');

  $terminos.change(function(){
    $('#btn-continuar').addClass('disabled');
  })

  $('.carousel.carousel-slider').carousel({fullWidth: true});



});
