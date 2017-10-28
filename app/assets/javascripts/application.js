// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require moment



$(document).on('turbolinks:load', function(){
  $('.add_user').click(function(){
    $('.hidden_form').slideDown(400);
    $('#user_gamertag').focus();
  });

  $('button.remove_user').click(function() {
    $user_id = $(this).attr("data-user-id");
    if (confirm("Are you sure?")) {
      $.ajax({
        url: '/users/' + $user_id,
        type: 'DELETE'
      });
      $(this).parent().parent().slideUp();
    }
  });

  $('.add_cancel').click(function(){
    new_user_box = $(this).parent();
    new_user_box.slideUp(400);
  });
}); 