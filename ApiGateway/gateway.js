const express = require('express');
const { createProxyMiddleware, createProxyServer } = require('http-proxy-middleware');

const app = express();

// Define backend servers with their ports
const servers = [
    'http://localhost:3001',
    'http://localhost:3002'
];


let currentIndex = 0;
// Load balancing middleware
app.use((req, res, next) => {
    // Select the next backend server using round-robin algorithm
    const target = servers[currentIndex];
    currentIndex = (currentIndex + 1) % servers.length;
    // Forward the request to the selected backend server
    createProxyMiddleware({ target })(req, res, next);
});

const PORT = 8000;
app.listen(PORT, () => console.log("API GATEWAY STARTED"));
