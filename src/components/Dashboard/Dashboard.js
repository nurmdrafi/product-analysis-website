import React, { useEffect, useState } from "react";
import {
  LineChart,
  BarChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  PieChart,
  Pie,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);

  return (
    <div className="dashboard container">
      <h1 className="text-center">DashBoard</h1>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 my-5">
        <div className="col">
          <h5 className="text-center text-uppercase text-primary text-opacity-75 my-3">
            month wise sell
          </h5>
          <LineChart width={400} height={400} data={charts}>
            <Line
              type="monotone"
              dataKey="sell"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>

        <div className="col">
          <h5 className="text-center text-uppercase text-primary text-opacity-75 my-3">
            Investment vs Revenue
          </h5>
          <LineChart
            width={400}
            height={400}
            data={charts}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              layout="vertical"
              dataKey="investment"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
              strokeWidth={2}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
        </div>
        <div className="col">
          <h5 className="text-center text-uppercase text-primary text-opacity-75 my-3">
            Investment vs Revenue
          </h5>
          <BarChart
            width={400}
            height={400}
            data={charts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="col">
          <h5 className="text-center text-uppercase text-primary text-opacity-75 my-3">
            Investment vs Revenue
          </h5>
          <PieChart width={400} height={400}>
            <Pie
              data={charts}
              dataKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={charts}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
