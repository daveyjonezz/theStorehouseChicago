window.$(".bioImage-1").on("click", function(){
  alert("Text: ");
});

let imageToggle = true
  
window.$(".bioImage-1").on("click", function(){
  if (imageToggle && $(window).width() >= 990) {
    window.$(".bioImage-2").fadeOut("medium");
    window.$(".bioImage-3").fadeOut("slow", function(){
    window.$(".story1").fadeIn("slow");
  });
  imageToggle = false
  } else {
    window.$(".story1").fadeOut("medium", function(){
      window.$(".bioImage-2").fadeIn("medium")
      window.$(".bioImage-3").fadeIn("slow")
    });
    imageToggle = true
  }
})

$(".bioImage-2").on("click", function(){
  if (imageToggle && $(window).width() >= 990) {
    $(".first").fadeOut("slow")
    $(".third").fadeOut("slow", function(){
      $(".story2").fadeIn("slow");
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

$(".bioImage-3").on("click", function(){
  if (imageToggle && $(window).width() >= 990) {
    $(".bioImage-2").fadeOut("medium")
    $(".bioImage-1").fadeOut("slow", function(){
      $(".story3").fadeIn("slow");
    })
    imageToggle = false
    } else {
      $(".story3").fadeOut("medium", function(){
      $(".bioImage-2").fadeIn("medium")
      $(".bioImage-1").fadeIn("slow")
    })
    imageToggle = true
  }
})