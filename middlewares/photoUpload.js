const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});
const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();

  req.body.images = [];
  await Promise.all(
    req.files.map(async (file, i) => {
      await sharp(file.path)
        .resize(500, 500)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/${file.filename}`);
    })
  );
  next();
};

module.exports = { uploadPhoto, blogImgResize };
