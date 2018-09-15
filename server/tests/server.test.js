const expect = require('expect');
const request = require('supertest');

const{app} = require('./../server');
const {Todo} = require('./../models/todo');
//runs beforeevery test case, will wipe all todos
beforeEach((done)=> {
  Todo.remove({}).then(()=> done());
});
describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test too text';

    request(app).post('/todos')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    }) .end((err, res)=> {
      if(err) {
        return done(err); //wrap up test, printing error to screen
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  });

  it('should not create todo with invalid body data', (done) => {
    //expect 400
    //assume length of todos is 0 in db

    request(app).post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=> {
      if(err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(0);
        done();
      }).catch((e) => done(e));
    });


  });

});
