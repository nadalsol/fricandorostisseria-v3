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
    function () {
      headerNav.classList.toggle("is-small-hidden");
      this.classList.toggle("is-active");
    },
    false
  );

  /**
   * Manage `is-active` state for `js-nav-main-link` items
   */
  function resetActiveLinks(selector) {
    // Remove all `is-active` classes
    Array.prototype.forEach.call(selector, function (el, i) {
      el.classList.remove("is-active");
    });
  }

  function setActiveLink(el) {
    // Add `is-active` class to clicked item only
    el.classList.add("is-active");
    // Hide `header-nav`
    headerNav.classList.add("is-small-hidden");
  }

  Array.prototype.forEach.call(jsNavMainLink, function (link) {
    link.addEventListener(
      "click",
      function () {
        resetActiveLinks(jsNavMainLink);
        setActiveLink(this);
        headerHamburger.classList.toggle("is-active");
      },
      false
    );
  });
});
