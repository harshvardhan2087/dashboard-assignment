"use client";
import BarChartBox from '@/app/components/charts/BarChartBox';
import BigChartBox from '@/app/components/charts/BigChartBox';
import ChartBox from '@/app/components/charts/ChartBox';
import PieChartBox from '@/app/components/charts/PieChartBox';
import TopBox from '@/app/components/charts/TopBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../../data/data"

const Home = () => {
  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md col-span-1 row-span-3">
        <TopBox />
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <ChartBox {...chartBoxUser}/>
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <ChartBox {...chartBoxProduct}/>
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md col-span-1 row-span-3">
        <PieChartBox />
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <ChartBox {...chartBoxConversion}/>
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <ChartBox {...chartBoxRevenue}/>
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md col-span-2 row-span-2 md:flex">
        <BigChartBox />
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <BarChartBox {...barChartBoxVisit }/>
      </div>
      <div className="flex flex-col p-4 bg-blue-50 border border-blue-100 rounded-lg shadow-md">
        <BarChartBox {...barChartBoxRevenue}/>
      </div>
    </div>
  )
}

export default Home