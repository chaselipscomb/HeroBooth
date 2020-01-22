const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("/api/search/", function (req, res) {
    console.log('helloooo')
   return console.log('hello there')
  })

  // Returns one character by search name
  // app.get("/api/search/Hulk", function (req, res) {
  //   console.log('hello there')
  //   const BASEURL = "https://superheroapi.com/api/";
  //   const APIKEY = "2736829286383037";
  //   axios.get(BASEURL + APIKEY + "/search/")
  //   .then(results => {
  //       console.log('made it in the server function')
  //     // const heroData = results && results.data && results.data.results;
  //   //   if (!heroData || !heroData.length) {
  //   //       console.log("didnt work, try the error message api sends back.")
  //   //     return res.sendStatus(404);
  //   //   }
  //     res.json(heroData)
  //   //   res.json(heroData[0])
  //     }
  //   })
  //   console.log("woohoo we made we it");
  //   console.log(req.params.name)
  // })


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  
  
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });