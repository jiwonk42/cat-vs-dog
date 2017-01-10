$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#dogSays").prepend("<li>Woof</li>");
    $("ul#catSays").prepend("<li>Meow</li>");
  });
  $("button#cat").click(function() {
    $("ul#catSays").prepend("<li>Meow</li>");
    $("ul#dogSays").prepend("<li>Woof</li>");
  });
});
