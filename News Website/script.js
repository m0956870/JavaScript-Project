let fullLink =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=6d7d07cf73134f49a7893069208b4920";
let key = "6d7d07cf73134f49a7893069208b4920";

async function fetchLink() {
  let response = await fetch(fullLink);
  let data = await response.json();
  // console.log(data);
  console.log(data.articles);
  
  // console.log(data.articles[0]);
  // console.log(data.articles[0].title);
  // console.log(data.articles[0].description);
  // console.log(data.articles[0].urlToImage);

  // document.querySelector('.image').src = `${data.articles[0].urlToImage}`;
  // document.querySelector('.heading').innerHTML = `${data.articles[0].title}`;
  // document.querySelector('.description').innerHTML = `${data.articles[0].description}`

  let addNew = () => {
    for (let i = 0; i <= 20; i++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("articles");
      newDiv.innerHTML = `<div class="heading">${data.articles[i].title}</div>
                        <img class="image" src="${data.articles[i].urlToImage}" alt="img" />
                        <div class="description">${data.articles[i].description}</div>
                        `;
      document.querySelector(".section").appendChild(newDiv);
    }
  };
  addNew();
}
fetchLink();
