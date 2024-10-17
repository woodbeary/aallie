'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart, PieChart, DollarSign, FileText } from "lucide-react"
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import { CustomLineChart, CustomBarChart, CustomAreaChart } from "@/components/ui/charts"
import { motion } from "framer-motion"

export function LandingPageComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const ctaLink = 'https://aallie-v1.onrender.com'

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
    <div className="flex flex-col min-h-screen bg-[#f5f7f6]">
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart className="text-[#2c4a3e]" size={32} />
            <span className="text-xl font-bold text-[#2c4a3e]">aallie</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href={ctaLink} className="text-[#2c4a3e] hover:text-[#f0c14b]">Features</a>
            <a href={ctaLink} className="text-[#2c4a3e] hover:text-[#f0c14b]">Support</a>
            <a href={ctaLink} className="text-[#2c4a3e] hover:text-[#f0c14b]">Pricing</a>
            <a href={ctaLink} className="text-[#2c4a3e] hover:text-[#f0c14b]">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href={ctaLink} className="text-[#2c4a3e] hover:text-[#f0c14b]">Login</a>
            <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] font-bold" onClick={() => window.location.href = ctaLink}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <motion.section 
          className="py-20 bg-gradient-to-b from-[#f5f7f6] to-white"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c4a3e]">
                  AI Enhanced Business Plans
                </h1>
                <p className="text-xl mb-8 text-[#4a7a69]">
                  Transform your vision into a detailed plan using our cutting-edge platform. Just answer the questions, we'll do the rest.
                </p>
                <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold" onClick={() => window.location.href = ctaLink}>
                  Start Free Trial
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/3.png"
                  alt="AI Enhanced Business Plans"
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
                { title: "AI Generates Plan", icon: BarChart, description: "We create a custom business plan tailored to your needs" },
                { title: "Get Insights", icon: DollarSign, description: "Use your professional plan to make informed decisions" }
              ].map((step, index) => (
                <div key={index} className="text-center bg-[#f5f7f6] p-6 rounded-lg shadow-md">
                  <div className="bg-[#2c4a3e] rounded-full p-4 inline-block mb-4">
                    <step.icon className="text-[#f0c14b]" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#2c4a3e]">{step.title}</h3>
                  <p className="text-[#4a7a69]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="py-16 bg-[#f5f7f6]"
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
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Revenue Growth</h3>
                <CustomLineChart data={mockLineData} />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Product Performance</h3>
                <CustomBarChart data={mockBarData} />
              </div>
              <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#2c4a3e]">Revenue vs Expenses</h3>
                <CustomAreaChart data={mockAreaData} />
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
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Comprehensive Financial Plan", icon: FileText, description: "Detailed projections covering all aspects of your finances" },
                { title: "Cash Flow Forecasts", icon: PieChart, description: "Accurate predictions to manage your cash effectively" },
                { title: "Customized Strategies", icon: ChevronRight, description: "Tailored financial advice for your specific industry" },
                { title: "Export Options", icon: DollarSign, description: "Download as PDF or Excel spreadsheet" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start bg-[#f5f7f6] p-6 rounded-lg">
                  <div className="bg-[#2c4a3e] rounded-full p-2 mr-4">
                    <feature.icon className="text-[#f0c14b]" size={24} />
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
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Financial Future?</h2>
            <p className="text-xl mb-8">Join thousands of businesses who've already created winning financial plans.</p>
            <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold" onClick={() => window.location.href = ctaLink}>
              Create Your Financial Plan Now
            </Button>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#2c4a3e] text-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <BarChart className="text-[#f0c14b] inline-block mr-2" size={24} />
              <span className="text-xl font-bold">aallie</span>
            </div>
            <div className="flex space-x-4">
              <a href={ctaLink} className="hover:text-[#f0c14b]">Facebook</a>
              <a href={ctaLink} className="hover:text-[#f0c14b]">Instagram</a>
              <a href={ctaLink} className="hover:text-[#f0c14b]">LinkedIn</a>
              <a href={ctaLink} className="hover:text-[#f0c14b]">YouTube</a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 aallie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
