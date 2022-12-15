const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Todo = require('./model/todos');

require('dotenv').config();

const mongoose = require('mongoose');
const uri = `mongodb+srv://${process.env.ATLAS_UNAME}:${process.env.ATLAS_KEY}@cluster0.wnamaja.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(uri, {
        useNewUrlParser: true
    })
    .then((e) => console.log('MongoDB Ready!'))
    .catch(console.error);

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

app.get('/todos/name', async (req, res) => {
    const todo = await Todo.findById(req.query.id);
    res.send(todo);
});

app.post('/todos', async (req, res) => {
    const newTodo = new Todo({
        todoContent: req.query.todoContent,
        done: req.query.done,
        category: req.query.category
    });

    await newTodo.save();
    res.send(newTodo);
});

app.put('/todos/edit', async (req, res) => {
    const todo = await Todo.findById(req.query.id);

    todo.todoContent = req.query.newContent;
    const result = await todo.save();
    res.send(result);
});

app.delete('/todos/delete', async (req, res) => {
    let id = req.query.id;
    await Todo.deleteOne({ id });
    const allTodos = await Todo.find();
    res.send(allTodos);
});

app.get('/todos/categories', async (req, res) => {
    let { category } = req.query;
    const todos = await Todo.find({ category });
    res.send(todos);
});

app.post('/todos/categories', async (req, res) => {
    let { newCategory } = req.query;
    const newTodoCategory = await Todo.findById(req.query.id);
    newTodoCategory.category = [...newTodoCategory.category, newCategory];
    await newTodoCategory.save();
    res.send(newTodoCategory);
});

app.put('/todos/categories/edit', async (req, res) => {
    let { editedCategory } = req.query;
    const getTodo = await Todo.findById(req.query.id);
    for (let i = 0; i < getTodo.category.length; i++) {
        if (getTodo.id === req.query.id) {
            getTodo.category.splice(
                getTodo.category.indexOf(getTodo.category[i]),
                1,
                editedCategory
            );
        }
    }
    console.log(getTodo);
    await getTodo.save();
    res.send(getTodo);
});

app.delete('/todos/categories/delete', async (req, res) => {
    const getTodo = await Todo.findById(req.query.id);
    for (let i = 0; i < getTodo.category.length; i++) {
        if (getTodo.id === req.query.id) {
            getTodo.category = '';
        }
    }
    console.log(getTodo);
    await getTodo.save();
    res.send(getTodo);
});

app.listen(3001, () => console.log('listening...'));
