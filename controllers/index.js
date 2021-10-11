const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./view');
const homeRoutes = require('./view/home');



router.use('/api', apiRoutes);
router.use('/view', viewRoutes);
router.use('/', homeRoutes);

module.exports = router;