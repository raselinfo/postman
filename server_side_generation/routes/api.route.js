const express = require('express');
const api = require('../services/api');
const router = new express.Router();
 
router.get('/v1/health', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await api.getV1Health(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/v1/products', async (req, res, next) => {
  let options = { 
  };


  try {
    const result = await api.getV1Products(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.post('/v1/products', async (req, res, next) => {
  let options = { 
  };

  options.createProduct = req.body;

  try {
    const result = await api.postV1Products(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.get('/v1/products/:productId', async (req, res, next) => {
  let options = { 
    "productId": req.params.productId,
  };


  try {
    const result = await api.getV1ProductsProductId(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.put('/v1/products/:productId', async (req, res, next) => {
  let options = { 
    "productId": req.params.productId,
  };

  options.putV1ProductsProductIdInlineReqJson = req.body;

  try {
    const result = await api.putV1ProductsProductId(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});
 
router.delete('/v1/products/:productId', async (req, res, next) => {
  let options = { 
    "productId": req.params.productId,
  };


  try {
    const result = await api.deleteV1ProductsProductId(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;