import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row h-full bg-white border border-gray-200 rounded-lg shadow-lg p-6">
     
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div className="flex items-center gap-4">
          
          <span className="text-lg font-medium">{props.title}</span>
        </div>
        <h1 className="text-2xl font-semibold">{props.number}</h1>
        
      </div>
      

      <div className="flex-1 flex flex-col justify-between">
        <div className="w-full h-60">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 30 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col items-end mt-4 text-right">
          <span
            className="text-2xl font-bold"
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}%
          </span>
          <span className="text-sm text-gray-500">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;











