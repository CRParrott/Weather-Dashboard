//This function uses the city typed in to call the api
$("#search-form").on("submit", function(event) {
    event.preventDefault()
    
    var searchInput = $("#search-input").val();

    console.log(searchInput);

    searchCity(searchInput)
});

function searchCity(searchInput) {
    var apiKey = "1730c9943ea62e56c9d2f25373fe95ea";
    var q = searchInput;
    var query1 = "https://api.openweathermap.org/data/2.5/weather?q=" +q +"&appid="+apiKey+"units=imperial";
    
    $.ajax({
        url:query1,
        method:"GET"
    }).done (function(response) {
        console.log(response);
    });
}
