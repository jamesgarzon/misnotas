'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    // uri: 'mongodb://localhost/notas-dev'
    uri: 'mongodb://james:dementor@ds035735.mongolab.com:35735/notas',
    uri: 'mongodb://esteban:boneserdio@ds055535.mongolab.com:55535/desempenos'
  },

  // Seed database on startup
  seedDB: true

};
