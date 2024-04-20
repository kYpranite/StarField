import { LineChart, Line, ResponsiveContainer } from "recharts";

export default function VisibilityChart() {
  const dummyData = [
    { time: 0, visibility: 10 },
    { time: 2, visibility: 20 },
    { time: 3, visibility: 40 },
    { time: 4, visibility: 30 },
    { time: 5, visibility: 20 },
    { time: 6, visibility: 0 },
  ];
  return (
    <ResponsiveContainer width="80%" height="40%" className="border-white border-2 mx-auto">
      <LineChart data={dummyData}>
        <Line type="monotone" dataKey="visibility" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
