const _ = require('underscore');
const { $dataMetaSchema } = require('ajv');
const mdbClient = require('mongodb').MongoClient;

module.exports = function routeGender(req, res) {
  let viewData;
  mdbClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
    const db = client.db('onlineShop');
    const collection = db.collection('categories');
    collection.find().toArray((collErr, items) => {
      const womensViewData = {
        _,
        gender: items[1],
        categoryDescription: items[1].categories[0].page_description,
      }
      const mensViewData = {
        _,
        gender: items[0],
        categoryDescription: items[0].categories[0].page_description,
      }
      if (req.params.gender === womensViewData.gender.id) viewData = womensViewData;               //checks the gender
      else if (req.params.gender === mensViewData.gender.id) viewData = mensViewData;

      res.render('gender', viewData);
      client.close();
    });
  });
};