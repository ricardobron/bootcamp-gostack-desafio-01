const projects = require('../models')

function checkProjectExist(req, res, next) {
  const { id } = req.params
  const project = projects.find(p => p.id == id)

  if (!project) {
    return res.status(400).json({ error: 'Project does not exist' })
  }

  next()
}

function logMiddleware(req, res, next) {
  console.count('Requisições')
  next()
}

module.exports = {
  checkProjectExist,
  logMiddleware
}