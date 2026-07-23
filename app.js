const express = require("express");
const app = express();
const PORT = 8000;

app.use((req, res, next) => {
    console.log("Request Received");
    next();
})
// View Engine: EJS
app.set("view engine", "ejs")
// Static FIles
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("home");

})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})