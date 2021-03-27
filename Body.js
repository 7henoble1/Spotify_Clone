import React from 'react';
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow"

import "./Body.css";

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcUOkvBe2n8pJ`,
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className="body">
          <Header spotify={spotify} />

          <div className="body__info">
            <img 
                 src={discover_weekly ? discover_weekly?.images[0].url : 'https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'} 
                 alt=""
            />  
            <div className="body__infoText">
                <strong>PLAYLIST</strong>
                <h2>Discover Weekly</h2>
                <p>{discover_weekly?.description}</p>
            </div>
          </div>

          <div className="body__songs">
           <div className="body__icons">
              <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist}/>
              <FavoriteIcon fontSize="large" />
              <MoreHorizIcon />
           </div>
            
           {discover_weekly?.tracks.items.map((item) => (
              <SongRow playSong={playSong} track={item.track} key={item.track.id}/>
           ))}
          </div> 
        </div> 
    );
}

export default Body;
