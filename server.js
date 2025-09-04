const express = require('express');
const bookController = require('./bookController');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use('/api/books', bookController);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});