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
// getJSON('./api/users')
$(document).ready(function(){

  $('.carousel.carousel-slider').carousel({fullWidth: true});
});
