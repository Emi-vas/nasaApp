import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const MarsList = ({ cam, data }) => {

    const [fullScreen, setFullScreen] = useState({
        state: false,
        img: ""
    })

    const openFullScreen = (img) => {
        document.querySelector("body").style.overflowY = "hidden"
        setFullScreen({state: true, img: img.img_src})
    }

    const closeFullScreen = (img) => {
        document.querySelector("body").style.overflowY = "scroll"
        setFullScreen({state: false, img: ""})
    }
    
    useEffect(() => {
        console.log(data)
    }, [])

    return (
        <div className='marsList'>
            {
                data && cam == "cam1" &&
                data.cam1.map((img) => (
                    <img onClick={()=>openFullScreen(img)} className='min' src={img.img_src} alt="mars picture" />
                ))
            }
            {
                data && cam == "cam2" &&
                data.cam2.map((img) => (
                    <img onClick={()=>openFullScreen(img)} className='min' src={img.img_src} alt="mars picture" />
                ))
                               
            }
            {
                 data && cam == "cam3" &&
                 data.cam3.map((img) => (
                     <img onClick={()=>openFullScreen(img)} className='min' src={img.img_src} alt="mars picture" />
                 ))
            }

           {
             //fullscreen
             fullScreen.state && (
                <div className='fullScreen'>
                    <i onClick={closeFullScreen} className="fa-regular fa-circle-xmark"></i>
                    <img src={fullScreen.img} alt="mars picture" />
                </div> )
           }
        </div>
    );
};

export default MarsList;