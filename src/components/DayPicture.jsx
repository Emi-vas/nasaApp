import React, { useEffect, useState } from 'react';
import axios from "axios"

const DayPicture = () => {

    const [dataImage, setDataImage] = useState()

    useEffect(() => {
        let date = new Date().toLocaleString().slice(0, 10)
        let nasaApiKey = process.env.REACT_APP_NASA_KEY
        let nasa_dayPicture = sessionStorage.getItem('nasa_dayPicture')

        const getData = () => {
            //get data from api NASA
            axios
                .get(`https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`)
                .then((res) => {
                    console.log(res.data)
                    let data = res.data
                    nasa_dayPicture = {date, data}
                    sessionStorage.setItem('nasa_dayPicture', JSON.stringify(nasa_dayPicture)) //save data on sessionStorage
                    setDataImage(nasa_dayPicture.data)
                })
        }

        //if there is data on storage
        if(nasa_dayPicture) {
            nasa_dayPicture = JSON.parse(nasa_dayPicture)

            //if data is not actual
            if(date != nasa_dayPicture.date) {
                getData()
            } else {
                setDataImage(nasa_dayPicture.data)
            }
        } else {
            getData()
        }

        

    }, [])

    return (
        <div className='nasa_dayPicture'>
            <h2 className='nasa_titre'>La photo du jour</h2>
            {
                dataImage &&(
                    <>
                        <img className='img-min' src={dataImage.url} alt="Image du jour, nasa" />
                        <div className='desc'>
                            <i className="fa-solid fa-circle-info"></i>
                            <p className='eng'>{dataImage.explanation}</p>
                            <p className='fr'></p>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default DayPicture;