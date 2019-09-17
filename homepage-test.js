let links = document.getElementsByClassName("nav-link");

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

//   $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});