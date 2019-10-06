let mongoose = require('./mongo');
let Schema = mongoose.Schema;
let ItemSchema = new Schema({
    name: String
});
let ItemModel = mongoose.model('items', ItemSchema);
module.exports = ItemModel;