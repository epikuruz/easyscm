// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$('delete_test_case').bind('ajax:success', function() {$(this).closest('tr').fadeOut();});


$(document).ready(function() {
  $("#message-form").ajaxForm({success: handleNewMessage});

  function handleNewMessage(response, statusText) {
    $("#messages").prepend(response).effect("highlight", {}, 1500);
  }
});