$(function(){
  // getInput();
  $('form').on('submit', function(event) {

      // var result = event.which;
      // when i put preventDefault here, the input box stopped working.
      // if (result == 13) {
        event.preventDefault();
        var searchTerm = $('#input').val();
        console.log(searchTerm);
        getInput(searchTerm);
      // };
  // $('#input').on('click', function(event) {
  //   var searchTerm = $('#input').val();
  //   console.log(searchTerm);
  //   getInput(searchTerm);
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
      console.log(data);
      d = data;
      showResults(data);
      console.log(data);
    });
  }

  function showResults(results) {
    var html = "";
    console.log(results);
  }
