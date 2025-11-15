import HourlyCard from "../common/hourly/HourlyCard";

const HourlyForecast = ({hourly}) => {
    return ( <>
    <section className="hourly-container flex lg:w-95 w-full h-full p-5 border-transparent rounded-lg bg-card-dark">
<HourlyCard hourly={hourly}/>
    </section>
    </> );
}
 
export default HourlyForecast;