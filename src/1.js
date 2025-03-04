// Create a new Node.js HTTP server
const http = require('http');

// Define a function to handle incoming requests
function handleRequest(request, response) {
  // Log the request method and URL
  console.log(`Received request for ${request.url}`);

  // Set the status code and headers
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Write the response data
  response.end('Hello World!');
}

// Create an HTTP server and listen on port 3000
http.createServer(handleRequest).listen(3000);
