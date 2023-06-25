// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

let mainSection = document.getElementById("data-list-wrapper");
let cardlist = document.createElement("div");
cardlist.setAttribute("class","card-list");
//cats display

async function getdata() {
  try {
    let response = await fetch(`${baseServerURL}/cats`);
    let data = await response.json();
    console.log(data);
    displaydata(data);
  } catch (error) {
    console.log(error);
  }
}

getdata();

function displaydata(data) {
  mainSection.textContent = "";
  cardlist.innerHTML="";
  data.forEach(function (elem) {
    let card_div = document.createElement("div");
    card_div.setAttribute("class", "card");
    card_div.setAttribute("data-id", elem.id);

    let cardimg = document.createElement("div");
    cardimg.setAttribute("class", "card-image");

    let image = document.createElement("img");
    image.src = elem.image;

    cardimg.append(image);

    let cardbody = document.createElement("div");
    cardbody.setAttribute("class", "card-body");

    let h3 = document.createElement("h3");
    h3.setAttribute("class", "card-item card-title");
    h3.innerHTML = elem.name;

    let card_des = document.createElement("div");
    card_des.setAttribute("class", "card-item card-description");
    card_des.innerHTML = elem.description;

    let card_add = document.createElement("div");
    card_add.setAttribute("class", "card-item card-additional");
    card_add.innerHTML = elem.cost;

    cardbody.append(h3, card_des, card_add);

    card_div.append(cardimg, cardbody);
    cardlist.append(card_div);
    mainSection.append(cardlist);
  });
}

let sortAtoZBtn = document.getElementById("sort-low-to-high");


let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");
let fetchEmployeesBtn = document.getElementById("fetch-employees");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];