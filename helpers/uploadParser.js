let cloudinary = require('cloudinary');
let cloudinaryStorage = require('multer-storage-cloudinary');
let multer = require('multer');

let storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'begal',
    allowedFormats: ['jpg', 'png'],
    filename: function (req, file, cb) {
        console.log({file, req})
        cb(undefined, 'my-file-name');
    }
});

module.exports = multer({ storage: storage });