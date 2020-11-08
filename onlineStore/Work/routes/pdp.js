module.exports = function routePDP(req, res) {
  const { productId } = req.params;
  req.db.db('onlineShop').collection('products').findOne({ id: productId })
    .then((product) => {
      console.log(product);
      res.render('pdp', product);
    });
};
