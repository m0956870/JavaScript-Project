let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");

btn.addEventListener("click", () => {
  let li = `<li class="list-item">${input.value}<button class="delete">×</button></li>`;
  list.insertAdjacentHTML("beforeEnd", li);

  input.value = "";

  // let listItem = document.querySelector('.list-item');
  // let delBtn = document.querySelector('.delete');

  list.addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log(e.target.parentNode);
    e.target.parentNode.remove();
  });
});
