const express = require("express");
const cors = require("cors")
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, 'client', 'build')

const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://my-study-notes.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))


const PORT = process.env.PORT || 8080;


app.use(express.static(publicPath))

//this is needed in order to make a client side rendering with paths work
app.get('/*', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
