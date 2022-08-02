import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MarsIcon from './MarsIcon';
import MarsList from './MarsList';
import axios from "axios"


const MarsRover = () => {

    const [listSelected, setListSelected] = useState() //front rear mast
    const apiKey = process.env.REACT_APP_NASA_KEY
    
    const [cam1Data, setCam1Data] = useState([])
    const [cam2Data, setCam2Data] = useState([])
    const [cam3Data, setCam3Data] = useState([])
    const [data, setData] = useState({cam1: cam1Data, cam2: cam2Data, cam3: cam3Data})

    useEffect(() => {
        if(cam1Data && cam2Data && cam3Data) {
            setData({cam1: cam1Data, cam2: cam2Data, cam3: cam3Data})
        }
    }, [cam1Data, cam2Data, cam3Data])

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=RHAZ&api_key=${apiKey}`)
        .then((res) => {
            if(res.data.photos.length > 20) {
                setCam2Data(res.data.photos.slice(0,20))
            } else {
                setCam2Data(res.data.photos)
            }
        })
        
        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${apiKey}`)
        .then((res) => {
            if(res.data.photos.length > 20) {
                setCam3Data(res.data.photos.slice(0,20))
            } else {
                setCam3Data(res.data.photos)
            }
        })

        axios
        .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=MAST&api_key=${apiKey}`)
        .then((res) => {
            if(res.data.photos.length > 20) {
                setCam1Data(res.data.photos.slice(0,20))
            } else {
                setCam1Data(res.data.photos)
            }
        })
       
    }, [])

    return (
        <div className='mars'>
            <h2 className='nasa_titre'>Mars Pictures</h2>
            <div className='marsRover' id='rover'>
                <img src="assets/img/mars-rover.png" alt="Mars Rover" />
                <MarsIcon setListSelected={setListSelected} name="cam1"/>
                <MarsIcon setListSelected={setListSelected} name="cam2"/>
                <MarsIcon setListSelected={setListSelected} name="cam3"/>
                {
                    listSelected && <MarsList cam={listSelected} data={data} />
                }
            </div>
        </div>
    );
};

export default MarsRover;