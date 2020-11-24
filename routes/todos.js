const express = require('express')
const router = express.Router()
const {
  todoCreate,
  todoList,
  //   candyUpdate,
  //   candyDelete,
} = require('../controllers/todosController')
// const slugify = require('slugify')

// Todo Create
router.post('/', todoCreate)

// // Todo List
router.get('/', todoList)

// // Candy Update
// router.put("/:candyId", candyUpdate);

// // Candy Delete
// router.delete("/:candyId", candyDelete);

module.exports = router
