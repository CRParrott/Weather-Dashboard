function searchResults(resultObj){
    var city = resultObj.city;

    var resultDiv = document.createElement('h3');
    resultDiv.textContent = city;

    var resultContent = document.getElementById("city-result");
    resultContent.append(resultDiv);
}

$("#search-form").on("submit", function(event) {
    event.preventDefault()
    var searchInput = $("#search-input").val();

    console.log(searchInput);

    searchCity(searchInput)
});

function searchCity(searchInput) {
    $.ajax({
        url:"api.openweathermap.org/data/2.5/weather?q={city name}&appid=1730c9943ea62e56c9d2f25373fe95ea" + searchInput,
        method: "Get"
    }).then(function (apiResponse) {
        console.log(apiResponse);
        searchResults(apiResponse)
    })
}