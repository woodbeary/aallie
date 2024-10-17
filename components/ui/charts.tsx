'use client'

import { LineChart, BarChart, AreaChart } from "@tremor/react"

interface ChartProps {
  data: any[]
}

export function CustomLineChart({ data }: ChartProps) {
  return (
    <LineChart
      className="h-[300px]"
      data={data}
      index="name"
      categories={["value"]}
      colors={["#2c4a3e"]}
      yAxisWidth={40}
      showAnimation={true}
    />
  )
}

export function CustomBarChart({ data }: ChartProps) {
  return (
    <BarChart
      className="h-[300px]"
      data={data}
      index="name"
      categories={["sales", "profit"]}
      colors={["#5f8d7c", "#f0c14b"]}
      yAxisWidth={40}
      showAnimation={true}
    />
  )
}

export function CustomAreaChart({ data }: ChartProps) {
  return (
    <AreaChart
      className="h-[300px]"
      data={data}
      index="date"
      categories={["revenue", "expenses"]}
      colors={["#2c4a3e", "#f0c14b"]}
      yAxisWidth={40}
      showAnimation={true}
    />
  )
}
