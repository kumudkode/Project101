/* STEP 1: Ask the server for a random dog image
   Think of this like ordering food online - you send a request to the restaurant */
fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')

    /* STEP 2: The server sends back a package (response)
       We need to open/unpack it by converting JSON to JavaScript
       JSON is like a wrapped gift box, response.json() unwraps it */
    .then(response => response.json())

    /* STEP 3: Now we have the actual data (the unwrapped gift)
       The data looks like this: { message: "https://dog-image-url.jpg", status: "success" }
       data.message contains the actual image URL */
    .then(data => {
        
        /* STEP 4: Create a new <img> tag in JavaScript
           Like writing: <img> in HTML, but using JavaScript */
        const imageElement = document.createElement('img')
        
        /* STEP 5: Set where the image should load from
           Like writing: <img src="dog-url-here">
           data.message = "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" */
        imageElement.src = data.message
        
        /* STEP 6: Add description for screen readers (accessibility)
           Like writing: <img src="..." alt="random dog picture"> */
        imageElement.alt = 'random dog picture'
        
        /* STEP 7: Find the container on the page and put the image inside it
           - document.getElementById('img-container') finds: <section id="img-container">
           - appendChild() puts our new <img> inside that section
           Result: <section id="img-container"><img src="dog-url" alt="random dog picture"></section> */
        document.getElementById('img-container').appendChild(imageElement)
    })

/* SUMMARY:
   1. fetch() = "Hey server, give me a dog image!"
   2. .then(response.json()) = "Let me unwrap what you sent"
   3. .then(data) = "Now I can use the image URL you gave me"
   4. createElement('img') = "Create an <img> tag"
   5. imageElement.src = "Tell the <img> where to get the picture"
   6. appendChild() = "Put the <img> on the webpage so people can see it"
*/ 

// fetch() makes the API request

// First .then() converts JSON response to JavaScript object

// Second .then() processes the data

// createElement() creates new img element

// src sets the image URL from API response

// alt adds accessibility text

// appendChild() adds the image to the page