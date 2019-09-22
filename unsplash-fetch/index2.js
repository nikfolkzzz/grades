// use $ in js like in jq
const $ = document.querySelector.bind(document);
const searchBtn = $(".search-btn");

const findPic = e => {
  e.preventDefault();
  const searchValue = $(".inp").value;
  const clientId =
    "client_id=4b5187dd64cbb64c04647712d8a363faa0659cc94094c3d8e75c5bed23f54d21";
  const url = `https://api.unsplash.com/search/photos?${clientId}&query=${searchValue}`;

  const fetch = url =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) resolve(xhr);
          else reject(`status code ${xhr.status}`);
        }
      };

      xhr.open("GET", url, true);
      xhr.send();
    });

  fetch(url)
    .then(response => JSON.parse(response.response))

    .then(data => {
      console.log(data);
      let result = [];
      data.results.forEach(item => {
        result.push(`<img src = ${item.urls.small} width = 100/>`);
        console.log(result);
        $(".pic-container").innerHTML = result.join(" ");
      });
    })
    .catch(err => console.log("something goes wrong", err));
};

searchBtn.addEventListener("click", findPic);
