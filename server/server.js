const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Specify the allowed origin in the cors options
const corsOptions = {
  origin: 'https://test-deploy-lac-seven.vercel.app',
};

// Use the cors middleware with the specified options
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from your Node.js server!, Mohammmmmmad. This is easy!!!! ' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
