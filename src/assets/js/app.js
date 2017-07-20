// var api = {
//   url:'http://localhost:5000/api/registerNumber'
// }
//
//
//
// getJSON(api.url);
// var telefono = $('#telefono').val();
// var terminos = $('#terminos'),is(':checked');

//  function validarTel(telefono){
//
//   telefono.val().length ==10;
//   console.log(telefono)
//   return telefono;
// };
// var validarCheck = function (terminos) {
//   terminos.is(':checked');
//   return terminos;
// };

// var activarBtn = function () {
//   var telefono = $('#telefono').val();
//   var terminos = $('#terminos'),is(':checked');
//   var btn = $('#btn-continuar');
//   if(telefono === 10 & terminos) {
//     btn.removeClass('disabled');
//   } else {
//     btn.addClass('disabled');
//   }
// };

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
