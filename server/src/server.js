// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const shareRoutes = require('./routes/shareRoutes');

const app = express();
app.use(express.json());
app.use(cors({
    methods: ["GET", "POST"],
    origin: 'http://localhost:3000',
}));


app.use('', shareRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
