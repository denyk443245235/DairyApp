let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
let ItemRout = require('./routes/ItemsRout');
let AuthRout = require('./routes/AuthRout');
let CommentRout = require('./routes/CommentRout');
app.use('/item', ItemRout);
app.use('/auth', AuthRout);
app.use('/comment', CommentRout);

app.listen(8080, () => {
    console.log('server work');
})
