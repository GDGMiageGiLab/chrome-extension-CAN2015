$(function(){
    $.getJSON('https://can-2015.appspot.com/_ah/api/can/v1/matches/group/all', function(data){
        $('#main-container').html('<p></p>');
        $.each(data.matches_results, function(index, group){
            var html = '<h3 class="article-title">' + group.group_name + ' </h3>';
            html += '<table class="place-table">';
            $.each(group.matches, function(intern_index, match){
                html += '<tr class="place-row"> <td>' + match.teams[0].name + '</td>  <td>' + match.scores[0].value + '</td> <td> -        ' + match.scores[1].value + '</td> <td>' + match.teams[1].name + '</td> </tr>'
            });
            html += '</table>';
            $('#main-container').append(html);
        });
    });
});