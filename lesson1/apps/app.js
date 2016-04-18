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

    // items.snippet.thumbnails.medium.url
    $.getJSON(url, params, function(data) {
      showResults(data);
      d = data;
    });
  }

  function showResults(results) {
    var html = "";
    var data_arr = results.items;

    $.each(data_arr, function(idx, val){
      console.log(val.snippet.thumbnails.medium.url);

      console.log(val.snippet.title);
    });
    // console.log(data_arr);
  }
