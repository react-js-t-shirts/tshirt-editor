'use strict';

const db = require('../utils/database').getInstance();

// mongodb model using native driver
// schema validation must be done at different level

const resourceName = 'tshirt';
const model = db.collection(resourceName);

module.exports = model;
