// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const serverless = require('serverless-http');

const shareRoutes = require('./routes/shareRoutes');

const app = express();
app.use(express.json());
app.use(cors({
    methods: ["GET", "POST"],
    origin: 'http://localhost:3000',
}));

app.use('', shareRoutes);

const PORT = 5000;
app.listen(PORT, () => { 
    console.log(`\n\n\n\t||||| --> J-LINK SHARE <-- |||||\n`);
    console.log(`\n|||||  --> CREATED BY JESWIN JOSEPH J <-- |||||\n`);
    console.log(`\n||||| --> SERVER RUNNING ON PORT ${PORT} <-- |||||\n\n\n`);
});


// module.exports.handler = serverless(app);