const express = require("express");
const requireSubAdmin = require("../utils/auth");

const router = express.Router();

router.get("/dashboard", requireSubAdmin, (req, res) => {
    res.send("Sub-admin dashboard");
});

module.exports = router;