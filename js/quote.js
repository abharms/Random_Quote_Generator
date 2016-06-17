$(document).ready(function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $(".quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
});
  
})

$("button").click(function(){
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $(".quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
});
  
  
})