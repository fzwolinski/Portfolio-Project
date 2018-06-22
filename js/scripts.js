jQuery('a[href^="#"]').click(function(e) {
  var a;
  if(this.hash == '#about-me-header') a = 50;
  else if(this.hash == '#portfolio-header') a = 100;
  else if(this.hash == '#skills-header') a = 100;
  else if(this.hash == '#contact-header') a = 0;
  else if(this.hash == '#main-page') a = 0;
  jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top-a}, 1000);

  if(window.innerWidth < 576)  $('.navbar-toggler-icon').click();

  return false;
  e.preventDefault();
});