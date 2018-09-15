var newTodo = new Todo({
  text:'Cook dinner',
  completed: false,
  completedAt: 123
});

var newUser = new User({
  email:'ay6xp@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved user',doc);

},(e)=> {
  console.log('Unable to save User', e);
});

//
// newTodo.save().then((doc)=> {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
//
//
// var otherTodo = new Todo({
//   text: 'Edit this video'
// });
