const User = require("../models/User");

const registeruser = (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user != null) {
        let err = new Error(`user ${req.body.username} already exists`);
        res.status(400);
        return next(err);
      } else {
        console.log(req.file);
        console.log(req.body);
        let profile = {
          ...req.body,
          profile: req.file.filename,
        };
        User.create(profile)
          .then((profile) => res.json({ data: profile }))
          .catch(next);
      }
    })
    .catch(next);
};

const loginuser = (req, res, next) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  }).then((user) => {
    if (user == null) {
      res.status(404);
      let err = new error(`User ${req.body.username} doesnot exists`);
      return next(err);
    } else {
      res.json({ "user ": user, "reply ": "login sucessfull" });
    }
  });
};

module.exports = { registeruser, loginuser };
