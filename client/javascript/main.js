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


// Send email

$( "#searchForm" ).submit(function( event ) {

  // Stop form from submitting normally
  event.preventDefault();

  // Get some values from elements on the page:
  var $form = $( this ),
    term = $form.find( "input[name='emailInput']" ).val(),
    url = $form.attr( "action" );

  // Send the data using post
  var posting = $.post( url, { emailInput: term } );

  // Put the results in a div
  posting.done(function( data ) {
    var content = $( data ).find( "#content" );
    $( "#result" ).empty().append( content );
  });
});
