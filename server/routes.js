const router = require('express').Router()
const checkUser = require('./utils/checkUser')
const authController = require('./controllers/auth.controller')
const userController = require('./controllers/user.controller')
const postController = require('./controllers/post.controller')

router.post('/auth/signup', authController.signup)
router.post('/auth/login', authController.login)
router.get('/auth/:id/:token', authController.verifyEmail)
router.get('/u/all', userController.getAllUsers)
router.get('/u/:id', userController.getUserById)
router.patch('/u/:id', checkUser, userController.updateUser)
router.get('/u/:id/posts', postController.getPostsByUser)
router.post('/post', checkUser, postController.createPost)
router.patch('/post/:id', checkUser, postController.updatePost)

module.exports = router