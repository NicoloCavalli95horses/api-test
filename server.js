const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Define a route for getting pizza toppings data
app.get('/pizza', (req, res) => {
  const toppings = [
    { name: 'Pepperoni', price: 1.50 },
    { name: 'Mushrooms', price: 0.75 },
    { name: 'Onions', price: 0.50 },
    { name: 'Sausage', price: 1.25 },
    { name: 'Bacon', price: 1.50 },
    { name: 'Extra cheese', price: 1.00 },
    { name: 'Black olives', price: 0.75 },
    { name: 'Green peppers', price: 0.50 },
    { name: 'Pineapple', price: 0.75 },
    { name: 'Spinach', price: 0.75 }
  ];
  res.json(toppings);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
