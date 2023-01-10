const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    cb(null, `profile-${Date.now()}${ext}`);
  },
});

const imagefileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif|Svg)$/)) {
    return cb(new Error("You can upload only image files"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: imagefileFilter,
  limits: { fileSize: 1024 * 1024 * 5 },
});

module.exports = upload;
