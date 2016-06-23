$(document).ready(function(){
     //get quote from random quote API
      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      //append quote and author to document
      $(".quote").append(a[0].content + "<p>&mdash; " + a[0].title + "</p>")

      //initiate twitter button function
      window.twttr = (function (d,s,id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
        js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
        }(document, "script", "twitter-wjs"));



      //insert tweet button
      insertTweetBtn();
    });
}); 

$("a").click(function(){
      //get quote from random quote API
      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      //replace HTML with newly generated quote
      $(".quote").html(a[0].content + "<p>&mdash; " + a[0].title + "</p>")
      //remove contents of tweet button div
      $("#twtbtn").empty();
      //insert new tweet button to grab newly generated quote
      insertTweetBtn();
    });
 }); 

  

function insertTweetBtn() {
    var msg = document.getElementById('msg').textContent;
    twttr.ready(function (twttr) {
            twttr.widgets.createShareButton(
                '',
                document.getElementById('twtbtn'),
                function (el) {
                    console.log("Button created.")
                },
                {
                    text: msg ,  
                }
            );
            twttr.events.bind('tweet', function (event) {
                console.log(event, event.target);
            });
        });

}





 
  
  





    