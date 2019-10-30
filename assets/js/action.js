
$(document).ready(function () {
    var classes = " class = 'bg-white rounded p-3 justify-content-start mb-2'"
    var cityInput;
    var searchesArray = [{city: "Charlotte"}];

    getSearches();

    $("#submitBtn").on("click", function () {
        cityInput = $("#cityInput").val();

        if (cityInput === "") {
            // console.log("hi")
            return;
        } else {
            
            storeSearches(cityInput)
            getSearches();
        }
    })
    
    function storeSearches() {
        
        for(var j = 0; j < searchesArray.length + 1; j++) {
            console.log(searchesArray[j].city)
            if (searchesArray[j].city === cityInput) {
                return;
            } else {
                searchesArray.push({ city: cityInput })
                localStorage.setItem("searchHistory", JSON.stringify(searchesArray));
            }
        }
    }


    function getSearches() {
        var searchArray = JSON.parse(localStorage.getItem("searchHistory"));
        if (searchArray !== null) {
            console.log(searchArray)

            for (var i = 0; i < searchArray.length; i++) {
                $("#cityList").append("<div" + classes + ">" + "<a>" + searchArray[i].city + "</a>" + "</div>")
            }

        } else {
            return;
        }

    }
})