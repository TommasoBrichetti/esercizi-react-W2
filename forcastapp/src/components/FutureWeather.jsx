import { parseISO, format } from 'date-fns'
import {BiArrowFromLeft} from 'react-icons/bi'
import {BiArrowFromRight} from 'react-icons/bi'

const FutureWeather = (props) =>{

    const slideright = () => { document.getElementById('slider').scrollLeft += 190 }
    const slideleft = () => { document.getElementById('slider').scrollLeft -= 190 }

    return (
        <div className='future' id='slider'>
            <div className='contols'>
            <button onClick={slideleft}><BiArrowFromRight/></button>
            <button onClick={slideright}><BiArrowFromLeft/></button></div>
            {
                props.future.map((m)=>{
                    return(
                        <div key={m.dt_txt} className='fcard'>
                            <p>{ format(parseISO( m.dt_txt ),'d MM')}</p>
                            <img src={'http://openweathermap.org/img/wn/'+m.weather[0].icon+'@2x.png'} alt="icon" />
                            <p>{m.weather[0].description}</p>
                            <p>{(m.main.temp -273.15).toFixed(0)}°</p>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default FutureWeather