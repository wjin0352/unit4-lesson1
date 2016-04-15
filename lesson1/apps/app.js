$(function(){
  // getInput();
  $('#query').on('click', function(e) {
      e.preventDefault();
      var searchTerm = $('#input').val();
      getInput(searchTerm);
    });
  });

  function getInput(searchTerm) {
    var params = {
      s: searchTerm,
      r: 'json'
    };
    url = "http://www.omdbapi.com";

    $.getJSON(url, params, function(data) {
      showResults(data.Search);
    });
  }

  function showResults(results) {
    var html = "";
    $.each(results, function(idx, val) {
      html += '<p>' + val.Title + '</p>';
      $('#search-results').html(html);
    });
  }

