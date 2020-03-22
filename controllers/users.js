const User = require('../models/User');

async function authenticate(req, res) {
  try {

  } catch(err) {
    console.error(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function index(req, res) {
  try {
    res.send('index');
  } catch(err) {
    console.error(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function show(req, res) {
  try {

  } catch(err) {
    console.error(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function create(req, res) {
  try {

  } catch(err) {
    console.error(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

async function update(req, res) {
  try {

  } catch(err) {
    console.error(err);
    res.status(400).json({ name: err.name, message: err.message });
  }
}

module.exports = { authenticate, index, show, create, update };
