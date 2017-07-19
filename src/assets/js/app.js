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

        // var condiciones = $("#terminos");
        // console.log(condiciones);
        // if(condiciones.is(':checked')){
        //   $('#btn-continuar').removeClass('disabled');
        // } else {
        //   $('#btn-continuar').addClass('disabled');
        // }

          $("#terminos").on('change', function(){
            $('#btn-continuar').removeClass('disabled');
          })
          


  $('.carousel.carousel-slider').carousel({fullWidth: true});



});
