var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
const m_todo = require('../models/m_todo')

//check with postman done
var create = function(req, res) {
  todo = new m_todo({
    title : req.body.title,
    description : req.body.description,
    createdAt : new Date(),
    updatedAt : new Date(),
    completed : false,
    creator : req.body.creator
  })
  todo.save(function(err, result) {
    err ? res.status(500).send(err) : res.status(200).send(result)
  })
}

//check with postman done
var getAll = function(req, res) {
  m_todo.find({})
  .populate('creator')
  .exec(function(err, result) {
    if(!err) res.send(result)
    else res.send(err.message)
  })
}

//done
var getById = function(req, res) {
  let _id = req.params._id
  m_todo.findById({_id:_id})
    .populate('creator')
    .exec(function(err, result) {
      if(!err) res.send(result)
      else res.send(err.message)
  })
}

//done
var remove = function(req, res) {
  m_todo.remove({_id: req.params._id}, function(err, result) {
    console.log('hai');
    if(!err) res.send("Success")
    else res.send(err.message)
  })
}

//done
var updates = function(req, res) {
  let id = req.params._id
  m_todo.findOne({_id : id}, function(err, resultFind) {
    m_todo.findOneAndUpdate({_id:id},{ $set: {title: req.body.title || resultFind.title, description: req.body.description || resultFind.description ,createdAt : resultFind.createdAt, updatedAt: new Date()}}, function(err, result) {
      if(!err) res.send(`this todo: ${result} \n has been edited! go findById to check it!`)
      else res.send(err.message)
    })
  })

}

module.exports = {
  create, getAll, getById, remove, updates
}
