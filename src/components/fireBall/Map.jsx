import React, { useEffect, useState } from 'react';
import GoogleMapReact from "google-map-react";
import axios from 'axios';

const Map = () => {

    const coord = { lat: 50, lng: 0 }
    const [data, setData] = useState()
    const [filterValue, setFilterValue] = useState("2022")

    const getData = () => {
        axios
        .get(`https://ssd-api.jpl.nasa.gov/fireball.api`)
        .then((res) => {
            let data = res.data.data
            setData(data)
        })
    }

    const filter = (fireball) => {
        let date = fireball[0].slice(0,4)
        if (date == filterValue && fireball[3] != null) {
             return fireball
        }
    }

    //Size and color of icon
    const setClass = (powerString) => {
        let power = parseInt(powerString)

        if(power >= 100) {
            return "fireBall fireBall--3"
        } else if(power > 15 && power < 100) {
            return "fireBall fireBall--2"
        } else if(power <= 15) {
            return "fireBall fireBall--1"
        }
    }

    const setLat = (latString, dir) => {
        let lat = parseInt(latString)
        if(dir == "N") {
            return lat
        } else if (dir == "S") {
            return -lat
        } else {
            return 0
        }
    }
    const setLng = (lngString, dir) => {
        let lng = parseInt(lngString)
        if(dir == "E") {
            return lng
        } else if(dir == "W") {
            return -lng
        } else {
            return 0
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h2 className='nasa_titre'>FireBalls</h2>   
            <div className='nasa_filter'>
                <div className='year'>
                    <p>{filterValue}</p>
                    <input type="range" min={2000} max={2022} step={1} value={filterValue} onChange={(e)=>setFilterValue(e.target.value)}/>
                </div>
            </div>
            <div className='nasa_map' style={{ width: "90%", height: "80vh", margin: "auto"}}>
                <div className='legend'>
                    <h3>Impact Energy</h3>
                    <div className='legend__elem'>
                        <i className="fa-solid fa-burst "></i>
                        <p>{"< 15kt"}</p>
                    </div>
                    <div className='legend__elem'>
                        <i className="fa-solid fa-burst "></i>
                        <p>{"> 15kt"}</p>
                    </div>                    
                    <div className='legend__elem'>
                        <i className="fa-solid fa-burst "></i>
                        <p>{"> 100kt"}</p>
                    </div>
                </div>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
                    defaultCenter={coord}
                    center={coord}
                    defaultZoom={2}
                    margin={[50, 50, 50, 50]}
                    options={""}
                    onChange={""}
                    onChildClick={(child) => console.log(child)}
                >

                    {
                        data && 
                        data
                        .filter((fireball) => filter(fireball))
                        .map((fireball, index) => (
                            <div className={setClass(fireball[1])} lat={setLat(fireball[3], fireball[4])} lng={setLng(fireball[5], fireball[6])} key={index}>
                                <i className="fa-solid fa-burst"></i>
                            </div>
                        ))
                    }
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;