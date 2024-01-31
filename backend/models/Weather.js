const db = require('../config/db');

const Weather = {
  getAll: (callback) => {
    db.query('SELECT * FROM weather', (err, results) => {
      if (err) {
        console.error('Error querying database:', err);
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
};

module.exports = Weather;
