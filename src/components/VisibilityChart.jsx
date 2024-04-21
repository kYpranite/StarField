import {
  AreaChart,
  Label,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
} from "recharts";

import { useState } from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const payloadData = payload[0]["payload"];
    return (
      <div className="bg-gray-600 rounded-xl h-50 w-13 bg-opacity-80 text-sm p-2">
        <p>
          <span className="font-bold">Time:</span> {label}
        </p>
        <p>
          <span className="font-bold">Cloud Coverage:</span> {payloadData.cloud}
        </p>
        <p>
          <span className="font-bold">Humidity:</span> {payloadData.humidity}
        </p>
        <p>
          <span className="font-bold">Wind Speed:</span> {payloadData.windSpeed}
        </p>
        <p>
          <span className="font-bold">Visibility:</span>{" "}
          {payloadData.visibility}
        </p>
      </div>
    );
  }

  return null;
};

export default function VisibilityChart({ data, chartDate }) {

  return (
    <ResponsiveContainer width="100%" height="90%" className="mx-auto">
      <AreaChart
        data={Object.values(data)[chartDate]}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="time" height={45} domain={["20:00", "06:00"]}>
          <Label value="Time" position="centerBottom" dy={10} />
        </XAxis>
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={[0, 45]} // max visibility + 5
        />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine
          y={40 + 2} // max visibility + 2
          orientation="right"
          stroke="gray"
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="visibility"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
