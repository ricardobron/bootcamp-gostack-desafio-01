const express = require('express')

const app = express()

app.use(express.json())

const projects = []

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

app.use(logMiddleware)

app.get('/projects', (req, res) => {

  return res.json(projects)
})

app.post('/projects', (req, res) => {

  const { id, title } = req.body

  projects.push({
    id,
    title,
    task: []
  })

  return res.json(projects)

})

app.put('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  const project = projects.find(p => p.id == id)

  project.title = title

  return res.json(project)

})

app.delete('/projects/:id', checkProjectExist, (req, res) => {
  const { id } = req.params

  const projectIndex = projects.findIndex(p => p.id == id)

  projects.splice(projectIndex, 1)

  return res.json({ deleted: true })
})

app.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
  const { id } = req.params
  const { title } = req.body

  console.log(title)

  const project = projects.find(p => p.id == id)

  project.task.push(title)

  return res.json(project)
})

app.listen(3000)