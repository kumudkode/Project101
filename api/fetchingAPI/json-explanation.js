/* ============================================
   UNDERSTANDING JSON TO JAVASCRIPT CONVERSION
   ============================================ */

// WHAT IS JSON?
// JSON = JavaScript Object Notation
// It's a TEXT FORMAT (string) used to send data over the internet

// Example of JSON (it's just TEXT/STRING):
const jsonString = '{"name": "Buddy", "breed": "Golden Retriever", "age": 3}'
console.log(typeof jsonString) // Output: "string"
console.log(jsonString) // Output: {"name": "Buddy", "breed": "Golden Retriever", "age": 3}

// You CANNOT access properties from JSON string directly:
// console.log(jsonString.name) // ❌ This gives undefined because it's just text!


// ============================================
// HOW TO CONVERT JSON TO JAVASCRIPT OBJECT
// ============================================

// METHOD 1: Using JSON.parse() (manual way)
const jsObject = JSON.parse(jsonString)
console.log(typeof jsObject) // Output: "object"
console.log(jsObject.name) // ✅ Output: "Buddy" - Now we can access properties!
console.log(jsObject.breed) // ✅ Output: "Golden Retriever"


// ============================================
// WHAT HAPPENS IN fetch().then(response => response.json())
// ============================================

// When server sends data, it looks like this (JSON TEXT):
// '{"message": "https://dog-image.jpg", "status": "success"}'

// The response.json() method does TWO things:
// 1. Reads the JSON text from the response
// 2. Converts it to JavaScript object using JSON.parse()

// BEFORE response.json():
// response = '{"message": "https://dog-image.jpg", "status": "success"}' (TEXT)

// AFTER response.json():
// data = { message: "https://dog-image.jpg", status: "success" } (OBJECT)

// Now you can use: data.message ✅


// ============================================
// VISUAL COMPARISON
// ============================================

// JSON (String - sent over internet):
const jsonFromServer = '{"message": "https://dog.jpg", "status": "success"}'
console.log(jsonFromServer[0]) // Output: "{" - it's just text characters!

// JavaScript Object (after conversion):
const jsObjectFromJson = JSON.parse(jsonFromServer)
console.log(jsObjectFromJson.message) // Output: "https://dog.jpg" - we can access properties!


// ============================================
// WHY DO WE NEED THIS CONVERSION?
// ============================================

// Internet can only send TEXT (strings)
// JavaScript needs OBJECTS to work with data
// So: Server sends JSON text → We convert to JS object → We use the data

// Think of it like:
// - JSON = Letter in an envelope (text)
// - JavaScript Object = Actual information you can read and use


// ============================================
// COMPLETE EXAMPLE WITH FETCH
// ============================================

fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => {
        // response contains JSON TEXT like: '{"message":"https://dog.jpg","status":"success"}'
        console.log('Response is JSON text (string)')
        
        // response.json() converts that TEXT to JavaScript OBJECT
        return response.json() // This returns a Promise with the converted object
    })
    .then(data => {
        // Now 'data' is a JavaScript object: { message: "https://dog.jpg", status: "success" }
        console.log('Now data is a JavaScript object')
        console.log(data.message) // ✅ We can access properties!
        console.log(data.status)  // ✅ We can access properties!
    })


// ============================================
// SUMMARY
// ============================================

/*
1. Server sends: '{"message": "url"}' (JSON TEXT/STRING)
2. response.json() converts to: { message: "url" } (JAVASCRIPT OBJECT)
3. Now we can use: data.message to get the URL

Without conversion:
❌ jsonText.message = undefined (can't access properties of a string)

With conversion:
✅ jsObject.message = "url" (can access properties of an object)
*/