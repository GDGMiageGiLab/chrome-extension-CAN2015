$(function(){
    $.getJSON('https://can-2015-news.appspot.com/_ah/api/can/v1/news/sites/RFI', function(data){
        $('#main-container').html('<p></p>');
        $.each(data.articles, function(index, article){
            var html = '<h3 class="article-title">' + article.title + ' </h3>';
            html += '<img src=" '+ article.thumbnail +' " alt="" class="article-img"/>';
            html += '<p class="article-description"> ' + article.description + ' </p>';
            html += '<hr />';
            $('#main-container').append(html);
        });
    });
});
