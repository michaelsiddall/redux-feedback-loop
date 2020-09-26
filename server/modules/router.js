const express = require("express");
const router = express.Router();
const pool = require("./pool");

// router.post("/", (req, res) => {
//   console.log("/POST hit", req.body);
//   const queryText = `SELECT * FROM feedback`;
//   pool
//     .query(queryText)
//     .then((results) => {
//       res.send(results.rows);
//     })
//     .catch((err) => {
//       console.err(err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
