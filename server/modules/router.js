const express = require("express");
const router = express.Router();
const pool = require("./pool");

router.post("/", (req, res) => {
  console.log("/POST hit", req.body);
  const queryText = `INSERT INTO feedback (feeling, understanding, support, comments) VALUES ($1, $2, $3)`;
  pool
    .query(queryText, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comments,
    ])
    .then((results) => {
      res.send(201);
    })
    .catch((err) => {
      console.err(err);
      res.sendStatus(500);
    });
});

module.exports = router;
