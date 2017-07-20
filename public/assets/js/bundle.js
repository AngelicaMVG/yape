var cargarPagina = function() {
  tel.keydown(validacion);
  terms.click(validacion);
  continuar.click(request);
};
// Variables
var tel = $('#telefono');
var terms = $('#terminos');
var continuar = $('#btn-continuar');

var validacion = function() {
  var terminos = $('#terminos').is(':checked');
  //console.log(terminos)
  if (tel.val().length === 10 & terminos) {
    continuar.removeClass('disabled');
  } else {
    continuar.addClass('disabled');
  }
}

var api = {
  url: 'http://localhost:5000/api/registerNumber'
}

var request = function() {
localStorage.setItem('phone', response.data.phone);
 localStorage.setItem('codigo', response.data.code )
  $.post(api.url, {
    phone: tel.val(),
    therms: true
  }, function(response) {
    console.log(response.data);
    if(response.message == "Usuario válido"){

    }
})
};



$(document).ready(function() {
  cargarPagina();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
});
