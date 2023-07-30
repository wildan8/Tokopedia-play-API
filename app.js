require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
require('./models/Thumbnail')
require('./models/Product')
require('./models/Comment')

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', ()=> {
    console.log('database connected');
})


const app = express();
// parse requests of content-type - application/json
app.use(express.json());    

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}),
);

const thumbnailRoute = require('./routes/thumbnail');
const productRoutes = require('./routes/product');
const commentRoutes = require('./routes/comment');
    app.use('/thumbnail', thumbnailRoute);
    app.use('/product', productRoutes);
app.use('/comment', commentRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
