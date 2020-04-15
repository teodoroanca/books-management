const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema =  require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://mongouser:mongopassword@cluster0-ujnc4.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Now listening for requests on port 4000");
});