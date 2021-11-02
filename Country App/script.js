let container = document.querySelector('.container');

    let label = document.querySelector('.label');
    let input = document.querySelector('.input');
    // let country = 'canada'
    // console.log(country);
    
    // let link =  `https://restcountries.eu/rest/v2/name/${country}`;

    let btn = document.querySelector('.btn').addEventListener('click', () =>{
      // console.log(input.value);

      let newCountry = input.value;
      console.log(newCountry);

      let country = newCountry;
      console.log(country);

      let link =  `https://restcountries.eu/rest/v2/name/${country}`;
      console.log(link);

      // sending request
    let request = new XMLHttpRequest();
    request.open('GET', link)
    request.send();

    // getting response

    request.addEventListener('load', function () {
        console.log(this.responseText);
        let [data] = JSON.parse(this.responseText)        // to convert in Object
        console.log(data);
         let htmlData = `
         <div id="id-card">
              <article class="card">
                <div class="card-body">
                  <img src="${data.flag}" alt="flag" class="card-body-img">
                  <h3 class="card-body-title">${data.name} <span></span>
                  </h3>
                  <h6 class="card-body-text"> Capital : ${data.capital}</h6>
                </div>

                <div class="card-footer">
                  <div class="card-footer-social">
                    <h5>${data.nativeName}</h5>
                    <h6>Native Lang</h6>
                  </div>
                  <div class="card-footer-social">
                    <h5>${data.population}</h5>
                    <h6>Population</h6></div>
                  <div class="card-footer-social">
                    <h5>${data.demonym}</h5>
                    <h6>Demonym</h6>
                  </div>
                </div>
              </article>
            </div>
         `

         container.insertAdjacentHTML("beforebegin", htmlData);
         input.value = "";

         
    })
    });

    

    