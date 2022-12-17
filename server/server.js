const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Todo = require('./model/todos');

require('dotenv').config();

const uri = `mongodb+srv://${process.env.ATLAS_UNAME || ATLAS_UNAME}:${
    process.env.ATLAS_KEY || ATLAS_KEY
}@cluster0.wnamaja.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(uri, {
        useNewUrlParser: true
    })
    .then((e) => console.log('MongoDB Ready!'))
    .catch(console.error);

app.use(
    cors({
        origin: '*'
    })
);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.static(__dirname + '/client/'));
app.use(express.static(path.join(__dirname + 'public')));

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

/* app.get('/', (req, res) => {
    res.sendFile('index.html');
}); */

app.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

/* app.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
}); */

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});

app.get('/:id', async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.json(todo);
});

app.post('/', async (req, res) => {
    const newTodo = new Todo({
        todoContent: req.body.todoContent,
        done: req.body.done,
        category: req.body.category
    });

    await newTodo.save();
    // console.log(todosContent);
    res.json(newTodo);
});

app.put('/todos/edit', async (req, res) => {
    // const todo = await Todo.findById(req.query.id);
    console.log(req.body);
    // todo.todoContent = req.query.newContent;
    // const result = await todo.save();
    res.json({ messsage: 'cool' });
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

app.listen(process.env.PORT || 3001, () => console.log('listening...'));