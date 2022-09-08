import { Pool } from "pg";

let conn;

if (!conn) {
  conn = new Pool({
    user: process.env.PGUSER,
    password: process.env.PGPW,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDB,
  });
}

export default conn ;
