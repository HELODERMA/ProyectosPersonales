$(document).ready(function () {

    $("#submitCity").click(function () {
        return getWeather();
    });

});

function getWeather() {
    // const key = '26b196d1c04ecf94ed7cef30ed360fdd';
    var city = $("#city").val();

    if (city != "") {

        $.ajax({

            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&unit=metric" + "&APPID=26b196d1c04ecf94ed7cef30ed360fdd",
            type: "GET",
            datatype: "jsonp",
            success: function (data) {
                console.log(data);
                $("#showWeather").html(data);
            }

        });

    } else {
        $("#error").html("<div>La ciudad no puede estar vacia</div>")
    }

}