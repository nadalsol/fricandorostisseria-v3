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
      this.classList.toggle("is-active");
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
      headerHamburger.classList.toggle("is-active");
    },
    false
  );

  // Main link 1
  jsNavMainLink[1].addEventListener(
    "click",
    function () {
      removeAllIsActive(jsNavMainLink);
      addThisIsActive(this);
      headerHamburger.classList.toggle("is-active");
    },
    false
  );

  // Main link 2
  jsNavMainLink[2].addEventListener(
    "click",
    function () {
      removeAllIsActive(jsNavMainLink);
      addThisIsActive(this);
      headerHamburger.classList.toggle("is-active");
    },
    false
  );
});
