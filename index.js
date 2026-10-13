const http = require('http');

const serverConfig = {
    database: {
        status: "connected"
    }
};

const server = http.createServer((req, res) => {
    // Modern optional chaining
    const dbStatus = serverConfig?.database?.status;
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Database Status: ${dbStatus}\n`);
});

server.listen(3000, () => {
    console.log("App is running continuously on http://localhost:3000");
});
