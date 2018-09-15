//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //same as above



MongoClient.connect('mongodb://localhost:27017/todoApp',(err, db)=> {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5b9d184e570ba3b347e35d7e')
    }, {
      "$set": {
        completed:true
      }
    },{
      returnOriginal:false
    }).then((result)=> {
      console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
      name:'Ted'
    }, {
      "$set":{
        name:'Ahmed'
      },
        "$inc":{
         age: 1
       }
    },{
      returnOriginal:false
    }).then((result)=> {
      console.log(result);
    });





    //  db.close();
    //in mongo3.0+ its client.close()

});
