"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const { top50 } = require("../top50");



express()
  // Below are methods that are included in express(). We chain them for convenience.
  // --------------------------------------------------------------------------------

  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan("tiny"))
  .use(bodyParser.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // Nothing to modify above this line
  // ---------------------------------
  // add new endpoints here 👇
  .get("/top50", (req, res) => {

    res.status(200).json({
      "status": 200,
      "data": top50
    })
  })

  .get("/top50/songs/:songId", (req, res) => {
    console.log(req.params);
    if (top50[req.params.songId - 1]) {
      let song = top50[req.params.songId - 1];
      res.status(200).json({
        "status": 200,
        "data": song
      })
    }
    else {

      res.status(400).json({
        "status": 400,
        "message": "Song not found"

      })
    }
  })

  .get("/top50/artists/:artistId", (req, res) => {
    console.log(req.params)
    let byArtist = 0;

    byArtist = top50.find((obj) => {
      if (obj.artist.toLowerCase() === req.params.artistId) {
        return obj
      }
    })
    if (byArtist) {
      res.status(200).json({
        "status": 200,
        "data": byArtist
      })
    } else {
      res.status(400).json({
        "status": 400,
        "message": "Artist not found"
      })
    }

  })

  .get("/top50/popular-artist", (req, res) => {
    let artistArr = [];
    top50.map((obj) => {
      artistArr.push(obj.artist)
    })
    console.log(artistArr);

    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < artistArr.length; i++) {
      for (let j = i; j < artistArr.length; j++) {
        if (artistArr[i] == artistArr[j])
          m++;
        if (mf < m) {
          mf = m;
          item = artistArr[i];
        }
      }
      m = 0;
    }

    let topArtistSongList = [];

    top50.find((obj) => {
      if (obj.artist === item) {
        topArtistSongList.push(obj);
      }
    })

    res.status(200).json({
      "status": 200,
      "data": topArtistSongList
    })
  })

  .get("/top50/artists", (req, res) => {

    let artists = new Set();

    top50.map((obj) => {

      artists.add(obj.artist)
    })
    let artistsArr = Array.from(artists)
    res.status(200).json({
      "status": 200,
      "data": artistsArr
    })
  })


  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  // Node spins up our server and sets it to listen on port 8000.
  .listen(8000, () => console.log(`Listening on port 8000`));
