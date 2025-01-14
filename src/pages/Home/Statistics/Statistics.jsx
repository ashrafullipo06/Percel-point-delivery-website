import StatisticCard from "../../../components/StatisticCard";
import booked from "../../../assets/stats/booked.png";
import delivery from "../../../assets/stats/delivery.png";
import users from "../../../assets/stats/users.png";

const Statistics = () => {
  return (
    <div className="grid grid-cols-3 gap-8 ">
      <StatisticCard img={booked} countNumber={100} title="Total Booked" />
      <StatisticCard img={delivery} countNumber={80} title="Percel Delivered" />
      <StatisticCard img={users} countNumber={80} title="Registerd Users" />
    </div>
  );
};

export default Statistics;
