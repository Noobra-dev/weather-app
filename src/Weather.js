import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [data, setData] = useState("")
    const [city, setCity] = useState({})
    const [cityName, setCityName] = useState([])
    const weatherApi = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data}&units=metric&APPID=d8d3f8d3bedcf8adbc2af7b48e6ca3d4`)
            .then(
                (res) => {
                    console.log(res.data);
                    setCity(res.data);
                    setData("");
                }
            )
            .catch(
                (err) => { console.log(err) }
            )
    }


    const forecastCall = () => {
        // e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${data}&units=metric&APPID=d8d3f8d3bedcf8adbc2af7b48e6ca3d4`)
            .then(
                (res) => {
                    console.log(res.data)
                    setCityName(res.data.list);
                    setData("");

                }
            )
            .catch(
                (err) => console.log(err)
            )
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Weather App</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <p className="nav-link active" aria-current="page">Forecast</p>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link" href="https://openweathermap.org/api" target='_blank'>API Suport</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Weather_forecasting" target='_blank'>What is Weather Forecasting?</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={weatherApi}>
                            <input className="form-control me-2" value={data} onChange={(e) => { setData(e.target.value) }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" onClick={forecastCall}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            <div className='container py-3'>
                <header>
                    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
                        <h1 class="display-4 fw-normal">Weather Forecasting App Using ReactJS</h1>
                        <p class="display-6 fw-small text-muted">Today's Weather</p><hr />
                    </div>
                </header>
                <main>
                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                                <div class="card-header py-3 text-white bg-primary border-primary">
                                    <h4 class="my-0 fw-normal">Location</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">{city?.name}<small class="text-muted fw-light">/{city?.sys?.country}</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Longitude : {city?.coord?.lon}</li>
                                        <li>Latitude : {city?.coord?.lat}</li>
                                    </ul>
                                    {/* <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-header py-3">
                                    <h4 class="my-0 fw-normal">Temparature</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">{city?.main?.temp}<small class="text-muted fw-light"> °C</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Max : {city?.main?.temp_max}</li>
                                        <li>Min : {city?.main?.temp_min}</li>
                                        <li>Feels Like : {city?.main?.feels_like}</li>
                                        <li>Pressure : {city?.main?.pressure}hPa</li>
                                    </ul>
                                    {/* <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button> */}
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm border-primary">
                                <div class="card-header py-3 text-white bg-primary border-primary">
                                    <h4 class="my-0 fw-normal">Humidity & Others</h4>
                                </div>
                                <div class="card-body">
                                    <h1 class="card-title pricing-card-title">{city?.main?.humidity}<small class="text-muted fw-light"> %</small></h1>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Speed : {city?.wind?.speed}<small class="text-muted fw-light">Km/h</small></li>
                                        <li>Degree : {city?.wind?.deg}</li>
                                        <li>{city?.weather?.main}</li>
                                        <li>Visibility : {city?.visibility}m</li>
                                        <li>Timezone : {city?.timezone}</li>
                                    </ul>
                                    {/* <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <br /><br /><br />
            <p className="display-6 fw-small text-muted text-center">5 Day / 3 Hour Forecast</p><hr /><br />

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Date & Time<small class="text-muted fw-light"> (24-h)</small></th>
                            <th scope="col">Temparature <small class="text-muted fw-light"> (°C)</small></th>
                            <th scope="col">Feels Like <small class="text-muted fw-light"> (°C)</small></th>
                            <th scope="col">Pressure <small class="text-muted fw-light"> (hPa)</small></th>
                            <th scope="col">Sea Level</th>
                            <th scope="col">Humidity <small class="text-muted fw-light"> (%)</small></th>
                            <th scope="col">Visibility <small class="text-muted fw-light"> (m)</small></th>
                            <th scope="col">Wind Speed <small class="text-muted fw-light"> (Km/h)</small></th>
                        </tr>
                    </thead>
                    {
                        cityName.map((item) => {
                            return (
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{item.dt_txt}</td>
                                            <td>{item.main.temp}</td>
                                            <td>{item.main.feels_like}</td>
                                            <td>{item.main.pressure}</td>
                                            <td>{item.main.sea_level}</td>
                                            <td>{item.main.humidity}</td>
                                            <td>{item.visibility}</td>
                                            <td>{item.wind.speed}</td>

                                        </tr>
                                    </tbody>
                                </>
                            )
                        })
                    }
                </table>
            </div>


        </>
    );
}

export default Weather;
