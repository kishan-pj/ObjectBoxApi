const express = require("express");
const upload = require("../middleware/upload");
const User = require("../models/User");
const router = express.Router();
const usercontroller = require("../controllers/user_controller");

router
  .route("/register")
  .post(upload.single("profile"), usercontroller.registeruser);

router.route("/login").post(usercontroller.loginuser);

module.exports = router;
