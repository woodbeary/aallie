'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Users, BarChart, PieChart, DollarSign, FileText } from "lucide-react"
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import { CustomLineChart, CustomBarChart, CustomAreaChart } from "@/components/ui/charts"
import { motion } from "framer-motion"

export function LandingPageComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const mockLineData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 500 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 600 },
  ]

  const mockBarData = [
    { name: 'Product A', sales: 900, profit: 400 },
    { name: 'Product B', sales: 1200, profit: 600 },
    { name: 'Product C', sales: 1500, profit: 800 },
  ]

  const mockAreaData = [
    { date: '2023-01-01', revenue: 2000, expenses: 1800 },
    { date: '2023-02-01', revenue: 2200, expenses: 1900 },
    { date: '2023-03-01', revenue: 2400, expenses: 2000 },
    { date: '2023-04-01', revenue: 2600, expenses: 2100 },
    { date: '2023-05-01', revenue: 2800, expenses: 2200 },
    { date: '2023-06-01', revenue: 3000, expenses: 2300 },
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#e8f0ed] to-white">
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart className="text-[#2c4a3e]" size={32} />
            <span className="text-xl font-bold text-[#2c4a3e]">aallie.com</span>
          </div>
          <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] font-bold" onClick={() => window.location.href = 'https://aallie-v1.onrender.com'}>
            Start Free Trial
          </Button>
        </div>
      </nav>

      <main className="flex-grow">
        <motion.section 
          className="py-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c4a3e]">
                  Build Financial Plans in Minutes
                </h1>
                <p className="text-xl mb-8 text-[#4a7a69]">
                  AI-powered, customized financial forecasts. No financial expertise required.
                </p>
                <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold" onClick={() => window.location.href = 'https://aallie-v1.onrender.com'}>
                  Create Your Financial Plan Now
                </Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/1.png"
                  alt="Financial planning dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#2c4a3e]">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Answer Questions", icon: ChevronRight, description: "Our AI guides you through simple financial questions" },
                { title: "AI Generates Plan", icon: BarChart, description: "We create a custom financial plan tailored to your business" },
                { title: "Get Insights", icon: DollarSign, description: "Use your professional financial plan to make informed decisions" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e8f0ed] rounded-full p-4 inline-block mb-4">
                    <step.icon className="text-[#2c4a3e]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c4a3e]">{step.title}</h3>
                  <p className="text-[#4a7a69]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#2c4a3e]">
              Visualize Your Financial Future
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Revenue Growth</h3>
                <CustomLineChart data={mockLineData} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Product Performance</h3>
                <CustomBarChart data={mockBarData} />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Revenue vs Expenses</h3>
                <CustomAreaChart data={mockAreaData} />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#2c4a3e]">
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Comprehensive Financial Plan", icon: FileText, description: "Detailed projections covering all aspects of your finances" },
                { title: "Cash Flow Forecasts", icon: PieChart, description: "Accurate predictions to manage your cash effectively" },
                { title: "Customized Strategies", icon: ChevronRight, description: "Tailored financial advice for your specific industry" },
                { title: "Export Options", icon: DollarSign, description: "Download as PDF or Excel spreadsheet" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-[#e8f0ed] rounded-full p-2 mr-4">
                    <feature.icon className="text-[#2c4a3e]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2c4a3e]">{feature.title}</h3>
                    <p className="text-[#4a7a69]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-[#2c4a3e] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Financial Future?</h2>
                <p className="text-xl mb-8">Join thousands of businesses who've already created winning financial plans.</p>
                <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold" onClick={() => window.location.href = 'https://aallie-v1.onrender.com'}>
                  Create Your Financial Plan Now
                </Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <Image
                  src="/3.png"
                  alt="Financial success"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#2c4a3e] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 aallie.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
