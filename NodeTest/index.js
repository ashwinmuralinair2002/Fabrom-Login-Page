const http = require("http");
const fs = require("fs");
const url =require("url");

const myServer = http.createServer((req, res) => {
   if(req.url === '/favicon.ico') {
        // Ignore favicon requests
        res.writeHead(204); // No Content
        res.end();
        return;
    }
    res.writeHead(200, { 'content-type': 'text/plain' });

    // Log message to write
    const log = `${new Date().toLocaleString()}: ${req.url} New Request Received\n`;
    const myURL = url.parse(req.url, true);
    // Append to log.txt
    fs.appendFile('logg.txt', log, (err) => {
        if (err) {
            // If error occurs while logging
            console.error("Error writing to log file:", err);
            res.end("Internal Server Error");
            return;
        }

        // Routing logic
        switch (req.url) {
            case '/':
                res.end("home page");
                break;
            case '/about':
                res.end("About page : I am Ashwin");
                break;
            case '/contact':
                res.end("Contact me at 1234567890");
                break;
            default:
                res.end("Error 404: Page Not Found");
        }
    });
});

// Start server
myServer.listen(5000, () => {
    console.log("server working");
});
