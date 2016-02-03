/**
 * Desempenos model events
 */

'use strict';

import {EventEmitter} from 'events';
var Desempenos = require('./desempenos.model');
var DesempenosEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DesempenosEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Desempenos.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DesempenosEvents.emit(event + ':' + doc._id, doc);
    DesempenosEvents.emit(event, doc);
  }
}

export default DesempenosEvents;
