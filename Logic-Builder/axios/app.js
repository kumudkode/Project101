//axios is a library used to make HTTP requests
//internally uses fetch() but has a simpler syntax and more features
//to use axios, we need to include it in our project
//we can use a CDN or install it via npm
//here we will use a CDN
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> in html

let p = document.querySelector("p");
let btn = document.querySelector("button");

//this returns a promise
// btn.addEventListener("click", () => {
//     let spell = getSpells();
//     console.log(spell[0].name); //undefined because promise is not resolved yet
// })

//to get actual data, we need to use async-await
btn.addEventListener("click", async () => {
  let spell = await getSpells();
  p.innerText = spell[Math.floor(Math.random()*77)].name; //displaying spell name at random index
});

//api url
let url = "https://hp-api.onrender.com/api/spells";

//async function to fetch data from api using get method of axios
async function getSpells() {
  try {
    let response = await axios.get(url);
    console.log(response);

    //in fetch(), we had to do response.json() to get exact json data
    //axios already gives you parsed JSON using response.data, so no need to use json()
    let data = response.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

getSpells();


//send headers with api request using axios
let url2="https://icanhazdadjoke.com/";
let config = { headers: { Accept: "application/json" } }
let joke = async () => {
    let response=await axios.get(url2, config);
    console.log(response.data.joke);
};
joke();