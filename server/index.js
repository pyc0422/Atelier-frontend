require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const headers = {headers: {authorization: process.env.TOKEN, "Content-Type": "application/json"}};
const root = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'

// Routes //

// get all products
app.get('/products', async (req, res) => {
  let url = `${root}/products?count=20`;
  const products = await axios.get(url, headers);
  res.status(200).json(products.data);
})

// get product by id
app.get('/products/:product_id', (req, res) => {
  let url = `${root}/products/${req.params.product_id}`;
  return axios.get(url, headers)
          .then(result => {
            res.status(200).json(result.data)})
});

// get product styles
app.get('/products/:product_id/styles', async (req, res) => {
  let url = `${root}/products/${req.params.product_id}/styles`;
  const styles = await axios.get(url, headers);
  res.status(200).json(styles.data);
})

// get product questions
app.get('/qa/questions/:product_id', async (req, res) => {
  let url = `${root}/qa/questions/?product_id=${req.params.product_id}`;
  const questions = await axios.get(url, headers)
  res.status(200).json(questions.data);
})

// post a new question
app.post('/qa/questions', (req, res) => {
  let url = `${root}/qa/questions`;
  axios.post(url, req.body, headers)
  .then((response) => {
    console.log('Success Creating Question');
    res.status(201).json(response.data)
  })
  .catch((err) => { console.error(err) })
})

// product reviews
app.post('/reviews/:product_id', (req, res) => {
  //console.log('reviews sort and count: ', req.body);
  let url = `${root}/reviews/?product_id=${req.params.product_id}&sort=${req.body.sort}&count=${req.body.count}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})

// update review helpful & report
app.put('/reviews/:review_id/helpful', (req, res) => {
  let url = `${root}/reviews/${req.params.review_id}/helpful`;
  return axios.put(url,{}, headers)
   .then(() => {
    res.status(200).json('just updated helpful');
   })
})
app.put('/reviews/:review_id/report', (req, res) => {
  let url =`${root}/reviews/${req.params.review_id}/report`;
  return axios.put(url, {}, headers)
    .then(() => {
      res.sendStatus(204);
    })
})

// add product reviews
app.post('/addReview', (req, res) => {
  let url = `${root}/reviews`;
  const {review} = req.body;
  console.log('new Review in server: ', review);
  //let newObj = {};
  for (let key in review.characteristics) {
    review.characteristics[key] = parseInt(review.characteristics[key]);
  }
  //reviews.characteristics =newObj;
  console.log("after: ", review);
  return axios.post(url, req.body.review, headers)
    .then(() => {
      res.status(201).json('added!');
    })
    .catch((err) => {
      console.log('add review err: ', err);
    })
})

// product reviews meta
app.get('/reviews/meta/:product_id', (req, res) => {
  let url = `${root}/reviews/meta?product_id=${req.params.product_id}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})


// product
app.get('/products/:product_id', (req, res) => {
  let url = `${root}/products/${req.params.product_id}`;
  return axios.get(url, headers)
          .then(result => {
            res.status(200).json(result.data)})
});


// related products
app.get('/products/:product_id/related', async (req, res) => {
  let url = `${root}/products/${req.params.product_id}/related`;
  const relatedItems = await axios.get(url, headers);
  res.status(200).json(relatedItems.data);
})


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at Port: ${PORT}`));
