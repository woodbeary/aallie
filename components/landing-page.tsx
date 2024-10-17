'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Users, BarChart, PieChart, DollarSign, FileText } from "lucide-react"
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import { CustomLineChart } from "@/components/ui/line-chart"

export function LandingPageComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const mockData = [
    { name: 'Jan', value: 100 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 200 },
    { name: 'Apr', value: 500 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 600 },
  ]

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
        <section className="py-20">
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
        </section>

        <section className="py-16 bg-white">
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
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#2c4a3e]">
              Visualize Your Financial Future
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <Image
                  src="/2.png"
                  alt="Financial visualization"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
                <CustomLineChart data={mockData} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
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
        </section>

        <section className="py-16 bg-[#2c4a3e] text-white">
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
        </section>
      </main>

      <footer className="bg-[#2c4a3e] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 aallie.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
