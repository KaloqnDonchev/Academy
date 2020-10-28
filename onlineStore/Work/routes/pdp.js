const mdbClient = require('mongodb').MongoClient;

module.exports = function routePDP(req, res) {
  mdbClient.connect('mongodb://localhost:27017/onlineShop', (err, client) => {
    const db = client.db('onlineShop');
    const collection = db.collection('categories');
    const viewDataProduct = [];
    const selectedCategory = req.params.subcategory;
    const selectedProduct = req.params.pdp;
    collection.find().toArray((collErr, items) => {
      const womensViewData = {
        gender: items[1],
        subcategory: items[1].categories,
      };
      const mensViewData = {
        gender: items[0],
        subcategory: items[0].categories,
      };
      if (req.params.gender === womensViewData.gender.id) viewDataProduct.push(womensViewData);     //checks the gender
      else if (req.params.gender === mensViewData.gender.id) viewDataProduct.push(mensViewData);

      viewDataProduct[0].subcategory.forEach((element) => {
        if (element.name.toLowerCase() == selectedCategory) viewDataProduct.push(element);          //checks the subcategory
      });

      viewDataProduct[1].categories.forEach((elem) =>{
        if(selectedProduct == elem.name.toLowerCase()) viewDataProduct.push(elem);                  //checks the selected product
      });

      const dataProduct = viewDataProduct[2];
      dataProduct.subcategoryName = viewDataProduct[1].name.toLowerCase();
      dataProduct.gender = viewDataProduct[1].parent_category_id;
      res.render('pdp', dataProduct);
      client.close();
    });
  });
};