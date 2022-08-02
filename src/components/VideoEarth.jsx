import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactPlayer from "react-player"

//./assets/videos/earth.mp4


const VideoEarth = () => {
    const [size, setSize] = useState("500px")

    const handleSize = () => {
        if(window.innerWidth < 550){
            setSize("270px")
        } else {
            setSize("500px")
        }
    }

    useEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize)
    }, [])

    return (
        <div className="videoEarth">
            <ReactPlayer 
                url="./assets/videos/earth.mp4" 
                playing loop={true} muted 
                width={size}
                height={size}
            />
            <div className='sat-cont'>
                <div className='sat'></div>
            </div>
{/*             <div className='sat-cont sat-cont2'>
                <div className='sat sat2'></div>
            </div> */}
        </div>
    );
};

export default VideoEarth;<h2>Vidéo</h2>