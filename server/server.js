const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from your Node.js server!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
