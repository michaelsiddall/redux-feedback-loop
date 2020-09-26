const express = require("express");
const router = express.Router();
const pool = require("./pool");

router.get("/", (req, res) => {
  console.log("/GET hit");
  const queryText = `SELECT * FROM feedback`;
  pool
    .query(queryText)
    .then((results) => {
      res.send(results.rows);
    })
    .catch((err) => {
      console.err(err);
      res.sendStatus(500);
    });
});

module.exports = router;
