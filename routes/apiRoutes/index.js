const router = require('express').Router();
// import noteRoutes
const noteRoutes = require('../apiRoutes/noteRoutes');

// use noteRoutes
router.use(noteRoutes);

// export api routes
module.exports = router;