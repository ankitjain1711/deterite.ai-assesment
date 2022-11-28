import React from "react";
import music from "./music.jpg";
function Navbar() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            backgroundColor: '#FFE4E1',
            width: '100%',
            height: '25%',
            textAlign: 'right',
            color: 'white',
        }}>

            <div>
                <div class="column">
                <img src={music} alt=" " class="center" />
                </div>
                <div class="row">
                <h1 style={{ color: '#8B008B' }}>Your Music App </h1>
                </div>
            </div>
            
            <div>
                <div style={{ position: 'fixed', bottom: 0, backgroundColor: '#1E90FF', width: '20%', height: '100%', textAlign: 'center', color: 'white' }}>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <br /><br /><br /><br />
                    <a href="/"><h3 style={{ color: 'black' }}><b>Home</b></h3></a>
                    <a href="/playlist"><h3 style={{ color: 'black' }}><b>Playlist</b></h3></a>
                    <a href="/search"><h3 style={{ color: 'black' }}><b>Search</b></h3></a>
                    <a href="/favourite"><h3 style={{ color: 'black' }}><b>Favourite</b></h3></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;