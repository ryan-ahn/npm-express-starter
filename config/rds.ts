import mysql from 'mysql2/promise';
import env from './env';

const sqlPool = mysql.createPool({
  host: env.rdsHostUrl,
  user: env.rdsUser,
  password: env.rdsPass,
  database: env.rdsDatabase,
});

export default sqlPool;
