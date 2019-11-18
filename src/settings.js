const schema = process.env.DB_MONGO_SCHEME || 'mongodb';
const host = process.env.DB_MONGO_HOST || 'provide.mongodb.host';
const port = process.env.DB_MONGO_PORT || 'provide.mongodb.port';
const name = process.env.DB_MONGO_NAME || 'provide.mongodb.name';
const user = process.env.DB_MONGO_USER || 'provide.mongodb.user';
const password = process.env.DB_MONGO_PASSWORD || 'provide.mongodb.password';

module.exports = { schema, host, port, name, user, password };
