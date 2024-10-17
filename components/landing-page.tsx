'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Users, BarChart, PieChart, DollarSign, FileText } from "lucide-react"
import { useMediaQuery } from 'react-responsive'

export function LandingPageComponent() {
  const isMobile = useMediaQuery({ maxWidth: 767 })

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#e8f0ed] to-white">
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BarChart className="text-[#2c4a3e]" size={32} />
            <span className="text-xl font-bold text-[#2c4a3e]">aallie.com</span>
          </div>
          <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] font-bold">
            Start Free Trial
          </Button>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c4a3e]">
                Create Your Business Plan in Minutes
              </h1>
              <p className="text-xl mb-8 text-[#4a7a69]">
                AI-powered, customized plans. No typing required.
              </p>
              <div className="flex justify-center items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="text-[#2c4a3e] mr-1" size={20} />
                  <span className="font-semibold">24,988 Users</span>
                </div>
              </div>
              <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold">
                Start Your Free Plan Now
              </Button>
              <p className="mt-4 text-sm text-[#4a7a69]">No credit card required</p>
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
                { title: "Answer Questions", icon: ChevronRight, description: "Our AI guides you through simple multiple-choice questions" },
                { title: "AI Generates Plan", icon: BarChart, description: "We create a custom business plan tailored to your needs" },
                { title: "Get Funded", icon: DollarSign, description: "Use your professional plan to attract investors and secure loans" }
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
              What You'll Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Complete Business Plan", icon: FileText, description: "30+ sections covering all aspects of your business" },
                { title: "Financial Forecasts", icon: PieChart, description: "Detailed projections to impress investors" },
                { title: "Customized Strategies", icon: ChevronRight, description: "Tailored advice for your specific industry" },
                { title: "Export Options", icon: DollarSign, description: "Download as PDF or Word document" }
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
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business Journey?</h2>
            <p className="text-xl mb-8">Join thousands of entrepreneurs who've already created winning business plans.</p>
            <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold">
              Create Your Free Plan Now
            </Button>
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
