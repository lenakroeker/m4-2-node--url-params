import styled from "styled-components";
import React from "react";
import { SongListItem } from "./SongListItem";

export const SongList = (props) => {
    const { songs } = props;
    const allSongs = songs;
    console.log(props)
    return (
        <SongListul>
            {allSongs.map((songEach) => {
                return (
                    <SongListItem
                        title={songEach.title}
                        rank={songEach.rank}
                        artist={songEach.artist}
                        streams={songEach.streams}
                        publicationDate={songEach.publicationDate}
                    />)
            }
            )}
        </SongListul>
    )
}

const SongListul = styled.ul`
margin-top: 40px;
`