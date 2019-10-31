$(document).ready(function () {
    var date = moment().format('MMMM Do, YYYY')
    
    $("#submitBtn").on("click", function () {
        var cityInput = $("#cityInput").val()
        console.log(cityInput)
        var queryUrl = ("https://api.openweathermap.org/data/2.5/weather?appid=79e9ef0c9561ec71d553efe57a221f25&units=imperial&q=" + cityInput)

        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then (function (response) {

            console.log(response)

            $("#weatherBoxes").append("<div class= 'card'><div class = 'card-body'><h1>" + cityInput + " (" + date + ")</h1><img src = 'http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png'><div>Temp: " + response.main.temp + "&deg F </div><div>Humidity: " + response.main.humidity + "%</div><div>Wind Speed: " + response.wind.speed + "</div></div></div><br>")

        })
    })
})
    