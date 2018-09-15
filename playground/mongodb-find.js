//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/todoApp',(err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('5b9d0e080566f01a59ae62e3')
    // }).toArray().then((docs)=> {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //   console.log('Unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count)=> {
    //   console.log(`Todos count: ${count}`);
    //
    // }, (err) => {
    //   console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({
      name:"Ahmed"
    }).toArray().then((docs)=> {
      console.log('Users');
      console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
      console.log('Unable to fetch todos',err);
    });


    //  db.close();
    //in mongo3.0+ its client.close()

});
