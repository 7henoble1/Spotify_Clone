import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";


function Sidebar({spotify}) {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                 src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
                 alt=""
            / >
            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" icon="" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" icon="" />

            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map(playlists  => (
                <SidebarOption /*spotify={spotify} */title={playlists.name} /*id={playlist.id} key={playlist.key} *//> 
            ))}               
        </div>
    );
}

export default Sidebar;
