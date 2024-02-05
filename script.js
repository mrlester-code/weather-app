// Variables holding the key and the link for the API
const apiKey = "&appid=e069960c3b1c90dcada79b902adc6f0f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
//Variables to look for the clicks on the HTML page
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + apiKey);
  //Error message if there is a misspelled country/city  
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    
    var data = await response.json();

    //console.log(data);
//Since we were printing the information on the console, now we basically look inside the information that The API give us
//format to what aspects we want (metric)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    //Define all the weathers and images
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
//Since everything is locked we just need to read the click to show the values
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
