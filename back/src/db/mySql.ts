import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "hplr2810",
  database: "cadastro",
});

export default pool.promise();
