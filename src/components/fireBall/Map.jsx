import React from 'react';
import GoogleMapReact from "google-map-react";

const Map = () => {

    const coord = { lat: 0, lng: 0 }

    return (
        <div>
            <h2>Map</h2>   
            <div style={{ width: "100%", height: "70vh"}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY}}
                    defaultCenter={coord}
                    center={coord}
                    defaultZoom={14}
                    margin={[50, 50, 50, 50]}
                    options={""}
                    onChange={""}
                    onChildClick={(child) => console.log(child)}
                >
                    <div className='fireBall' lat={0} lng={0}>
                            <p>Marqueur</p>
                    </div>
                    <div className='fireBall' lat={10} lng={10}>
                            <p>Marqueur2</p>
                    </div>
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default Map;<h2>Map</h2>