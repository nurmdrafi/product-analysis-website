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
    <div className="dashboard container ">
      <h1 className="text-center">DashBoard</h1>
      <div className="row my-5">
        <div className="col-md-6 col-sm-12">
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
            />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Legend />
            <Tooltip />
          </LineChart>
          <h5 className="text-center my-2">
            Month wise Investment and Revenue
          </h5>
        </div>

        <div className="col-md-6 col-sm-12">
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sell" fill="#82ca9d" />
          </BarChart>
          <h5 className="text-center my-2">Month wise sell</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
