import CurrentCardDetail from "../common/current/CurrentCardsDetail";
import CurrentWeatherCard from "../common/current/CurrentWeatherCard";
const CurrentWeather = ({current, cityInfo, loading, error}) => {
    
    return ( <>
    <section className="current-weather-container lg:w-200 lg:h-110 lg:gap-6 gap-5">
   <CurrentWeatherCard current={current} cityInfo={cityInfo} loading={loading} error={error}/>
   <CurrentCardDetail current={current}/>
    </section>
    </> );
}
 
export default CurrentWeather;