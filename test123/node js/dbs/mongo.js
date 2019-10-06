let mongoose = require('mongoose');
mongoose.connect('mongodb+srv://user:1234@cluster0-eufbz.mongodb.net/collage?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('db connect');
});
module.exports = mongoose;