const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public", {extensions:['html']}));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});