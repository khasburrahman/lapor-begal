let cloudinary = require('cloudinary');
let cloudinaryStorage = require('multer-storage-cloudinary');
let multer = require('multer');

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'begal',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        let filename = `${new Date().getTime()}-${Math.floor(Math.random() * 100000)}-${file.originalname}` 
        cb(undefined, filename);
    }
});

module.exports = multer({ storage: storage });