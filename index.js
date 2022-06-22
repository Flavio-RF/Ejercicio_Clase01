const express = require('express')
const app = express()
const port = 3000
const routes = require("./routes")
const nunjucks = require("nunjucks");


app.use(express.json());// Para que req.body contenga los datos que llegaron a través del request.

app.use(express.static("public"));

nunjucks.configure("views", {
    autoescape: true,
    express: app,
});

app.set("view engine", "njk");

app.use(routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})