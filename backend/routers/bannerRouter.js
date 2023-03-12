import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Banner from '../models/bannerModel.js';
import { isAdmin, isAuth } from '../utils.js';

const bannerRouter = express.Router();

bannerRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
        const createdbanners = await Banner.insertMany(data.banners);
        res.send({ createdbanners });
    })
  );

  bannerRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const banners = await Banner.find()
      res.send(banners);
    })
  );

  bannerRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const bannerId = req.params.id;
      const banner = await Banner.findById(bannerId);
      if (banner) {
        banner.name = req.body.name;
        product.image = req.body.image;
        const updatedBanner = await Banner.save();
        res.send({ message: 'Product Updated', banner: updatedBanner });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

  export default bannerRouter;