import { useState } from 'react'
import { useEffect } from 'react'
import FutureWeather from './FutureWeather'

const WeatherCard = (props) => {

    const [bg, setBg] = useState('')


    const bgChanger = () => {
        switch (props.forcast.weather[0].main) {
            case 'Clear':
                return '/sfontiTematici/blurry-background-vii-wallpaper-preview.jpg';
            case 'Sun':
                return '/sfontiTematici/blurry-background-vii-wallpaper-preview.jpg';
            case 'Clouds':
                return '/sfontiTematici/images.jpg';
            case 'Cover':
                return '/sfontiTematici/images.jpg';
            case 'Mist':
                return '/sfontiTematici/blur-wallpapers-2.jpg';
            case 'Fog':
                return '/sfontiTematici/blur-wallpapers-2.jpg';
            case 'Drizzle':
                return '/sfontiTematici/blurry-blue-background-ii-wallpaper-preview.jpg';
            case 'Rain':
                return '/sfontiTematici/blurry-blue-background-ii-wallpaper-preview.jpg';
            default:
                return '/depositphotos_43185445-stock-photo-color-blurred-background.jpg';
        }
    }

    useEffect(() => {

        setBg(bgChanger())
        console.log(bg);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.forcast.weather[0].main])



    return (
        <div>
            <div className="card" style={{ backgroundImage: `url(${bg})` }}>
                <div className="icon">
                    <h1>{props.forcast.name}</h1>
                    <img src={'http://openweathermap.org/img/wn/' + props.forcast.weather[0].icon + '@2x.png'} alt="icon" />
                </div>
                <h2>{props.forcast.weather[0].description}</h2>
                <div className="temp">
                    <div>
                        <p>Min</p>
                        <h3>{(props.forcast.main.temp_min - 273.15).toFixed(0)}°</h3>
                    </div>

                    <div className="mainTemp">
                        <div>
                            <p>Temperatura</p>
                            <h2>{(props.forcast.main.temp - 273.15).toFixed(0)}°</h2>
                        </div>

                        <div>
                            <h4>Umidità {(props.forcast.main.humidity).toFixed(0)} kg/m³</h4>
                            <h4>Percepita {(props.forcast.main.feels_like - 273.15).toFixed(0)}°</h4>
                        </div>
                    </div>
                    <div>
                        <p>Max</p>
                        <h3>{(props.forcast.main.temp_max - 273.15).toFixed(0)}°</h3>
                    </div>
                </div>

                <div className='future'>
                    <FutureWeather future={props.future} />
                </div>
            </div>

        </div>
    )
}

export default WeatherCard