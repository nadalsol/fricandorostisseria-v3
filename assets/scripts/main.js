/**
 * The document ready event executes already when the HTML-Document is loaded
 * and the DOM is ready, even if all the graphics haven't loaded yet.
 */
$(document).ready(function() {

  /**
   * Toggle `header-nav` menu
   */
  $('#header-hamburger').click(function(event) {
    event.preventDefault();
    $('#header-nav').toggleClass('is-small-hidden');
  });
  
});


/**
 * The window load event executes a bit later when the complete page
 * is fully loaded, including all frames, objects and images.
 */
// $(window).load(function() {
  // Your code here...
// });
