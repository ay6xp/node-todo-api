var env = process.env.NODE_ENV || 'development';

if (env === 'development' ||env === 'test') {
  //automatically parses json to js object
  var config = require('./config.json');
  var envConfig = config[env];

  //returns object keys as array
  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });

}

// if (env==='development') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI =  'mongodb://localhost:27017/todoApp';
// }else if (env==='test') {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI =  'mongodb://localhost:27017/todoAppTest';
// }
