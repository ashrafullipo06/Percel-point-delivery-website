import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts"; // Ensure you have installed react-apexcharts and apexcharts
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Heading from "../../../components/Heading";
import useUserRole from "../../../hooks/useUserRole";
import Statistics from "../../Home/Statistics/Statistics";
import AdminStatistic from "../../../components/AdminStatistic";

const ApexChart = () => {
  const axiosPublic = useAxiosPublic();
  const { userRole } = useUserRole();
  const { data = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosPublic.get("/admin-stats");
      return res.data.totalDeliveredStats; // Assuming this contains the stats
    },
  });

  const [state, setState] = useState({
    series: [
      {
        data: [], // Count values (Y-axis) will be updated dynamically
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log("Chart clicked:", chart, w, e);
          },
        },
      },
      colors: ["#1E90FF", "#FF6347", "#32CD32", "#FFD700"], // Example colors
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [], // X-axis (dates) will be updated dynamically
        labels: {
          style: {
            colors: ["#1E90FF", "#FF6347", "#32CD32", "#FFD700"], // Label colors
            fontSize: "12px",
          },
        },
      },
    },
  });

  // Update chart data and categories when API data is available
  useEffect(() => {
    if (data.length > 0) {
      const dates = data.map((d) => d._id); // Use `_id` for x-axis
      const counts = data.map((c) => c.count); // Use `count` for y-axis

      setState((prevState) => ({
        ...prevState,
        series: [
          {
            data: counts, // Update the series data dynamically
          },
        ],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: dates, // Update the x-axis categories dynamically
          },
        },
      }));
    }
  }, [data]);
  // console.log(userRole);

  return (
    <div>
      {userRole === "admin" && (
        <div>
          <Heading title="Booking Count By Date" />
          <div id="chart">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="bar"
              height={350}
            />
          </div>
          <Statistics />
          <AdminStatistic />
        </div>
      )}
    </div>
  );
};

export default ApexChart;
