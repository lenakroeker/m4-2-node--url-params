import styled from "styled-components";
import React from "react";

export const SongListItem = (props) => {
    // const { songs } = props;
    // const allSongs = songs;
    console.log(props)
    return (
        <SongLI>
            <Rank>#{props.rank}</Rank>
            <Title>{props.title}</Title>
            <Artist>{props.artist}</Artist>
            <Streams>({props.streams} streams)</Streams>
            <PubDate>publication date: {props.publicationDate}</PubDate>
        </SongLI>
    )
}


const SongLI = styled.li`
height: 130px;

border-bottom: 1px solid black;
`;

const Rank = styled.h1`
font-size: 60px;
position: relative;
top: 45px;
left: 40px;

`;

const Title = styled.h2`
width: 700px;
position:relative;
left: 220px;
`;

const Artist = styled.h3`
padding-top: 10px;
width: 700px;
position:relative;
left: 220px;
font-weight:lighter;
font-style:italic;
color: grey;

`;

const Streams = styled.p`
margin-top: -10px;
color: grey;
margin-left: 40px;
font-size: 16px;
`;

const PubDate = styled.p`
position: absolute;
margin-top: -30px;
right: 40px;
color: grey;
`;