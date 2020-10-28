const mdbClient = require('mongodb').MongoClient;
const _ = require('underscore');

module.exports = function routeSubcategory(req, res) {
  mdbClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
    const db = client.db('onlineShop');
    const collection = db.collection('categories');
    const viewDataSubcategory = [];
    const selectedCategory = req.params.subcategory;
    collection.find().toArray((collErr, items) => {
      const womensViewData = {
        gender: items[1],
        subcategory: items[1].categories,
      };
      const mensViewData = {
        gender: items[0],
        subcategory: items[0].categories,
      };

      if (req.params.gender === womensViewData.gender.id) viewDataSubcategory.push(womensViewData);          //checks the gender
      else if (req.params.gender === mensViewData.gender.id) viewDataSubcategory.push(mensViewData);

      viewDataSubcategory[0].subcategory.forEach((elem) => {
        if (elem.name.toLowerCase() == selectedCategory) viewDataSubcategory.push(elem);                     //checks the subcategory
      });
      
      res.render('subcategory', viewDataSubcategory[1]);
      client.close();
    });
  });
};
