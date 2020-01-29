const projects = require('../models')

module.exports = {
  create(req, res){
    const { id } = req.params
    const { title } = req.body
  
    console.log(title)
  
    const project = projects.find(p => p.id == id)
  
    project.task.push(title)
  
    return res.json(project)
  }
}