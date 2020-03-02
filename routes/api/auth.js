const express = require("express");
const router = express.Router();

// router GET api/users/test
// desc   Test auth route
// access public
router.get("/test", (req, res) => res.json({ messages: "auth work" }));

module.exports = router;
