'use client'

import { LineChart, Line } from "@tremor/react"

interface LineChartProps {
  data: { name: string; value: number }[]
}

export function CustomLineChart({ data }: LineChartProps) {
  return (
    <LineChart
      className="h-[400px]"
      data={data}
      index="name"
      categories={["value"]}
      colors={["#2c4a3e"]}
      yAxisWidth={40}
    >
      <Line />
    </LineChart>
  )
}
