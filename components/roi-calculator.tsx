"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export default function ROICalculator() {
  const [messagesPerDay, setMessagesPerDay] = useState([50])
  const [hourlyRate, setHourlyRate] = useState([15])
  const [results, setResults] = useState({
    currentCost: 0,
    aiCost: 297,
    monthlySavings: 0,
    annualSavings: 0,
    roi: 0,
    timeRecovered: 0,
  })

  useEffect(() => {
    const messages = messagesPerDay[0]
    const rate = hourlyRate[0]

    // Assumptions: 2 minutes per message, 22 working days per month
    const minutesPerMessage = 2
    const workingDaysPerMonth = 22
    const monthlyMessages = messages * workingDaysPerMonth
    const monthlyMinutes = monthlyMessages * minutesPerMessage
    const monthlyHours = monthlyMinutes / 60
    const currentMonthlyCost = monthlyHours * rate

    const aiMonthlyCost = 297
    const monthlySavings = currentMonthlyCost - aiMonthlyCost
    const annualSavings = monthlySavings * 12
    const roi = ((annualSavings - aiMonthlyCost * 12) / (aiMonthlyCost * 12)) * 100

    setResults({
      currentCost: Math.round(currentMonthlyCost),
      aiCost: aiMonthlyCost,
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      roi: Math.round(roi),
      timeRecovered: Math.round(monthlyHours),
    })
  }, [messagesPerDay, hourlyRate])

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6">
        {/* Inputs */}
        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
              ¿Cuántos mensajes recibes por día?
            </label>
            <Slider
              value={messagesPerDay}
              onValueChange={setMessagesPerDay}
              max={200}
              min={10}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
              <span>10</span>
              <span className="font-semibold text-indigo-600">{messagesPerDay[0]} mensajes/día</span>
              <span>200+</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
              ¿Cuánto pagas por hora de atención?
            </label>
            <Slider value={hourlyRate} onValueChange={setHourlyRate} max={50} min={8} step={1} className="w-full" />
            <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
              <span>$8</span>
              <span className="font-semibold text-indigo-600">${hourlyRate[0]}/hora</span>
              <span>$50+</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <motion.div
          key={`${messagesPerDay[0]}-${hourlyRate[0]}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 sm:space-y-4"
        >
          {/* Current vs AI Cost */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 text-red-600 mx-auto mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-red-700">${results.currentCost}</div>
              <div className="text-xs sm:text-sm text-red-600">Costo actual/mes</div>
            </div>

            <div className="text-center p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 mx-auto mb-2" />
              <div className="text-lg sm:text-2xl font-bold text-green-700">${results.aiCost}</div>
              <div className="text-xs sm:text-sm text-green-600">Con Agente IA</div>
            </div>
          </div>

          {/* Savings */}
          <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
            <DollarSign className="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2 sm:mb-3" />
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
              ${results.monthlySavings.toLocaleString()}
            </div>
            <div className="text-base sm:text-lg opacity-90">Ahorro mensual</div>
            <div className="text-xs sm:text-sm opacity-75 mt-1 sm:mt-2">
              ${results.annualSavings.toLocaleString()} al año
            </div>
          </div>

          {/* Additional Metrics */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="text-center p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-lg sm:text-xl font-bold text-blue-700">{results.timeRecovered}h</div>
              <div className="text-xs sm:text-sm text-blue-600">Tiempo recuperado/mes</div>
            </div>

            <div className="text-center p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-200">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-lg sm:text-xl font-bold text-purple-700">{results.roi}%</div>
              <div className="text-xs sm:text-sm text-purple-600">ROI anual</div>
            </div>
          </div>

          {/* Call to Action */}
          {results.monthlySavings > 0 && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-3 sm:p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white"
            >
              <div className="font-bold text-base sm:text-lg mb-1">
                ¡Podrías ahorrar ${results.annualSavings.toLocaleString()} este año!
              </div>
              <div className="text-xs sm:text-sm opacity-90">
                Recuperas la inversión en {Math.ceil(results.aiCost / results.monthlySavings)} mes
                {Math.ceil(results.aiCost / results.monthlySavings) > 1 ? "es" : ""}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
