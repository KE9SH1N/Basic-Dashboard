import React from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './Chart.scss'


const data = [
  {name: 'January', total: 800},
  { name: 'February', total: 1100 },
  { name: 'March', total: 900 },
  { name: 'April', total: 500 },
  { name: 'June', total: 800 },
  { name: 'July', total: 500 },
  { name: 'August', total: 200 },
  { name: 'September', total: 550 },
  { name: 'October', total: 560 },
  { name: 'November', total: 1000 },
  { name: 'December', total: 100 },
];


const Chart = ({aspect, title}) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height="100%" aspect = {aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="name" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="total" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart