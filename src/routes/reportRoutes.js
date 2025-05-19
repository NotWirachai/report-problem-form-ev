const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const ReportController = require('../controllers/reportController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(__dirname, '../../uploads');
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const uniqueName = uuidv4() + path.extname(file.originalname);
      cb(null, uniqueName);
    }
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload an image.'), false);
    }
  };
  
  const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter
  });

router.get('/', ReportController.getReports);
router.post('/', upload.single('image'), ReportController.createReport);

module.exports = router;