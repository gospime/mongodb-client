# Mongo connection
Create a client connection to MongoDB

Depends on native driver [node-mongodb-native](https://github.com/mongodb/node-mongodb-native)

---

Connection settings can be setup through process ENV or directly with input parameters.


Example of usage with input parameters:

```node
import client from '@gospime/mongodb-client';

const parameters = {
  settings: {
    schema: 'mongodb',
    host: 'provide.host',
    port: 'provide.port',
    name: 'provide.dbname',
    user: 'provide.username',
    password: 'provide.password'
  },
  options: {
    poolSize: 10
  }
};

const instance = client(parameters);
```

---

Setup connection settings with docker ENV:
```docker
DB_MONGO_SCHEME='mongodb';
DB_MONGO_HOST='provide.mongodb.host';
DB_MONGO_PORT='provide.mongodb.port';
DB_MONGO_NAME='provide.mongodb.name';
DB_MONGO_USER='provide.mongodb.user';
DB_MONGO_PASSWORD='provide.mongodb.password';
```

And simple calling from app:
```node
import client from '@gospime/mongodb-client';

const parameters = { options: { poolSize: 10 } };
const instance = client(parameters);
```

By the way, connection settings from `process.env` will be rewritten by the settings from input parameters. 
