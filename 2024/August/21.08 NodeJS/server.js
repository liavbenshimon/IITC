// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a port to listen on
const port = 3000;
const newArray = [
    {Email:"liav123@gmail.com", ID: 123654756 ,Address: "Jerusalem"},
    {Email:"dani211@gmail.com", ID: 318632723 ,Address: "Acre"},
    {Email:"meir111@gmail.com", ID: 498754321 ,Address: "Ber Sheva"}
]

app.get('/', (req, res) => {
    res.send('Welcome to my basic Express server!');
  });

// Create a simple route for the root URL
app.get('/about', (req, res) => {
  res.send("This server was created by lilinblum");
});

// Define the "/contact" route and respond with a JSON object
app.get('/contact', (req, res) => {
    res.json({
      email: 'liav1232111@gmail.com',
      phone: '0544-930-848'
    });
  });

  // Define the "/api/products" route and respond with a JSON array of products
  app.get('/api/products', (req, res) => {
    const products = [
      { id: 1, name: 'Product 1', price: 29.99 },
      { id: 2, name: 'Product 2', price: 49.99 },
      { id: 3, name: 'Product 3', price: 19.99 }
    ];
    res.json(products);
  });

app.get('/api/products/:email', (req, res) => {
    const myEmail = req.params.email;
    let person = null;
    for (let i = 0; i < newArray.length; i++)
        if (newArray[i].Email === myEmail)
            person = newArray[i]
    
    res.json(person)
})
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:3000/`);
});
