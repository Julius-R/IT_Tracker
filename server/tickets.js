require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

const getTickets = () => {
  return new Promise((resolve, rej) => {
    pool.query("SELECT * FROM tickets ORDER BY id ASC", (err, res) => {
      if (err) {
        rej(err);
      }
      resolve(res.rows);
    });
  });
};

const getTicket = (body) => {
  return new Promise((resolve, rej) => {
    console.log("Body: " + body);
    pool.query("SELECT * FROM tickets WHERE id = $1", [body], (err, res) => {
      if (err) {
        rej(err);
      }
      resolve(res.rows[0]);
    });
  });
};

const updateTicket = (body) => {
  return new Promise((resolve, rej) => {
    const { id, resolved, additionalcomments } = body;
    pool.query(
      "UPDATE tickets SET resolved=$2,additionalcomments=$3 WHERE id = $1",
      [id, resolved, additionalcomments],
      (err, res) => {
        if (err) {
          rej(err);
        }
        resolve(`Successfully added!`);
      }
    );
  });
};

const createTicket = (body) => {
  return new Promise((resolve, rej) => {
    const {
      id,
      category,
      description,
      priority,
      dateCreated,
      resolved,
      additionalcomments,
    } = body;
    pool.query(
      "INSERT INTO tickets (id,category,description,priority,dateCreated,resolved,additionalcomments) VALUES ($1, $2, $3,$4,$5,$6,$7) ",
      [
        id,
        category,
        description,
        priority,
        dateCreated,
        resolved,
        additionalcomments,
      ],
      (err, res) => {
        if (err) {
          rej(err);
        }
        resolve(`Successfully added!`);
      }
    );
  });
};

module.exports = {
  getTickets,
  getTicket,
  updateTicket,
  createTicket,
};
