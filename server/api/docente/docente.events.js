/**
 * Docente model events
 */

'use strict';

import {EventEmitter} from 'events';
var Docente = require('./docente.model');
var DocenteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DocenteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Docente.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DocenteEvents.emit(event + ':' + doc._id, doc);
    DocenteEvents.emit(event, doc);
  }
}

export default DocenteEvents;
