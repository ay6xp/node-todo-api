//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/todoApp',(err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete many
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=> {
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=> {
    //   console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID("5b9d0f0edeb0f962205067d9")

    });

    //  db.close();
    //in mongo3.0+ its client.close()

});
