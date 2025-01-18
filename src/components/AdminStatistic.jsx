import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const AdminStatistic = () => {
  const axiosPublic = useAxiosPublic();

  // Fetch the data using react-query
  const { data = {} } = useQuery({
    queryKey: ["home-stats"],
    queryFn: async () => {
      const res = await axiosPublic("/home-stats");
      return res.data;
    },
  });

  // Destructure totalBooked and totlaDeliverd from data
  const { totalBooked = 0, totlaDeliverd = 0 } = data; // Fixed typo here

  // Set chart state
  const [state, setState] = useState({
    series: [
      {
        name: "Stats", // Legend for series
        data: [], // Data will be updated dynamically
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["Total Booked", "Total Delivered"], // Categories for bars
      },
    },
  });

  // Update chart state when data changes
  useEffect(() => {
    if (totalBooked !== undefined && totlaDeliverd !== undefined) {
      // Fixed typo here
      setState((prevState) => ({
        ...prevState,
        series: [
          {
            name: "Stats",
            data: [totalBooked, totlaDeliverd], // Populate with API data
          },
        ],
      }));
    }
  }, [totalBooked, totlaDeliverd]); // Fixed typo here

  return (
    <div>
      <h1>Admin Statistics</h1>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={430}
        />
      </div>
    </div>
  );
};

export default AdminStatistic;
