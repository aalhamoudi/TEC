var express = require("express");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config")({prod: true});

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath: "/",
    contentBase: "/dist",

}));
app.use(express.static('dist'));


app.get("*", function (req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});



app.listen(8080, function () {
    console.log("Listening on port 8080!");
});