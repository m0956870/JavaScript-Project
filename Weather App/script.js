let fullLink =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f63c821107ae9adc3dce69165033a55e";

let key = "f63c821107ae9adc3dce69165033a55e";

let search = document.querySelector(".search-bar");

let btn = document.querySelector(".btn").addEventListener("click", () => {
  let city = search.value;
  console.log(city);

  let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  // console.log(link);

  // With XMLHttpRequest
  // let request = new XMLHttpRequest();
  // request.open('GET', link);
  // request.send();

  // Getting Data
  // request.addEventListener('load', function() {
  //     let data = this.responseText
  //     console.log(data);
  //     console.log(data.lon);
  // })

  // Fetch API with .then Method
  // let response = fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f63c821107ae9adc3dce69165033a55e')
  // .then(response => response.json())
  // .then(data => console.log(data));

  // With Async Await Method

  async function fetchLink() {
    let Response = await fetch(link);
    let data = await Response.json();
    console.log(data.weather);

    let displayWeather = () => {
        let { name, } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        console.log(name, icon,description, temp, humidity, speed)

        let newTemp = Math.round(temp / 12);
    

        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.temp').innerText = `${newTemp}°C`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector('.description').innerText = `${description}`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}`;
        document.querySelector('.speed').innerText = `Speed: ${speed}`;
    }
    displayWeather();
  }
  fetchLink();

  
});
