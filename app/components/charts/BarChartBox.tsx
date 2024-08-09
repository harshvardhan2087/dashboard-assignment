import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md p-6 h-full">
      <h1 className="text-xl font-semibold mb-4">{props.title}</h1>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px', color: 'white' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;






