// backend/server.js
const express = require("express");
const path = require('path');
var cors = require('cors')

const app = express();
app.use(express.static('dist'))
app.use(cors())
const PORT = process.env.PORT || 5001;

app.get("/data", (req, res) => {
  res.json({ message: "Hello this is message from backend!" });
});

// Define a route to serve the HTML file
// app.get('/page', (req, res) => {
//     // Send the HTML file as the response
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
