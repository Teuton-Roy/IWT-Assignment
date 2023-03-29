//define http
import { createServer } from "http";

createServer(function (req, res) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK 
    // Content Type: text/plain 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello, World !!!"
    res.end('node js hello world !!! \n');
 }).listen(8000);
 
 // This message will be printed in the console
 console.log('Server is running live at http://127.0.0.1:8000/');
 console.log('node js hello world');

