const { model, Schema, default: mongoose } = require('mongoose');

const Todo = new Schema({
    todoContent: String,
    done: {
        type: Boolean,
        default: false
    },
    category: [String]
});

module.exports = model('todo', Todo);
