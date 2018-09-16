const expect = require('expect');
const request = require('supertest');

const{app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectID} = require('mongodb');
//runs beforeevery test case, will wipe all todos

const todos = [{
  _id: new ObjectID(),
  text:'First text todo'
}, {
  _id: new ObjectID(),
  text:'Second text to do'
}];


beforeEach((done)=> {
  Todo.remove({}).then(()=> {
    return Todo.insertMany(todos);
  }).then(()=> done());
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
      Todo.find({text}).then((todos) => {
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
        expect(todos.length).toBe(2);
        done();
      }).catch((e) => done(e));
    });


  });

});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});


describe("GET /todos/:id", () => {
  it("should return todo doc", (done) => {
    request(app) //comes from supertest module
    .get(`/todos/${todos[0]._id.toHexString()}`)
    .expect(200)
    .expect((res) => {
      expect(res.body.todo.text).toBe(todos[0].text);

    })
    .end(done);

  });

it('should return 404 if todo no found', (done) => {
  var hexId = new ObjectID().toHexString();
  request(app)
  .get(`/todos/${hexId}`)
  .expect(400)
  .end(done);

});

it('should return 404 for non object ids', (done) => {
request(app)
.get(`/todos/fail`)
  .expect(404)
  .end(done);
});


});
