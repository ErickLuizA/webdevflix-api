const express = require("express")
const router = express.Router()

const EpisodeController = require('./controllers/EpisodeController')
const CategoryController = require('./controllers/CategoryController')

const episodeController = new EpisodeController
const categoryController = new CategoryController

router.get("/episodes", episodeController.index)

router.get("/episodes/:id",episodeController.show)

router.post("/newepisode", episodeController.create)

router.get("/category", categoryController.show)

router.get("/categories", categoryController.index)

module.exports = router