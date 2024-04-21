// server.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
    methods: ["GET", "POST"],
    origin: 'http://localhost:3000',
}));

app.get('/api/hello', (req, res) => {
    console.log("HERE");
  res.json({ message: 'Hello, World!' });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
