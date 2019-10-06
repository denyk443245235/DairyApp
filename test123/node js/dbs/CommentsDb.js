let mongoose =  require('./mongo');
let Schema = mongoose.Schema;
let CommentSchema = new Schema({
    message:String,
    user:String,
    item:String
});
let CommentModule = mongoose.model('comments',CommentSchema);
module.exports = CommentModule;