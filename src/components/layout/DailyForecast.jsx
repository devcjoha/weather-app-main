import DailyCard from "../common/daily/DailyCard";

const DailyForecast = ({ daily, cityInfo, isDay }) => {
  return (
    <>
      <section className="daily-section flex flex-row flex-wrap lg:w-200 lg:h-25  lg:gap-6 ">
        <DailyCard daily={daily} cityInfo={cityInfo} isDay={isDay} />
      </section>
    </>
  );
};

export default DailyForecast;