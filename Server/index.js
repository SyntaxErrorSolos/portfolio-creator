const express = require("express");
const cors = require("cors");
const app = express();
const helment = require("helmet");
express.Router();
app.use(cors());
app.use(helment());


app.listen(5000)

app.get("/", (req, res) => {
    res.send("https://www.youtube.com/watch?v=DM17h16fztg")
})
