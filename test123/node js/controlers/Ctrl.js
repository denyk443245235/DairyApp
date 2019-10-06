let ItemDb = require('../dbs/ItemsDb');
let UserDb = require('../dbs/UserDb');
let CommentDb = require('../dbs/CommentsDb');
let jwt = require('jsonwebtoken');
class Controler {
    addItem(item) {
        return new Promise((resolve, reject) => {
            let Item = new ItemDb({
                name: item
            })
            Item.save().then((err, result) => {
                resolve(result);
            });
        })
    }
    getItem() {
        return new Promise((resolve, reject) => {
            ItemDb.find({}, (err, mas) => {
                resolve(mas);
            })
        })
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            ItemDb.deleteOne({ _id: id }, (err, result) => {
                resolve(result);
            })
        })
    }
    login(body) {
        return new Promise((resolve, reject) => {
            UserDb.find(body, (err, result) => {
                if (result.length) {
                    console.log(result);
                    let token = jwt.sign({ subject: result[0]._id }, 'secretKey');
                    resolve({ token });
                }
                else {
                    resolve(null);
                }
            });
        })

    }
    register(body) {
        return new Promise((resolve, reject) => {
            let user = new UserDb(body);
            user.save((err, result) => {
                let token = jwt.sign({ subject: result._id }, 'secretKey');
                resolve({ token });
            })
        })
    }
    addComment(token, obj) {
        return new Promise((resolve, reject) => {
            let message = obj.message;
            let item = obj.item;

            UserDb.find({ _id: token }, (err, user) => {
                ItemDb.find({ name: item }, (err, Item) => {

                    let comment = new CommentDb({
                        user: user[0].login,
                        message: message,
                        item: Item[0].name
                    });
                    comment.save((err, result) => {
                        resolve(result);
                    })
                })
            })
        });
    };
    getComments(item) {
        return new Promise((resolve, reject) => {
            CommentDb.find({ item: item }, (err, comments) => {
                resolve(comments);
            })
        });
    }


}
module.exports = Controler;