const express = require('express');
const rateLimit = require('express-rate-limit');
const shareControl = require('../controller/shareControl');
const router = express.Router();


const dayInMillis = 24 * 60 * 60 * 1000;

const shareLimiter = rateLimit({
    windowMs: dayInMillis,
    max: 150,
});

const viewLimiter = rateLimit({
    windowMs: dayInMillis,
    max: 500,
  });


router.post('/share', shareLimiter, shareControl.shareLink);
router.post('/view', viewLimiter, shareControl.viewLink);

module.exports = router;