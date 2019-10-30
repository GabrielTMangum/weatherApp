$(document).ready(function () {
    var cityInput = $("#cityInput").val()
    var queryUrl = "api.openweathermap.org/data/2.5/weather?appid=09dd0bebd4d550456ba64ad6cd823b00&q=" + cityInput

     $("#submitBtn").on("click", function getWeather () {

        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).then (function (response) {

            $("#weatherBoxes").append("<div class= 'card'><div class = 'card-body'><h1>" + cityInput + "</h1></div></div><br>")

        })
    })
})
    