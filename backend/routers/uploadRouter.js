import multer from 'multer';
import express from 'express';
import { isAuth } from '../utils.js';

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});
const upload = multer({ storage });
uploadRouter.post('/', isAuth, upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});


const storage2 = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/banners');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});
const upload2 = multer({ storage2 });
uploadRouter.post('/banner', isAuth, upload2.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});



export default uploadRouter;
