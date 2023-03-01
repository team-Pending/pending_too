const router = require('express').Router();
const s3Routes = require('./s3');
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const productRoutes = require('./productRoutes');

router.use('/s3', s3Routes);
router.use('/users', userRoutes);
router.use('/review', reviewRoutes);
router.use('/product', productRoutes);

module.exports = router;

