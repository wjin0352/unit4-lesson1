$(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    var searchTerm = $('.form-control').val();
    getInput(searchTerm);
  });
});

  function getInput(searchTerm) {
    var params = {
      part: 'snippet',
      key: 'AIzaSyAK5WLqNTz5OoBKBbNiJ8m4OnF5D-RLVXw',
      q: searchTerm
    };
    url = "https://www.googleapis.com/youtube/v3/search";

    $.getJSON(url, params, function(data) {
      showResults(data);
    });
  }

  function showResults(results) {
    var thumbnail_html = "";
    var data_arr = results.items;
    var youtube_url = "https://www.youtube.com/watch?v=";

    $.each(data_arr, function(idx, val){
      var url_id = val.snippet.thumbnails.medium.url.split('/')[4];
      var image_url = val.snippet.thumbnails.medium.url;
      thumbnail_html += '<a href=' + youtube_url + url_id +' target="_blank"><img src="'+ image_url + '" style="width:304px;height:228px;"></a>'
      // console.log(val.snippet.thumbnails.medium.url);
      console.log(val.snippet.thumbnails.medium.url.split('/')[4]);
      console.log(image_url);
    });
    $('#search-results').html(thumbnail_html);
  }
