const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile').development); // import knex with db config
const PORT = process.env.PORT || 5000;

const warehouseRoutes = require('./routes/warehouseRoute');
const inventoryRoute = require('./routes/inventoryRoute');

app.use(express.json());

app.use('/warehouses', warehouseRoutes);
app.use('/inventories', inventoryRoute);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
