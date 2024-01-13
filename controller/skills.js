import { text } from "express"
import { Skill } from "../models/skill.js"

function index(req, res) {

  Skill.find({}).then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    }) 
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
} 

function newskill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  req.body.yes = true
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


function show(req, res) {
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show', {
      skill: skill,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  newskill as new,
  create,
  show,
  deleteSkill as delete
}