const apiKey = "67b901a7ecf1adbd33caf6cb370430b0";

const btn = document.querySelector(".btn");
const city   = document.querySelector("input");


async function getWeather(city){
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        const temp = document.querySelector(".temp");
        const cityE1 = document.querySelector(".cityE1")
        const weatherE1 = document.querySelector(".weatherE1");
        const windE1 = document.querySelector(".windE1");

        temp.textContent = `Temp: ${data.main.temp} celceus`;
        cityE1.textContent =`City: ${data.name}`;
        weatherE1.textContent = `Weather: ${data.weather[0].description}`;
        windE1.textContent = `Wind: ${data.wind.speed}km/hr`;

    }catch(error){
        console.log("Error:" , error);
    }
}

btn.addEventListener("click" , function(){
    const cityName = city.value;
    getWeather(cityName);
});