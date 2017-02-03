// ************************
//  smooth scroll
// ************************

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -50
        }, 1000);
        return false;
      }
    }
  });
});



// *************************
// fixed nav bar after scroll 
// *************************

$(function(){
  $('#nav').affix({
      offset: {
        top: $('header').height()
      }
  }); 
});




// *************************
// historyButton  
// *************************

$(function(){
  $(".historyReadMore").click(function () {
      $(this).text(function(i, text){
          return text === "Read More" ? "Minimize" : "Read More";
      })
   });
});



// ********************************
// navbar click outside to close  
// ********************************

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});