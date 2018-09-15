//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above
//
// var obj = new ObjectID();
// console.log(obj); to make objectId's

//object destructuring
// var user = {'name':'ahmed', age:22};
// var{name} = user;
//console.log(name);

MongoClient.connect('mongodb://localhost:27017/todoApp',(err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //mongodb 3.0 + uses client arg instead of db arg
    // db.collection('Todos').insertOne({
    //   text:"Something to do",
    //   completed:false
    // }, (err, results)=> {
    //   if(err) {
    //     return console.log("Unable to insert todo", err);
    //   }
    //   console.log(JSON.stringify(results.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //   name:'Ahmed',
    //   age:'22',
    //   location:'Leesburg'
    // },(err, results) =>{
    //   if(err) {
    //     return  console.log('Unable to add user', eerr);
    //   }
    //   console.log(JSON.stringify(results.ops, undefined,2));
    //
    // });

      db.close();
    //in mongo3.0+ its client.close()

});
