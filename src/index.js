const Mongo = require('mongodb');
const Client = Mongo.MongoClient;
const Logger = Mongo.Logger;

const isProduction = process.env.NODE_ENV === 'production';

const DEFAULT = {
  settings: require('./settings') || null,
  options: {
    useUnifiedTopology: true,
    //connectTimeoutMS: 15000,
    //poolSize: 10
  }
};

const getUri = (settings) => {
  const { schema, host, port, user, password, name } = settings || {};
  return `${schema || 'mongodb'}://${user}:${password}@${host}:${port}/${name}`;
};

const TIME_POINT = '>>> MongoDB client is connected';

module.exports = async parameters => {
  console.time(TIME_POINT);
  let { settings, options } = parameters || {};
  const uri = getUri({ ...DEFAULT.settings, ...settings });

  const client = await MongoClient.connect(uri, { ...DEFAULT.options, ...options });

  Logger.setLevel(isProduction ? 'error' : 'debug'); /* warn, error */
  Logger.filter('class', [/* 'Server', */ 'Ping', 'Cursor']);
  // change logger
  // Logger.setCurrentLogger((msg, context) => console.log(msg, context));

  console.timeEnd(TIME_POINT);

  return client;
};
