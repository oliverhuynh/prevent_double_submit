/**
 * @file
 *   Initialize user locking interface when click on buttons.
 */
(function($){
  Drupal.behaviors.prevent_double_submit = {
    attach: function(context) {
      if (Drupal.settings.pds_mode == 'include') {
        $('form').once('pds').filter(Drupal.settings.pds_include_or_exclude).prevent_double_submit();
      }
      else {
        $('form').once('pds').not(Drupal.settings.pds_include_or_exclude).prevent_double_submit();
      }
    }
  };
  
  
  // jQuery plugin to prevent double submission of forms
  jQuery.fn.prevent_double_submit = function() {
    $(this).on('submit',function(e){
      var $form = $(this);

      if ($form.data('pdsed') === true) {
        // Previously submitted - don't submit again
        console.log("[psd] prevent resubmit same form again");
        e.preventDefault();
      } else {
        // Mark it so that the next submit can be ignored
        $form.data('pdsed', true);
      }
    });

    // Keep chainability
    return this;
  };
})(jQuery);