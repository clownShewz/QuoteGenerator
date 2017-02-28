$(document).ready(function(){
    //console.log('ready!');
    getQuote();

    $('#getQuote').on('click',function(){
        getQuote();
    });


});

function getQuote(){
    var min = 1;
    var max = 20;

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+max+"&callback=",function(data){
        console.log(data);

        var randIndex = Math.floor((Math.random() * max-min) + min);
        console.log(randIndex);
        var quote = data[randIndex];
        const quoteText = JSON.stringify(quote.content).replace(/"|<p>|\\n/gi,'');
        const quoteAuthor = '-' + JSON.stringify(quote.title).replace(/"/gi,'');
        console.log(quote);
        $('#quoteAuthor').html(quoteAuthor);
        $('#quoteText').html(quoteText);
        $('#tweet').attr('href','https://twitter.com/intent/tweet?text=' + quoteText);

    });
}




