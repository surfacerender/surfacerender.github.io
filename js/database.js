const fs = require('fs');

function readDatabase() {
  const data = fs.readFileSync('path/to/your/database.txt', 'utf8'); // Replace with the path to your database text file
  const lines = data.split('\n');
  const database = lines.map(line => line.split(','));
  return database;
}
