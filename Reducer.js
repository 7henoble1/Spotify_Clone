export const initialState = {
    user: null,
    playlist:[],
    spotify: null,
    discover_weekly: null,
    top_artist: null,
    playing: false,
    item: null,
    //token: "BQC1HegDTha9ErXm_2l4QmZwgKCNyw9t3OYUFimRiMskivwan01up4xU0GT7QzvZgsPMo_KTewrLaqK3HWhVelz67GOLK35CB2GhfEH-RsEF3SwgqiMQ7LBEb_z2EuIpSsn8-EucJAUHb56B"
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };

        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        
        // case 'SET_CURRENT_PLAYLIST': {
        //     let currentPlaylist = null;
        //     state.playlists.items.forEach(playlist => {
        //         if(playlist.id === action.id) {
        //             currentPlaylist = playlist;
        //         }
        //     });
        //     return {
        //         ...state,
        //         current_playlist: currentPlaylist
        //     }
        // }
        
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case "SET_TOP_ARTISTS":
                return {
                  ...state,
                  top_artists: action.top_artists,
                };
                
        case 'SET_DISCOVER_WEEKELY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}

export default reducer