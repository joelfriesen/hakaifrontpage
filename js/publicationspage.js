
  jQuery(document).ready(function($) {
    var $window = $(window);
    //-------------------------------------------
    // Timeline - fire if in view
    //-------------------------------------------

    function pubmarker() {
    var items = document.querySelectorAll("section");
    var navmarker = document.querySelectorAll(".subnav ul li a");

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        var windowWidth = (window.innerWidth || document.documentElement.clientWidth);
        var vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
        var horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
        return (vertInView && horInView);
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            navmarker[i].classList.add("current");
          }
          else {
            navmarker[i].classList.remove("current");
          }
        }
      }
      window.addEventListener("scroll", callbackFunc);

    }
    $window.on('scroll resize', pubmarker);
  });