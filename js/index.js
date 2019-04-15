$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").addClass("navbar-top");
  else
    $(".navbar").removeClass("navbar-top");
});

var s = skrollr.init();