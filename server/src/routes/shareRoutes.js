const express = require('express');
const shareControl = require('../controller/shareControl');
const router = express.Router();

router.post('/share', shareControl.shareLink);
router.post('/view', shareControl.viewLink);

module.exports = router;