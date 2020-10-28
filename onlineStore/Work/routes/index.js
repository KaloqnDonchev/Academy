const mdbClient = require('mongodb').MongoClient;
const _ = require('underscore');

module.exports = function routeIndex(req, res) {
  mdbClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('onlineShop');
    const collection = db.collection('categories');

    collection.find().toArray((error, items) => {
      res.render('index', {

      });
      client.close();
    });
  });
};
