/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/login', require('./api/login'));
  app.use('/api/logins', require('./api/login'));
  app.use('/api/periodos', require('./api/periodo'));
  app.use('/api/desempenos', require('./api/desempeno'));
  app.use('/api/actividades', require('./api/actividad'));
  app.use('/api/estudiantes', require('./api/estudiante'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
