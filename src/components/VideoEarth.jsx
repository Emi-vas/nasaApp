import React from 'react';
import ReactPlayer from "react-player"

//./assets/videos/earth.mp4


const VideoEarth = () => {
    return (
        <div className="videoEarth">
            <ReactPlayer 
                url="./assets/videos/earth.mp4" 
                playing loop={true} muted 
                width="500px"
                height="500px"
            />
            <div className='sat-cont'>
                <div className='sat'></div>
            </div>
            {/* <div className='sat-cont sat-cont2'>
                <div className='sat sat2'></div>
            </div> */}
        </div>
    );
};

export default VideoEarth;<h2>Vidéo</h2>