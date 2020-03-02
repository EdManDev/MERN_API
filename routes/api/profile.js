const express = require("express");
const router = express.Router();

// router GET api/users/test
// desc   Test profile route
// access public
router.get("/test", (req, res) => res.json({ messages: "profile work" }));

module.exports = router;
