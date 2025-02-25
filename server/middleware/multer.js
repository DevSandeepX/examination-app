import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/');  // Specify the destination folder for the file
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Create a unique filename using the current timestamp and the original filename
    }
});

const upload = multer({ storage: storage });

export default upload;
