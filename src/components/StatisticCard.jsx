import CountUp from "react-countup";
const StatisticCard = ({ img, countNumber, title }) => {
  return (
    <div className="bg-slate-100 shadow-lg rounded-md text-center p-10  ">
      <img className="w-24 mx-auto pb-4" src={img} alt="" />
      <CountUp
        className="text-8xl text-red-700 font-bold "
        end={countNumber}
        duration={5}
      />
      <p className="text-2xl font-semibold">{title}</p>
    </div>
  );
};

export default StatisticCard;
