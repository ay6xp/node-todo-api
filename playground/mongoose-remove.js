const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(results);
// });

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id:'5b9eb2bb7bad5d9130dbc95c'}).then((todo) => {

});


Todo.findByIdAndRemove('5b9eb2bb7bad5d9130dbc95c').then((todo) => {
  console.log(todo);
});
