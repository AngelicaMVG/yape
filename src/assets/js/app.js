var cargarPagina = function() {
  tel.keydown(validacion);
  terms.click(validacion);
  continuar.click(generarCodigo);
  inputCodigo.keyup(registrarCodigo);
};
// Variables
var tel = $('#telefono');
var terms = $('#terminos');
var continuar = $('#btn-continuar');
var inputCodigo = $('#codigo');

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
  url: 'http://localhost:5000/api/registerNumber',
  codigo: 'http://localhost:5000/api/resendCode'
}

var generarCodigo = function() {
  $.post(api.url, {
    phone: tel.val(),
    terms: true
  }, function(respon) {
    // console.log(respon);
    if(respon.message === "Usuario válido"){
      localStorage.setItem('code', respon.data.code );
      localStorage.setItem('phone', respon.data.phone);
      alert(respon.data.code);
    } else {
      alert(respon.message);
    }
})
};

var registrarCodigo = function () {
  var codigo = localStorage.getItem('code');
  console.log(codigo);
  console.log(inputCodigo.val());
    if(inputCodigo.val() == codigo) {
      location.href = 'crear-usuario.html';
    }
  }



// var registrarCodigo = function () {
// var inputCodigo = $('#codigo');
// $.post(api.codigo,{
//   phone: teleCatch,
//   code: codigo
// }, function(res) {
//     if ( inputCodigo.val() == codigo) {
//       var codigo =  localStorage.setItem('code', respon.data.code );
//       var teleCatch = localStorage.setItem('phone', respon.data.phone);
//       location.href = 'crear-usuario.html';
//     } else {
//       alert(res.message);
//     }
// })
// };





$(document).ready(function() {
  cargarPagina();
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
});
