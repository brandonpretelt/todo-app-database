const { model, mongoose } = require('mongoose');

const Todo = new mongoose.Schema({
    todoContent: String,
    done: {
        type: Boolean,
        default: false
    },
    category: [],
    todoDescription: String
});

module.exports = model('todo', Todo);
