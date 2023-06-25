// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //



let mainSection = document.getElementById("data-list-wrapper");

let sortAtoZBtn = document.getElementById("sort-low-to-high");


let sortZtoABtn = document.getElementById("sort-high-to-low");

let fetchRecipesBtn = document.getElementById("fetch-recipes");
let fetchEmployeesBtn = document.getElementById("fetch-employees");

let filterLessThan50Btn = document.getElementById("filter-less-than-50");
let filterMoreThanEqual50Btn = document.getElementById("filter-more-than-equal-50");

let catsData = [];

let catUrl = `${baseServerURL}/cats`
let resUrl =`${baseServerURL}/recipes`

async function fetchCat(){
  try{
    let res = await fetch(catUrl)
    let catData = await res.json()
    catsData = catData
    console.log(catData)
    displayCat(catData)
  }
  catch(err){
    console.log(err)
  }
}
fetchCat()

function displayCat(data){
  mainSection.innerHTML =""  
  
  data.map((ele) =>{


    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.setAttribute("data-id", `${ele.id}`)
   
    let cardImage = document.createElement("div")
    cardImage.setAttribute("class", "card-image")
    

    let image = document.createElement("img")
    image.src = `${baseServerURL}/${ele.image}`
    cardImage.append(image)

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")

    let title = document.createElement("h3")
    title.setAttribute("class", "card-item card-title")
    title.textContent = ele.name

    let description = document.createElement("div")
    description.setAttribute("class", "card-item card-description")
    description.textContent = ele.description


    let info = document.createElement("div")
    info.setAttribute("class", "card-item card-additional-info")
    info.textContent = ele.cost


  
    cardBody.append(title,description,info)
    
    
    card.append(cardImage,cardBody)
   
    mainSection.append(card)
  })
}

sortAtoZBtn.addEventListener("click", sortAZ)

async function sortAZ(){
  try{
    let res = await fetch(`${catUrl}?_sort=cost&_order=asc`)
    let catData = await res.json()
    console.log(catData)
    displayCat(catData)
  }
  catch(err){
    console.log(err)
  }
}


sortZtoABtn.addEventListener("click", sortZA)

async function sortZA(){
  try{
    let res = await fetch(`${catUrl}?_sort=cost&_order=desc`)
    let catData = await res.json()
    console.log(catData)
    displayCat(catData)
  }
  catch(err){
    console.log(err)
  }
}

fetchRecipesBtn.addEventListener("click", resFun)
async function resFun(){
  try{
    let res = await fetch(resUrl)
    let catData = await res.json()
    console.log(catData)
    displayRes(catData)
  }
  catch(err){
    console.log(err)
  }
}

filterLessThan50Btn.addEventListener("click", lessThan50)

function lessThan50(){
  let lessThan = catsData.filter((ele) => ele.cost <50)
  displayCat(lessThan)
}

filterMoreThanEqual50Btn.addEventListener("click", moreThane150)

function moreThane150(){
  let morethe = catsData.filter((ele) => ele.cost >= 50)
  displayCat(morethe)
}




function displayRes(data){
  mainSection.innerHTML =""  
  
  data.map((ele) =>{
    let cardList = document.createElement("div")
    cardList.setAttribute("class", "card-list")
    
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.setAttribute("data-id", `${ele.id}`)
   
    let cardImage = document.createElement("div")
    cardImage.setAttribute("class", "card-image")
    

    let image = document.createElement("img")
    image.src = `${baseServerURL}/${ele.image}`
    cardImage.append(image)

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")

    let title = document.createElement("h3")
    title.setAttribute("class", "card-item card-title")
    title.textContent = ele.name

    let description = document.createElement("div")
    description.setAttribute("class", "card-item card-description")
    description.textContent = ele.price


    let info = document.createElement("div")
    info.setAttribute("class", "card-item card-additional-info")
    info.textContent = ele.cost


  
    cardBody.append(title,description,)
    
    
    card.append(cardImage,cardBody)
    cardList.append(card)
    mainSection.append(cardList)
  })
}

// emp**********
 let empUrl =`${baseServerURL}/employees`
fetchEmployeesBtn.addEventListener("click", EmpFun)
async function EmpFun(){
  try{
    let res = await fetch(empUrl)
    let catData = await res.json()
    console.log(catData)
    displayEmp(catData)
  }
  catch(err){
    console.log(err)
  }
}

function displayEmp(data){
  mainSection.innerHTML =""  
  
  data.map((ele) =>{
    let cardList = document.createElement("div")
    cardList.setAttribute("class", "card-list")
    
    let card = document.createElement("div")
    card.setAttribute("class", "card")
    card.setAttribute("data-id", `${ele.id}`)
   
    let cardImage = document.createElement("div")
    cardImage.setAttribute("class", "card-image")
    

    let image = document.createElement("img")
    image.src = `${baseServerURL}/${ele.image}`
    cardImage.append(image)

    let cardBody = document.createElement("div")
    cardBody.setAttribute("class", "card-body")

    let title = document.createElement("h3")
    title.setAttribute("class", "card-item card-title")
    title.textContent = ele.name

    let description = document.createElement("div")
    description.setAttribute("class", "card-item card-description")
    description.textContent = ele.salary
    
    let btn = document.createElement('a')
    btn.setAttribute("class","card-item card-link")
    btn.setAttribute("data-id",`${ele.id}`)
    btn.setAttribute("data-id",`${ele.name}`)
    btn.textContent = "Greet"
    btn.addEventListener("click", ()=>{
      greetFun(ele)
    })
    

    cardBody.append(title,description,btn)
    
    
    card.append(cardImage,cardBody)
    cardList.append(card)
    mainSection.append(cardList)
  })
}

function greetFun(eve){
  alert(eve.name)
}