
$(document).ready(function () {
    var classes = " class = 'bg-white rounded p-3 justify-content-start mb-2'"
    var storageId = 0
    var cityInput;
    
    getSearches();
    
    $("#submitBtn").on("click", function () {
        cityInput = $("#cityInput").val();
        
        if (cityInput === "") {
            return;
        } else {
            storeSearches (cityInput)
            getSearches();
        }
    })
    
    function storeSearches (x) {
        
        // $("#cityList").append("<div" + classes + ">" + x + "</div>")
        
        localStorage.setItem("cityInput" + storageId, x);
        ++storageId;
        localStorage.setItem("currentIdNumber", storageId);
        $("#cityInput").val("");
        
    }
    
    
    function getSearches () {
        var searchId = JSON.parse(localStorage.getItem('currentIdNumber'))
        console.log(searchId)
        for(var i = 0; i<searchId; i++) {
            var searches = localStorage.getItem("cityInput" + i)
            $("#cityList").append("<div" + classes + ">" + searches + "</div>")
        }
    }
})