
const images = [11,12,13,14,15,16,17,18,19,28,29,35,37,41,43,54,58,59,62,68,70,69,71,72,84,93,94,95,106,107,108,109,110,123,125,126,127,128,147,164,165,166,167,168,176,178,179,182,190,191,218,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,238,242,243,249,251];


// var random = Math.floor(Math.random() * images.length);
// var img = document.body;
// function displayImg() {
//   img.style.backgroundImage = "url(" + images[random] + ")";
// }

let weather = {
  apiKey : "f6ed4e8e6b9b4f6d724d88c7735c6094",
  fetchWeather : function(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city +
     "&appid="
      + this.apiKey + "&units=metric")
    .then(res => res.json())
    .then(data => this.displayWeather(data));
  },

  displayWeather : function(data) {


    const cityName = data.name;
    const temp = data.main.temp;
    const discription  = data.weather[0].description;
    const icon = data.weather[0].icon;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    var randomImages = Math.floor(Math.random() * images.length);
    console.log(randomImages);
    let imgUrl = "https://picsum.photos/id/" +  images[randomImages]  + "/1600/800";
    document.querySelector("body").style.backgroundImage = "url(" + imgUrl + ")";
    document.querySelector(".city").innerHTML = "Weather in " + cityName;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".humidity").innerHTML = "Humidity : " + humidity + "%";
    document.querySelector(".wind-speed").innerHTML = "Wind Speed : " + windSpeed + " km/hr";
    document.querySelector(".weather").classList.remove("loading");
    document.querySelector(".weather").classList.remove("wide");

  },
  weatherSearch : function() {
    this.fetchWeather((document.querySelector("#text").value));
  },
};

document.querySelector(".btn").addEventListener("click"  , function() {
  weather.weatherSearch();
});

document.querySelector(".search").addEventListener("keyup" , function(e) {
  if(e.key === "Enter") {
    weather.weatherSearch();
  }
})
