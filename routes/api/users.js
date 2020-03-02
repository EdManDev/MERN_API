const express = require("express");
const router = express.Router();

// router GET api/users/test
// desc   Test users route
// access public
router.get("/test", (req, res) => res.json({ messages: "users work" }));

module.exports = router;
