/*global $*/
$(document).ready(function(){
getQuote();
	function getQuote(){
		var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=<API KEY>&format=jsonp&lang=en&jsonp=?";
		$.getJSON(url,function(data){
			if (data.quoteAuthor === '') {
				data.quoteAuthor = 'Unknown';
			}
				$(".quote").html('"'+data.quoteText+'"');
				$(".author").html("-"+data.quoteAuthor);
		});
	};
		$("#tweet-quote").on("click", function(){
			window.open("https://twitter.com/intent/tweet");
		});
		$("#tumblr-quote").on("click", function(){
			window.open("https://www.tumblr.com/");
		});
		$("#new-quote").on("click",function(){
			getQuote();
		});
});
		