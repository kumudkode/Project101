fetch('https://apis.scrimba.com/dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => console.log(data))  

    .catch(err => {
        console.log(err)
         // update the DOM to warn the user
        // access an alternative API
    })   
    .finally(() => console.log('The operation completed.'))  

// we can use in try catch block for the purpose for function

try {
    // const response = await fetch('https://api.scrimba.com/dog.ceo/api/breeds/image/random')
    const response = await fetch('https://apis.scrimba.com/dog.ceo/api/breeds/images/random')
    const data = await response.json()
    console.log(data)
} catch (err) {
    console.log(err)
    throw new Error('This is a network error!')
    // update the DOM to warn the user
    // access an alternative API
} finally {
    console.log('The operation completed.')
}