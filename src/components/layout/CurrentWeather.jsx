import CurrentCardDetail from "../common/current/CurrentCardsDetail";
import CurrentWeatherCard from "../common/current/CurrentWeatherCard";
const CurrentWeather = ({current, cityInfo}) => {
    return ( <>
    <section className="current-weather-container lg:w-200 lg:h-110 lg:gap-6 gap-5">
   <CurrentWeatherCard current={current} cityInfo={cityInfo}/>
   <CurrentCardDetail current={current}/>
    </section>
    </> );
}
 
export default CurrentWeather;