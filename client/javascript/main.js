/**
 * Created by Nazariy.Banakh on 05.02.2015.
 */
var btnSendEmail = $(".btn-open"),
    sectionFormEmail = $('.section-form-email'),
    sectionServicesBox = $('.section-services-box'),
    sendEmailForm = $("#sendEmailForm"),
    inputText = $(".input-text"),
    resultsBox = $("#results");


$(function(){

  btnSendEmail.on('click', function(){
    sectionFormEmail.toggleClass('open');
  });
  // Change name button
  inputText.focusin(function(){
    btnSendEmail.addClass('write-text');
  });
  inputText.focusout(function(){
    btnSendEmail.removeClass('write-text');
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


  function trimSpaces(){
    var s = inputText.val();
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
    s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");
    inputText.val(s);
  }

  btnSendEmail.removeAttr("disabled");
  inputText.keyup(function(){
    trimSpaces();
    //Validate your form here, example:
    var validated = true;
    if(inputText.val().length === 0) validated = false;

    //If form is validated enable form
    if(validated) {
        btnSendEmail.removeAttr("disabled");
        btnSendEmail.html(btnSendEmail.data("target"));
      }else{
        btnSendEmail.html(btnSendEmail.attr("title"));
    }
  });

// Send email
  sendEmailForm.submit(function( event ) {
    btnSendEmail.attr("disabled", "disabled");

    if(!sectionFormEmail.hasClass("open")){

      // Stop form from submitting normally
      event.preventDefault();

        var $form = $(this),
            term = $.trim($form.find("input[name='email_or_tel']").val()),
            url = $form.attr("action");

        var posting = $.post( url, { email_or_tel: term } );

        posting.done(function() {
          sectionServicesBox.removeClass('open');
          btnSendEmail.attr("disabled", "disabled");
          btnSendEmail.html(btnSendEmail.data("toggle"));
          setTimeout(function(){
            btnSendEmail.removeAttr("disabled");
            sectionFormEmail.find('form')[0].reset();
            btnSendEmail.html(btnSendEmail.attr("title"));
          },10000);
        });
    }
    else{
      // Stop form from submitting normally
      event.preventDefault();
      //sectionFormEmail.find('form')[0].reset();

      // Mobile
      if( $(document).width() <= 870){
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $(this),
          term = $form.find("input[name='email_or_tel']").val(),
          url = $form.attr("action");

        // Send the data using post
        var posting = $.post( url, { email_or_tel: term } );

        // Put the results in a div
        posting.done(function() {
          sectionServicesBox.removeClass('open');
          btnSendEmail.html(btnSendEmail.data("toggle"));
          btnSendEmail.attr("disabled", "disabled");
          inputText.hide();

          setTimeout(function(){
            btnSendEmail.removeAttr("disabled");
            sectionFormEmail.find('form')[0].reset();
            btnSendEmail.html(btnSendEmail.attr("title"));
            inputText.show();
          },10000);
        });
      }
    }
  });
});


