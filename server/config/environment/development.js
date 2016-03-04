'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://localhost/notas-dev'
    uri: 'mongodb://james:dementor@ds035735.mongolab.com:35735/notas',
  },

  // Seed database on startup
  seedDB: true

};
