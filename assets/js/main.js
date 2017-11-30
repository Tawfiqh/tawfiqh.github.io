$(document).ready(function() {
//   console.log("Tawfiq is sfafjd cool");

  $( "#hide-teaser" ).click(function() {
    $('#teaser-background').addClass('animate').delay(2000).queue(
      function() {$(this).remove();}
    );

  });

});
