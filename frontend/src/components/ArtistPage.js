import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Content from "./Content";


const ArtistPage = () => {
  const { artistName } = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`/top50/artists/${artistName.toLowerCase()}`)
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      });
  }, []);

  console.log("ArtistPage.js: songs: ", songs);

  return (
    <>
      <Header pageTitle={`Songs by ${artistName}`} />
      { songs.map((song) => {
        return (
          <Content>
            <h2>{song.title}</h2>
            <p>Ranked at #{song.rank}</p>
            <p>released on: {song.publicationDate}</p>
            <p>streamed: {song.streams}</p>
          </Content>)
      })
      }
    </>
  );
};

export default ArtistPage;
