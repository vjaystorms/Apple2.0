$(".menu-btn").click(
  function toggle() {
    $(".menu-btn").toggleClass("open");
    $(".body").toggleClass("overflow");
    $(".cover").toggleClass("sliding-header");
    $(".menu").toggleClass("menu-2");
  })
