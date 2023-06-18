const fs = require('fs');

function readDatabase() {
  const data = fs.readFileSync('https://github.com/surfacerender/surfacerender.github.io/blob/main/database.txt', 'utf8'); // Replace with the path to your database text file
  const lines = data.split('\n');
  const database = lines.map(line => line.split(','));
  return database;
}
function addRecord(record) {
    const line = record.join(',');
    fs.appendFileSync('https://github.com/surfacerender/surfacerender.github.io/blob/main/database.txt', line + '\n', 'utf8'); // Replace with the path to your database text file
    console.log('Record added successfully.');
  }

  function getRecords() {
    return readDatabase();
  }

  function updateRecord(index, newRecord) {
    const database = readDatabase();
    if (index >= 0 && index < database.length) {
      database[index] = newRecord;
      fs.writeFileSync('https://github.com/surfacerender/surfacerender.github.io/blob/main/database.txt', database.map(record => record.join(',')).join('\n'), 'utf8'); // Replace with the path to your database text file
      console.log('Record updated successfully.');
    } else {
      console.log('Invalid record index.');
    }
  }

  function deleteRecord(index) {
    const database = readDatabase();
    if (index >= 0 && index < database.length) {
      database.splice(index, 1);
      fs.writeFileSync('https://github.com/surfacerender/surfacerender.github.io/blob/main/database.txt', database.map(record => record.join(',')).join('\n'), 'utf8'); // Replace with the path to your database text file
      console.log('Record deleted successfully.');
    } else {
      console.log('Invalid record index.');
    }
  }

  const database = readDatabase();
  console.log('Database contents:', database);
  
  addRecord(['John', 'Doe', 'john@example.com']);
  console.log('Updated database contents:', readDatabase());
  
  updateRecord(1, ['Jane', 'Smith', 'jane@example.com']);
  console.log('Updated database contents:', readDatabase());
  
  deleteRecord(0);
  console.log('Updated database contents:', readDatabase());

  
  
  