async function getCovidapi() {
    let container = document.querySelector('.covid19')


    let jsondata = await fetch('https://api.covid19api.com/summary');
    // console.log(jsondata);

    let data = await jsondata.json();
    console.log(data);

    // console.log(data.Countries);
    // console.log(data.Countries[76].Country);             // India

    let country = data.Countries[76];
    console.log(country);

    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    let htmlData = `
     <h3 class="h3">COUNTRY: ${country.Country}</h3>
     <h4 class="h4">${date} ${time}</h4>
     <ul class="ul">
      <li>NewConfirmed: ${country.NewConfirmed}</li>
      <li>NewDeaths: ${country.NewDeaths}</li>
      <li>NewRecovered: ${country.NewRecovered}</li>
      <li>TotalConfirmed: ${country.TotalConfirmed}</li>
      <li>TotalDeaths: ${country.TotalDeaths}</li>
      <li>TotalRecovered: ${country.TotalRecovered}</li>
    </ul>
     `

     container.insertAdjacentHTML("afterbegin", htmlData);
}

getCovidapi();