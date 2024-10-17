'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronRight, Star, Users, BarChart, PieChart, DollarSign, FileText, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function LandingPageComponent() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = ["Answer Questions", "AI Generates Plan", "Get Funded"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#e8f0ed] to-white">
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BarChart className="text-[#2c4a3e]" size={32} />
            <span className="text-xl font-bold text-[#2c4a3e]">aallie.com</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] font-bold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Button>
          </motion.div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="py-20 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 -z-10"
            animate={{ 
              backgroundImage: [
                'radial-gradient(circle, #e8f0ed 0%, #ffffff 100%)',
                'radial-gradient(circle, #ffffff 0%, #e8f0ed 100%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#2c4a3e] leading-tight">
                Create Your Business Plan in Minutes
              </h1>
              <p className="text-xl mb-8 text-[#4a7a69]">
                AI-powered, customized plans. No typing required.
              </p>
              <motion.div 
                className="flex justify-center items-center space-x-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
                  <Star className="text-yellow-400 mr-2" size={24} />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
                  <Users className="text-[#2c4a3e] mr-2" size={24} />
                  <span className="font-semibold">24,988 Users</span>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold transition-all duration-300">
                  Start Your Free Plan Now
                </Button>
              </motion.div>
              <p className="mt-4 text-sm text-[#4a7a69]">No credit card required</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#2c4a3e]">
              How It Works
            </h2>
            <div className="flex justify-center items-center mb-12">
              <motion.div 
                className="relative w-64 h-64"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {steps.map((step, index) => (
                  <motion.div
                    key={step}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentStep === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-[#e8f0ed] rounded-full p-6 shadow-lg">
                      {index === 0 && <ChevronRight className="text-[#2c4a3e]" size={48} />}
                      {index === 1 && <BarChart className="text-[#2c4a3e]" size={48} />}
                      {index === 2 && <DollarSign className="text-[#2c4a3e]" size={48} />}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="text-center mb-8">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentStep}
                  className="text-2xl font-semibold text-[#2c4a3e]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {steps[currentStep]}
                </motion.h3>
              </AnimatePresence>
            </div>
            <p className="text-center text-[#4a7a69] max-w-2xl mx-auto">
              Our AI guides you through simple questions, generates a custom plan, and helps you get funded.
            </p>
          </div>
        </section>

        <section ref={ref} className="py-16">
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
                <motion.div 
                  key={index}
                  className="flex items-start bg-white rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-[#e8f0ed] rounded-full p-3 mr-4">
                    <feature.icon className="text-[#2c4a3e]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#2c4a3e]">{feature.title}</h3>
                    <p className="text-[#4a7a69]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#2c4a3e] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Business Journey?</h2>
            <p className="text-xl mb-8">Join thousands of entrepreneurs who've already created winning business plans.</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-[#f0c14b] text-[#2c4a3e] hover:bg-[#e6b53d] text-lg px-8 py-3 rounded-full shadow-lg font-bold group transition-all duration-300">
                Create Your Free Plan Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
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
