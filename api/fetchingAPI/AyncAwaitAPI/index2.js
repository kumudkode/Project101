const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random') // top level bodies 
const data = await response.json()                                                       // top level bodies


//SyntaxError: await is only valid in async functions and the top level bodies of modules 
// top level bodies are those that are outside of any scope and top of all js code 
// but we always use it inside a function 

const imageElement = document.createElement('img')
imageElement.src = data.message
imageElement.alt = 'random dog picture'
document.getElementById('img-container').appendChild(imageElement)


console.log(data)

// fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data)) 