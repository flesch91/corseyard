/**
 * Created by Nazariy.Banakh on 05.02.2015.
 */
var nameBtn = $('#btn-open');
var sectionFormEmail = $('.section-form-email');


nameBtn.on('click', function(){
  sectionFormEmail.toggleClass('open');
})

$(window).load(function() {
  console.log(1);
  $(".section-services-box").css('margin-top', '-49%');
});



