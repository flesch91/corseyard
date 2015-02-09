/**
 * Created by Nazariy.Banakh on 05.02.2015.
 */
var nameBtn = $('#btn-open'),
    sectionFormEmail = $('.section-form-email'),
    sectionServicesBox = $('.section-services-box'),
    sendEmailForm = $("#sendEmailForm"),
    resultsBox = $("#results");

$(function(){

  nameBtn.on('click', function(){
    sectionFormEmail.toggleClass('open');
  });

  $(window).load(function() {
    sectionServicesBox.css('margin-top', '-49%');
  });

// Add in cookie
  function setCookie(name, value, options) {
    options = options || {};

    var expires = options.expires;

    if (typeof expires == "number" && expires) {
      var d = new Date();
      d.setTime(d.getTime() + expires*1000);
      expires = options.expires = d;
    }
    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    var updatedCookie = name + "=" + value;

    for(var propName in options) {
      updatedCookie += "; " + propName;
      var propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += "=" + propValue;
      }
    }

    document.cookie = updatedCookie;
  }

// Write cookie
  function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

// Delete cookie
  function deleteCookie(name) {
    setCookie(name, "", { expires: -1 })
  }

// Send email
  sendEmailForm.submit(function( event ) {

    if(!sectionFormEmail.hasClass("open")){

      // Stop form from submitting normally
      event.preventDefault();

      if(!getCookie('send')){

        // Get some values from elements on the page:
        var $form = $(this),
          term = $form.find("input[name='email_or_tel']").val(),
          url = $form.attr("action");

        // Send the data using post
        var posting = $.post( url, { email_or_tel: term } );

        // Put the results in a div
        posting.done(function( html ) {
          resultsBox.show().append( html );

          setTimeout(function(){
            resultsBox.hide();
          }, 2000);

          setCookie('send',1,'expires');
        });
      }else{
        resultsBox.show().html('Sorry you sending email!');

        setTimeout(function(){
          resultsBox.hide();
        }, 2000);
      }

    } else{

      // Stop form from submitting normally
      event.preventDefault();
      sectionFormEmail.find('form')[0].reset();
    }
  });

});


