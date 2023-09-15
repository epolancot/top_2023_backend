const router = require('express').Router()
const middleware = require('../middleware')

router.get('/session',
        middleware.stripToken,
        middleware.verifyToken,
        userController.CheckSession)

module.exports = router