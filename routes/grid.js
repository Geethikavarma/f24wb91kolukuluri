const express = require('express');
const router = express.Router();

router.get('/grid', (req, res) => {
  let query = req.query;
  console.log(`rows: ${query.rows}`);
  console.log(`cols: ${query.cols}`);
  
  // Pass the query to the Pug template
  res.render('grid', { title: "Make a grid", query: query });
});

module.exports = router;
