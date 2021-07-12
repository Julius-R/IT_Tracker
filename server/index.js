const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const tickets_model = require("./tickets");

const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});
app.use(cors());

app.get("/api", (req, res) => {
  tickets_model
    .getTickets()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/getTicket", (req, res) => {
  console.log(req.body);
  tickets_model
    .getTicket(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/updateTicket", (req, res) => {
  tickets_model
    .updateTicket(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/createTicket", (req, res) => {
  tickets_model
    .createTicket(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.post("/test", (req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
