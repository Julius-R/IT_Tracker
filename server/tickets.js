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

const createTicket = (body) => {
  return new Promise((resolve, rej) => {
    const {
      id,
      category,
      description,
      priority,
      dateCreated,
      resolved,
      additionalComments,
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
        additionalComments,
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
  createTicket,
};
