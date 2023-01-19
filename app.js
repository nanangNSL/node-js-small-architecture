const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Constans = require("./Constans");
const helmet = require('helmet')
const err = require('./helper/error');


app.use(helmet())
app.use(cors());
app.use(bodyParser.json());
app.use(err.Message)
let allowlist = ['http://localhost:7000']
let corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } 
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate))


require("./routes/index")(app);

app.listen(Constans.PORT, () => {
  console.log(
    "CORS-enabled web server listening on port",
    Constans.PORT
  );
});
