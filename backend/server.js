const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/recipesharing', { useNewUrlParser: true, useUnifiedTopology: true });

// Simple routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
const PORT  = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});