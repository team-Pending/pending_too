const router = require('express').Router();
const { sendTextEmail, sendAttachmentEmail } = require('../../controllers/emailController');

router.route('/text').post(sendTextEmail);
router.route('/attachments').post(sendAttachmentEmail);

module.exports = router;
