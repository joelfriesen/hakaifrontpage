
  jQuery(document).ready(function($) {
    var $window = $(window);
    //-------------------------------------------
    // Timeline - fire if in view
    //-------------------------------------------

    function timeline() {
    var items = document.querySelectorAll(".timeline li");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 120 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
          else {
            items[i].classList.remove("in-view");
          }
        }
      }
      window.addEventListener("scroll", callbackFunc);

    }
    $window.on('scroll resize', timeline);
  });