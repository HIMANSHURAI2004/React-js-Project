import React, { useRef } from 'react';
import video from '../assets/college-video.mp4'
import "./VideoPlayer.css"

function VideoPlayer({playState,setPlayState}) {

    const player=useRef()

    const closePlayer=(event) =>{
        if(event.target===player.current)
        {
            setPlayState(false)
        }
    }

    return (
        <div className={`videoPlayer ${playState? "" :"hide"}`} ref={player} onClick={closePlayer}>
                <video src={video} autoplay muted controls></video>
        </div>
    );
}

export default VideoPlayer;