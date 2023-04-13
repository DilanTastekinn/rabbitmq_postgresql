
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'root',
  host: 'localhost',
  port: 5432, 
  database: 'dilan'
});


const saveToDatabase = async (data) => {
  try {
   
    await pool.query('INSERT INTO rabbitmq (email) VALUES ($1)', [data.email]);
    console.log('Veri veritabanına kaydedildi');
  } catch (error) {
    console.error('Veri kaydetme hatası:', error);
  }
}

module.exports = saveToDatabase; 
