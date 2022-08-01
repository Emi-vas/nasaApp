import React from 'react';
import { useEffect } from 'react';


const MarsList = ({ cam, data }) => {

    return (
        <div className='marsList'>
            {
                data && cam == "cam1" &&
                data.cam1.map((img) => (
                    <img className='min' src={img.img_src} alt="" />
                ))
            }
            {
                data && cam == "cam2" &&
                data.cam2.map((img) => (
                    <img className='min' src={img.img_src} alt="" />
                ))
                               
            }
            {
                 data && cam == "cam3" &&
                 data.cam3.map((img) => (
                     <img className='min' src={img.img_src} alt="" />
                 ))
            }
        </div>
    );
};

export default MarsList;