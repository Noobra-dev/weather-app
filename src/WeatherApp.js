import { useState } from 'react'
import axios from 'axios'

const WeatherApp=()=>{
    const [city,setCity]=useState("")
    const [data,setData]=useState({})
    const callApi=(e)=>{
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d8d3f8d3bedcf8adbc2af7b48e6ca3d4`)
        .then(
        (res)=>{console.log(res.data)
        setData(res.data)
        }
        )
        .catch(
        (err)=>{console.log(err)}
        )
    }
    const handleChange=(e)=>{
        setCity(e.target.value)
    }
    // useEffect(()=>{callApi(cityName)},[])
    return(
        <>
        <nav className="navbar navbar-info" style={{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                <h1 className="display-3 p-5">Weather Forecasting App using React JS</h1>
                    <form className="d-flex" onSubmit={callApi}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={city} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav><br /><br />

        <div className="container my-3">
            <div className="row">
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Place</h5>
                            <p className="card-text">{data?.name}</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-danger mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Temparature</h5>
                            <p className="card-text">{((data?.main?.temp)-273).toFixed(2)} °C</p>    
                        </div>
                    </div>
                </div>                      
                <div className="col-3">
                    <div className="card text-dark bg-warning mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Temp Max</h5>
                            <p className="card-text">{((data?.main?.temp_max)-273).toFixed(2)} °C</p>    
                        </div>
                    </div>
                </div>                
                <div className="col-3">
                    <div className="card text-dark bg-info mb-3" style={{width: "18rem"}}>
                            <div className="card-body">
                            <h5 className="card-title">Temp Min</h5>
                            <p className="card-text">{((data?.main?.temp_min)-273).toFixed(2)} °C</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container my-3">
            <div className="row">
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Wind Speed</h5>
                            <p className="card-text">{data?.wind?.speed} MPH</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-danger mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Humidity</h5>
                            <p className="card-text">{data?.main?.humidity} %</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-dark bg-warning mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Feels Like</h5>
                            <p className="card-text">{((data?.main?.feels_like)-273).toFixed(2)} °C</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-dark bg-info mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Country</h5>
                            <p className="card-text">{data?.sys?.country}</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container my-3">
            <div className="row">
                <div className="col-3">
                    <div className="card text-white bg-primary mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Longitude</h5>
                            <p className="card-text">{data?.coord?.lon}</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-white bg-danger mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Latitude</h5>
                            <p className="card-text">{data?.coord?.lat}</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-dark bg-warning mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Sunrise</h5>
                            <p className="card-text">{data?.sys?.sunrise}</p>    
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card text-dark bg-info mb-3" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Sunset</h5>
                            <p className="card-text">{data?.sys?.sunset}</p>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default WeatherApp;