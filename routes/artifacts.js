const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('artifacts', { title: 'Search Results - Artifacts' });
});

module.exports = router;

