const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const path = require("path")
const hbs = require("hbs");

const staticpath = path.join(__dirname ,"../public")
const templatepath = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname , '../templates/partials')

app.set('view engine' , 'hbs');
app.set('views' , templatepath)
hbs.registerPartials(partials_path);

app.use(express.static(staticpath))

app.get("/", (req,res) => {
    res.render('index');
    })

app.get("/about", (req,res) => {
    res.render('about')

    })

app.get("/weather", (req,res) => [
    res.render('weather')
])  

app.get("*", (req,res) => {
    res.render('404error', {
        errorcoment: "404 Page Not Found"
    })
})

app.listen(port ,() => {
    console.log(`listening to the port no ${port}`)
});