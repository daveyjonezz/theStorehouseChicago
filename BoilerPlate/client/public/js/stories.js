
let imageToggle = true
  
$(document).on("click",".bioImage-1", function(){
  if (imageToggle && $(window).width() >= 990) {
    $(".second").fadeOut("medium");
    $(".third").fadeOut("medium", function(){
    $(".story1").fadeIn("slow");
  });
  imageToggle = false
  } else {
    $(".story1").fadeOut("medium", function(){
      $(".second").fadeIn("slow")
      $(".third").fadeIn("slow")
    });
    imageToggle = true
  }
})

$(document).on("click",".bioImage-2", function(){
  if (imageToggle && $(window).width() >= 990) {
    $(".first").fadeOut("slow")
    $(".third").fadeOut("slow", function(){
      $(".story2").fadeIn();
    })
    imageToggle = false
    } else {
      $(".story2").fadeOut("medium", function(){
        $(".first").fadeIn("slow")
        $(".third").fadeIn("slow")
      });
      imageToggle = true
    }
})

$(document).on("click",".bioImage-3", function(){
  if (imageToggle && $(window).width() >= 990) {
    $(".second").fadeOut("medium")
    $(".first").fadeOut("medium", function(){
      $(".story3").fadeIn();
    })
    imageToggle = false
    } else {
      $(".story3").fadeOut("medium", function(){
      $(".second").fadeIn("slow")
      $(".first").fadeIn("slow")
    })
    imageToggle = true
  }
})