'use client'

import { LineChart, BarChart, AreaChart } from "@tremor/react"

const customColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

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
      colors={[customColors[0]]}
      yAxisWidth={40}
      showAnimation={true}
      showTooltip={true}
      showLegend={false}
      curveType="monotone"
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
      colors={[customColors[1], customColors[2]]}
      yAxisWidth={40}
      showAnimation={true}
      showTooltip={true}
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
      colors={[customColors[3], customColors[4]]}
      yAxisWidth={40}
      showAnimation={true}
      showTooltip={true}
      valueFormatter={(number) => `$${number.toLocaleString()}`}
    />
  )
}
