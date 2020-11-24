let todos = require('../todos')
const slugify = require('slugify')

exports.todoCreate = (req, res) => {
  const id = todos[todos.length - 1].id + 1
  const slug = slugify(req.body.name, { lower: true })
  const newTodo = { id, slug, ...req.body } // id, slug are equivalent to id: id, slug: slug
  todos.push(newTodo)
  res.status(201).json(newTodo)
}

exports.todoList = (req, res) => res.json(todos)

// exports.todoUpdate = (req, res) => {
//   const { todoId } = req.params;
//   const foundTodo = todos.find((todo) => todo.id === +todoId);
//   if (foundTodo) {
//     for (const key in req.body) foundTodo[key] = req.body[key];
//     foundTodo.slug = slugify(req.body.name, { lower: true });
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Todo not found" });
//   }
// };

// exports.todoDelete = (req, res) => {
//   const { todoId } = req.params;
//   const foundCandy = candies.find((candy) => candy.id === +candyId);
//   if (foundCandy) {
//     candies = candies.filter((candy) => candy !== foundCandy);
//     res.status(204).end();
//   } else {
//     res.status(404).json({ message: "Candy not found" });
//   }
// };
