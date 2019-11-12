assignButton();

function assignButton()
{
  var button = document.getElementById("submitButton");
  button.addEventListener("click", poster);
}

function poster(event)
{
  event.preventDefault();
  var req = new XMLHttpRequest();

  var cityName = document.getElementById("cityBox");
  console.log(cityName.value);
  var countryId = document.getElementById("countryBox");
  console.log(countryId.value);
  var payload;
  payload = "http://api.openweathermap.org/data/2.5/weather?q="
            + cityName.value +","+ countryId.value
            + "&appid=172d38b22d297832b6c93682ee04d3e7";
  console.log(payload);
  req.open("GET", payload, true);
  req.addEventListener("load", function()
  {
    var response = JSON.parse(req.responseText);
    var citySpan = document.getElementById("citySpan");
    var tempSpan = document.getElementById("tempSpan");
    var humiSpan = document.getElementById("humiSpan");
    citySpan.textContent = response.name;
    tempSpan.textContent = response.main.temp;
    humiSpan.textContent = response.main.humidity;
      //This is where we put what to do with 'file/url' from above
  });
  req.send(null);
}
