const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5b9e9fdc012d3b8828aabc0b"
var userId = '5b9ea5143af8025c439882ef'

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id:id
}).then((todos)=> {
  console.log('Todos', todos);
});

Todo.findOne({
  _id:id
}).then((todo)=> {
  console.log('Todo', todo);
});


Todo.findById(id).then((todo)=> {
  if(!todo) { //if id is null
   return console.log('Id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
