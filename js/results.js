$(function(){
    $.getJSON('https://can-2015.appspot.com/_ah/api/can/v1/results/group/all', function(data){
        $('#main-container').html('<p></p>');
        $.each(data.group_results, function(index, group){
            var html = '<h3 class="article-title">' + group.group_name + ' </h3>';
            html += '<table class="result-table">';
            html += '<tr> <th>Nom</th> <th>PTS</th> <th>BP</th> <th>BC</th> <th>DB</th> </tr>';
            $.each(group.results, function(intern_index, result){
                html += '<tr class="team-result-row"> <td>' + result.team.name + '</td>  <td>' + result.pts + '</td> <td>' + result.bp + '</td> <td>' + result.bc + '</td> <td>' + result.db + '</td> </tr>'
            });
            html += '</table>';
            $('#main-container').append(html);
        });
    });
});
