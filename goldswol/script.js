var req = new XMLHttpRequest();

function assignButton()
{
  var button = document.getElementById("submitButton");
  button.addEventListener("click", poster);
}

function poster()
{
  var cityName = document.getElementById("cityBox");
  var countryId = document.getElementById("countryBox");
  var payload;
  if (countryId !== "")
  {
    payload = "api.openweathermap.org/data/2.5/weather?q="
                  + cityName.textContent +","+ countryId.textContent
                  + "&appid=172d38b22d297832b6c93682ee04d3e7";
  } else {
    payload = "api.openweathermap.org/data/2.5/weather?q="
                  + cityName.textContent
                  + "&appid=172d38b22d297832b6c93682ee04d3e7";
  }
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
