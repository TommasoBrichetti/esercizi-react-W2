import {  useState  } from 'react'
import {   useEffect } from 'react'
import WeatherCard from './WeatherCard'
import {FcGlobe} from 'react-icons/fc'

const LandingPage = (props) =>{

    const [location, setLocation] = useState('Milano')
    const [forcast, setForcast] = useState(null)
    const [lat, setLat] = useState('Milano')
    const [long, setLong] = useState('Milano')
    const [future, setFuture] = useState([])


    //? FETCH

    const getWeather = async (e) => {
        e.preventDefault()
        console.log(location);
        //fetch
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf6a27051e735bbfd76398e180ced7e4&lang=it`)
            console.log(response)

            if (response.ok) {
                let weather = await response.json();
                console.log(weather)

                setForcast(
                    weather
                )

            } else {
                alert('city not found')
            }
        } catch (error) {
            alert(error)
        }
        futureWeather()
    }

    const firstLoad = async () =>{
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf6a27051e735bbfd76398e180ced7e4&lang=it`)
            console.log(response)

            if (response.ok) {
                let weather = await response.json();
                console.log(weather)

                setForcast(
                    weather
                )

            } else {
                alert('city not found')
            }
        } catch (error) {
            alert(error)
        }
        futureWeather()
    }


    const getWeatherFromCords = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=cf6a27051e735bbfd76398e180ced7e4&lang=it`)
            console.log(response)

            if (response.ok) {
                let weather = await response.json();
                console.log(weather)

                setForcast(
                    weather
                )

            } else {
                alert('city not found')
            }
        } catch (error) {
            alert(error)
        }
        getFutureWeatherFromCords()
    }
    const getFutureWeatherFromCords = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=cf6a27051e735bbfd76398e180ced7e4&lang=it`)
            console.log(response)

            if (response.ok) {
                let weather = await response.json();
                console.log(weather)

                setFuture(
                    weather.list
                )

            } else {
                alert('city not found')
            }
        } catch (error) {
            alert(error)
        }
    }
    

    const futureWeather = async () => {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=cf6a27051e735bbfd76398e180ced7e4&lang=it`)
            console.log(response)

            if (response.ok) {
                let weather = await response.json();
                console.log(weather)

                setFuture(
                    weather.list
                )

            } else {
                alert('city not found')
            }
        } catch (error) {
            alert(error)
        }
    }


//!________________________________________________________________________________________________

    const geolocalizzazione = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            alert("La geolocalizzazione non è supportata da questo browser.");
        }
    }

    const showPosition = (position) => {
        console.log("Latitude: " + position.coords.latitude +
        "Longitude: " + position.coords.longitude)

        setLat(
            position.coords.latitude
        )
        setLong(
            position.coords.longitude
        )
        getWeatherFromCords()
    }

    useEffect(() => {
        firstLoad()
        console.log('fatta');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <div className='landing'>
            <div className='nav'>
                <img src="/frog-design-logo-png-transparent.png" width={50} alt="" />
            <form onSubmit={getWeather}>
                <input className='input' type="text" value={location}
                    onChange={(e) =>
                        setLocation(e.target.value )
                    }/>
                <button className='button' type="submit">Sech</button>
            </form>
            <button onClick={geolocalizzazione}> <FcGlobe/> </button>
            </div>
            
            <div>
            {
                forcast !== null &&
                (
                    <WeatherCard forcast={forcast} future={future}/>
                )
            }
            </div>
        </div>
    )
}

export default LandingPage