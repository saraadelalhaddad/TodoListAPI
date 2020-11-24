const express = require("express");
const router = express.Router();
const {
  todoCreate,
  todoList,
  //   todoUpdate,
  todoDelete,
} = require("../controllers/todosController");
// const slugify = require('slugify')

// Todo Create
router.post("/", todoCreate);

// // Todo List
router.get("/", todoList);

// // Todo Update
// router.put("/:todoId", todoUpdate);

// Todo Delete
router.delete("/:todoId", todoDelete);

module.exports = router;
