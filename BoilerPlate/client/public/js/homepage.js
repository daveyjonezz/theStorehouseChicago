$( document ).ready(function() {

let links = document.getElementsByClassName("nav-link");

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(3500)
    .next()
    .fadeIn(3500)
    .end()
    .appendTo('#slideshow');
},  3500);

$("#slideshow2 > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow2 > div:first')
    .fadeOut(3000)
    .next()
    .fadeIn(3000)
    .end()
    .appendTo('#slideshow2');
},  3000);
// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) { 
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  $(".navbar-brand").on("click", function(){
    for (let i = 0; i < links.length; i++) {
          let current = document.getElementsByClassName("active");
          // Remove active class
          if (current.length > 0) { 
            current[0].className = current[0].className.replace(" active", "");
          }
        };
  })

  $(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

})