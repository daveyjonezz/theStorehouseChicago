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

  $(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

AOS.init();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});