const express = require('express')

const Routes = express.Router()

const { checkProjectExist} = require('./middlewares')
const ProjectController = require('./controllers/ProjectController')
const TaskController = require('./controllers/TaskController')


Routes.get('/projects', ProjectController.index)

Routes.post('/projects', ProjectController.create)

Routes.put('/projects/:id', checkProjectExist, ProjectController.update)

Routes.delete('/projects/:id', checkProjectExist, ProjectController.detroy)

Routes.post('/projects/:id/tasks', checkProjectExist, TaskController.create)

module.exports = Routes