
const express = require('express');
let app = express();
const path = require('path');
const Clientpath = path.join(__dirname,'clients');

app.use(express.static(Clientpath));

const port = process.env.PORT || 8000;

app.listen(port,()=>{
  console.log(`Server is running in ${port}`);
});
