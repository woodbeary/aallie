'use client'

import { LineChart, BarChart, AreaChart, Tooltip } from "@tremor/react"
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const customColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

interface ChartProps {
  data: any[]
}

export function CustomLineChart({ data }: ChartProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LineChart
        className={isMobile ? "h-[200px]" : "h-[300px]"}
        data={data}
        index="name"
        categories={["value"]}
        colors={customColors}
        yAxisWidth={40}
        showAnimation={true}
        curveType="natural"
        showLegend={false}
        showGridLines={false}
        showYAxis={false}
        showXAxis={true}
        startEndOnly={true}
      >
        <Tooltip />
      </LineChart>
    </motion.div>
  )
}

export function CustomBarChart({ data }: ChartProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BarChart
        className={isMobile ? "h-[200px]" : "h-[300px]"}
        data={data}
        index="name"
        categories={["sales", "profit"]}
        colors={customColors}
        yAxisWidth={40}
        showAnimation={true}
        showLegend={true}
        showGridLines={false}
        showYAxis={false}
        showXAxis={true}
        startEndOnly={true}
      >
        <Tooltip />
      </BarChart>
    </motion.div>
  )
}

export function CustomAreaChart({ data }: ChartProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AreaChart
        className={isMobile ? "h-[200px]" : "h-[300px]"}
        data={data}
        index="date"
        categories={["revenue", "expenses"]}
        colors={["#3b82f6", "#ef4444"]}
        yAxisWidth={40}
        showAnimation={true}
        showLegend={true}
        showGridLines={false}
        showYAxis={false}
        showXAxis={true}
        startEndOnly={true}
        valueFormatter={(number) => `$${number.toLocaleString()}`}
      >
        <Tooltip />
      </AreaChart>
    </motion.div>
  )
}
