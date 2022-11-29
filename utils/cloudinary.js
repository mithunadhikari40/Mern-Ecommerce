const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "navdeep1676",
  api_key: "857368533339962",
  api_secret: "6q-5ZI8fUU1-m295YaIEYAlyxas",
});

const cloudinaryUploadImg = async (fileToUpload) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(fileToUpload, (result) => {
      resolve(
        {
          url: result.secure_url,
        },
        {
          resource_type: "auto",
        }
      );
    });
  });
};

module.exports = cloudinaryUploadImg;
