'use strict';

var _ = require('lodash');
var Login = require('./login.model');

// Get list of logins
exports.index = function(req, res) {
  Login.find(function (err, logins) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(logins);
  });
};

// Get a single login
exports.show = function(req, res) {
  Login.findById(req.params.id, function (err, login) {
    if(err) { return handleError(res, err); }
    if(!login) { return res.status(404).send('Not Found'); }
    return res.json(login);
  });
};

// Creates a new login in the DB.
exports.create = function(req, res) {
  Login.create(req.body, function(err, login) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(login);
  });
};

// Updates an existing login in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Login.findById(req.params.id, function (err, login) {
    if (err) { return handleError(res, err); }
    if(!login) { return res.status(404).send('Not Found'); }
    var updated = _.merge(login, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(login);
    });
  });
};

// Deletes a login from the DB.
exports.destroy = function(req, res) {
  Login.findById(req.params.id, function (err, login) {
    if(err) { return handleError(res, err); }
    if(!login) { return res.status(404).send('Not Found'); }
    login.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}