$(document).ready(function() {
    $("#nextQuote").on("click", function() {
        $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
            $("#quote").html(json.quoteText);
            $("#author").html(json.quoteAuthor);

            $(".twitter-share-button").on("click", function() {
                var _href = $(".twitter-share-button").attr("href");
                $(".twitter-share-button").attr("href", _href + json.quoteText + " - " + json.quoteAuthor);
            });
        });
    });
});
