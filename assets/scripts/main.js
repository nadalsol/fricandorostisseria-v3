////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The document ready event executes already when the HTML-Document is loaded //
// and the DOM is ready, even if all the graphics haven't loaded yet.         //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var headerHamburger = document.getElementById("header-hamburger"),
    headerNav = document.getElementById("header-nav"),
    jsNavMainLink = document.getElementsByClassName("js-nav-main-link");

  /**
   * Toggle `header-nav` visibility, via hamburger menu
   */
  headerHamburger.addEventListener(
    "click",
    function (event) {
      event.preventDefault();
      headerNav.classList.toggle("is-small-hidden");
    },
    false
  );

  /**
   * Manage `is-active` state for `js-nav-main-link` items
   */
  function removeAllIsActive(selector) {
    // Remove all `is-active` classes
    Array.prototype.forEach.call(selector, function (el, i) {
      el.classList.remove("is-active");
    });
  }

  function addThisIsActive(el) {
    // Add `is-active` class to clicked item only
    el.classList.add("is-active");
    // Hide `header-nav`
    headerNav.classList.add("is-small-hidden");
  }

  // Main link 0
  jsNavMainLink[0].addEventListener(
    "click",
    function () {
      removeAllIsActive(jsNavMainLink);
      addThisIsActive(this);
    },
    false
  );

  // Main link 1
  jsNavMainLink[1].addEventListener(
    "click",
    function () {
      removeAllIsActive(jsNavMainLink);
      addThisIsActive(this);
    },
    false
  );

  // Main link 2
  jsNavMainLink[2].addEventListener(
    "click",
    function () {
      removeAllIsActive(jsNavMainLink);
      addThisIsActive(this);
    },
    false
  );

  /**
   * Manage `is-opaque` state for `header-nav`
   */
  function toggleIsOpaque() {
    var scrollTop = window.scrollY;
    if (scrollTop > 0) {
      headerNav.classList.add("is-opaque");
    } else {
      headerNav.classList.remove("is-opaque");
    }
  }

  window.onscroll = function () {
    toggleIsOpaque();
  };
});

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
// The window load event executes a bit later when the complete page          //
// is fully loaded, including all frames, objects and images.                 //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
// window.onload = function () {
//   var header = document.getElementById("header"),
//     headerHeight = header.offsetHeight,
//     spMedium = 25, // same as `$sp-medium` defined in `_variables.scss`
//     headerTotalHeight = headerHeight + spMedium,
//     jsNavMainLink = document.getElementsByClassName("js-nav-main-link");

//   /**
//    * Repositioner
//    *
//    * Prevents fixed `header` overlapping of target elements, repositioning
//    * the current scroll. Useful to link to specific sections of the page.
//    *
//    */
//   Repositioning via link click 0
//   jsNavMainLink[0].addEventListener(
//     "click",
//     function (event) {
//       var theTargetRef = this.getAttribute("href"),
//         theTarget = document.getElementById(theTargetRef.replace("#", "")),
//         theTargetTopPosition = theTarget.getBoundingClientRect(),
//         theTargetTopPositionOffset =
//           theTargetTopPosition.top + document.body.scrollTop;
//       event.preventDefault();
//       window.scrollTo(0, theTargetTopPositionOffset - headerTotalHeight);
//     },
//     false
//   );

//   // Repositioning via link click 1
//   jsNavMainLink[1].addEventListener(
//     "click",
//     function (event) {
//       var theTargetRef = this.getAttribute("href"),
//         theTarget = document.getElementById(theTargetRef.replace("#", "")),
//         theTargetTopPosition = theTarget.getBoundingClientRect(),
//         theTargetTopPositionOffset =
//           theTargetTopPosition.top + document.body.scrollTop;
//       event.preventDefault();
//       window.scrollTo(0, theTargetTopPositionOffset - headerTotalHeight);
//     },
//     false
//   );

//   // Repositioning via link click 2
//   jsNavMainLink[2].addEventListener(
//     "click",
//     function (event) {
//       var theTargetRef = this.getAttribute("href"),
//         theTarget = document.getElementById(theTargetRef.replace("#", "")),
//         theTargetTopPosition = theTarget.getBoundingClientRect(),
//         theTargetTopPositionOffset =
//           theTargetTopPosition.top + document.body.scrollTop;
//       event.preventDefault();
//       window.scrollTo(0, theTargetTopPositionOffset - headerTotalHeight);
//     },
//     false
//   );
// };
