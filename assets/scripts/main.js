/**
 * The document ready event executes already when the HTML-Document is loaded
 * and the DOM is ready, even if all the graphics haven't loaded yet.
 */
$(document).ready(function() {

  /**
   * Toggle `header-nav` visibility, via hamburger menu
   */
  $('#header-hamburger').click(function(event) {
    event.preventDefault();
    $('#header-nav').toggleClass('is-small-hidden');
  });

  /**
   * Add/remove `is-active` class for `js-nav-main-link` items
   */
  function removeAllIsActive(selector) {
    $(selector).each(function() {
      $(this).removeClass('is-active');
    });
  }

  $('.js-nav-main-link').click(function(event) {
    event.preventDefault();
    // Remove all `is-active` classes
    removeAllIsActive('.js-nav-main-link');
    // Add `is-active` class to clicked item only
    $(this).addClass('is-active');
  });

});


/**
 * The window load event executes a bit later when the complete page
 * is fully loaded, including all frames, objects and images.
 */
// $(window).load(function() {
  // Your code here...
// });
