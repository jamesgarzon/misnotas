/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

  User.find({}).remove(function() {
    User.create({
      provider: 'local',
      nombres: 'James Garzón',
      role: 'admin',
      email: 'james@jecnotas.com',
      fechaNacimiento : new Date('07-07-1994'),
      documento: '1040040896',
      direccion: 'Donde su madre a la derecha dos cuadras',
      password: 'jamesgarzon'
    }, {
      provider: 'local',
      role: 'admin',
      nombres: 'Camilo Guerra',
      email: 'camilo@jecnotas.com',
      fechaNacimiento : new Date('05-04-1995'),
      documento: '9854124578',
      direccion: 'Avenida siempre viva',
      password: 'camilo'
    }, {
      provider: 'local',
      role: 'admin',
      nombres: 'Esteban Salazar',
      email: 'esteban@jecnotas.com',
      documento: '1040578457',
      direccion: 'Sabaneta carrera 15',
      fechaNacimiento : new Date('04-01-1994'),
      password: 'esteban'
    }, {
      provider: 'local',
      role: 'estudiante',
      nombres: 'Jorge Gonzales',
      email: 'jorge.gonzalez@jecnotas.com',
      documento: '457845121',
      direccion: 'Medellín carrera 15 # 45-24',
      fechaNacimiento : new Date('04-12-1998'),
      password: 'esteban'
    }
    , function() {
        console.log('finished populating users');
      }
    );
  });
