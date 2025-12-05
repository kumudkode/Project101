# Request Response Cycle
A Request-Response cycle occurs in the following scenarios:
 * What is Request?
 - when a device/user ask for a "resource" (data, image, HTML page, authentication Token, etc)
 - Require a connection to the Internet somehow

 * What is Response?
  - The reply to the request
  - Could contain the resource (HTML, JSON data, Etc) asked for by the client
  - Could Contain a response(just like a message that u are not allowed to access this content) saying the client isn't authorized to receive the resource.

  --- 
    1) Can you describe a situation where you made a request to a server and received a response?
    - When I open a website on my laptop, my browser makes a request to the server hosting that website, and the server responds by sending back the HTML, CSS, and JavaScript files needed to display the webpage.
    2) What kind of information do you think is included in a request sent to a server?
    - The request typically includes the URL of the resource being requested, HTTP method (GET, POST, etc.), headers (like user-agent, cookies), and sometimes a body (for POST requests).
    3) How does the server know what kind of response to send back to the client?
    - The server determines the appropriate response based on the request's URL, method, headers, and any parameters or data sent with the request. It processes this information and generates a response accordingly.
  ---

## Request/Response Scenario
Client    -----      Server
(Request)   ----->   (Response)
(Client sends a request)       <-----   (Server sends back a response)
index.html pls    ----> "Here it is (200 OK)"

I need google font too  -----> "Here it is (200 OK)"

"Give me top secret info" -----> Not allowed "403 Forbidden"



