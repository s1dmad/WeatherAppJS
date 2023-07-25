const apiKEY = "7abbb407a8d8de64571cb836e8cf2769";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");

async function checkWeather(city){
    const response =await fetch(apiURL+ city +`&appid=${apiKEY}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }else{
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML =data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".pressure").innerHTML =data.main.pressure + "hPa";
        document.querySelector(".description").innerHTML =data.weather[0].description;
        

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

btn.addEventListener("click",()=>{
    checkWeather(search.value); 
})

addEventListener("keydown", (event) => {
  if(event.key==="Enter"){
    checkWeather(search.value)
  }
});

checkWeather(city);