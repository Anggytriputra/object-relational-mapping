const router = require('express').Router()
// {Object Destructuring}
const { authControllers } = require('../controllers')

router.post('/register', authControllers.register)

module.exports = router




