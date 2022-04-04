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
    <div className="dashboard container d-md-flex align-items-center my-5">
      <div>
        <LineChart
          width={500}
          height={300}
          data={charts}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
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
        <h5 className="text-center my-2">Month wise Investment and Revenue</h5>
      </div>

      <div>
        <BarChart
          width={500}
          height={300}
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
  );
};

export default Dashboard;
