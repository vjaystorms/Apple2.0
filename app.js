const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",(rec,res)=>{
  res.sendFile(path.join(__dirname,"/index.html"))
})
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is up and running at port 3000.");
});
