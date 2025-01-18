import StatisticCard from "../../../components/StatisticCard";
import booked from "../../../assets/stats/booked.png";
import delivery from "../../../assets/stats/delivery.png";
import users from "../../../assets/stats/users.png";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Statistics = () => {
  const axiosPublic = useAxiosPublic();
  const { data = {} } = useQuery({
    queryKey: ["home-stats"],
    queryFn: async () => {
      const res = await axiosPublic("/home-stats");
      return res.data;
    },
  });
  console.log(data);
  return (
    <div className="grid md:grid-cols-3 gap-8 ">
      <StatisticCard
        img={booked}
        countNumber={data.totalBooked}
        title="Total Booked"
      />
      <StatisticCard
        img={delivery}
        countNumber={data.totlaDeliverd}
        title="Percel Delivered"
      />
      <StatisticCard
        img={users}
        countNumber={data.totalUser}
        title="Registerd Users"
      />
    </div>
  );
};

export default Statistics;
