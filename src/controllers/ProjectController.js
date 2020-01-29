const projects = require('../models')

module.exports = {

  index(req ,res){
    return res.json(projects) 

  },
  create(req, res){
    const { id, title } = req.body

    projects.push({
      id,
      title,
      task: []
    })
  
    return res.json(projects)

  },
  update(req, res){
    const { id } = req.params
    const { title } = req.body
  
    const project = projects.find(p => p.id == id)
  
    project.title = title
  
    return res.json(project)

  },
  detroy(req, res){
    const { id } = req.params

    const projectIndex = projects.findIndex(p => p.id == id)
  
    projects.splice(projectIndex, 1)
  
    return res.json({ deleted: true })

  }
}