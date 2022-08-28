'use strict';

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const routes = require('/routes');
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Setup a friendly greeting for the root route.
app.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the REST API Authentication with Express project!',
    });
});

// Add routes
app.use('/api', routes);

// Send 404 if no other route matched.
app.use((req, res) => {
    res.status(404).json({
      message: 'Route Not Found',
    });
  });
  
  // Setup a global error handler.
  app.use((err, req, res, next) => {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  
    res.status(500).json({
      message: err.message,
      error: process.env.NODE_ENV === 'production' ? {} : err,
    });
});

// set our port
app.set('port', process.env.PORT || 5000);

// Test the database connection.
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
})();

// Sequelize model synchronization, then start listening on our port.
sequelize.sync()
  .then( () => {
    const server = app.listen(app.get('port'), () => {
      console.log(`Express server is listening on port ${server.address().port}`);
    });
});