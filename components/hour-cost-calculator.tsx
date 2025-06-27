"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Clock, DollarSign, TrendingUp, AlertTriangle, Coffee, Palette } from "lucide-react"

export default function HourCostCalculator() {
  const [hourlyRate, setHourlyRate] = useState([25])
  const [hoursResponding, setHoursResponding] = useState([4])
  const [workingDays, setWorkingDays] = useState([22])
  const [results, setResults] = useState({
    dailyCostResponding: 0,
    monthlyCostResponding: 0,
    annualCostResponding: 0,
    hoursFreedDaily: 0,
    hoursFreedMonthly: 0,
    potentialRevenue: 0,
    opportunityCost: 0,
  })

  useEffect(() => {
    const rate = hourlyRate[0]
    const hours = hoursResponding[0]
    const days = workingDays[0]

    const dailyCostResponding = rate * hours
    const monthlyCostResponding = dailyCostResponding * days
    const annualCostResponding = monthlyCostResponding * 12

    // Horas liberadas (asumiendo que el AI libera 90% del tiempo de respuestas)
    const hoursFreedDaily = hours * 0.9
    const hoursFreedMonthly = hoursFreedDaily * days

    // Potencial de ingresos con tiempo liberado (asumiendo que puede generar 1.5x su tarifa)
    const potentialRevenue = hoursFreedMonthly * rate * 1.5
    const opportunityCost = potentialRevenue - 297 // Costo del AI

    setResults({
      dailyCostResponding: Math.round(dailyCostResponding),
      monthlyCostResponding: Math.round(monthlyCostResponding),
      annualCostResponding: Math.round(annualCostResponding),
      hoursFreedDaily: Math.round(hoursFreedDaily * 10) / 10,
      hoursFreedMonthly: Math.round(hoursFreedMonthly),
      potentialRevenue: Math.round(potentialRevenue),
      opportunityCost: Math.round(opportunityCost),
    })
  }, [hourlyRate, hoursResponding, workingDays])

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3" />
            <h3 className="text-2xl font-bold mb-2">Calculadora de Costo de Oportunidad</h3>
            <p className="opacity-90">Descubre cuánto dinero pierdes respondiendo WhatsApp manualmente</p>
          </div>
        </div>

        <div className="p-6">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ¿Cuál es tu tarifa por hora de trabajo?
              </label>
              <Slider value={hourlyRate} onValueChange={setHourlyRate} max={100} min={10} step={5} className="w-full" />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>$10</span>
                <span className="font-semibold text-indigo-600">${hourlyRate[0]}/hora</span>
                <span>$100+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ¿Cuántas horas diarias respondes WhatsApp?
              </label>
              <Slider
                value={hoursResponding}
                onValueChange={setHoursResponding}
                max={8}
                min={1}
                step={0.5}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1h</span>
                <span className="font-semibold text-red-600">{hoursResponding[0]}h/día</span>
                <span>8h+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">¿Cuántos días trabajas al mes?</label>
              <Slider
                value={workingDays}
                onValueChange={setWorkingDays}
                max={30}
                min={15}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>15</span>
                <span className="font-semibold text-blue-600">{workingDays[0]} días</span>
                <span>30</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <motion.div
            key={`${hourlyRate[0]}-${hoursResponding[0]}-${workingDays[0]}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Current Cost */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                <Clock className="w-6 h-6 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-700">${results.dailyCostResponding}</div>
                <div className="text-sm text-red-600">Costo diario respondiendo</div>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-700">${results.monthlyCostResponding}</div>
                <div className="text-sm text-orange-600">Costo mensual perdido</div>
              </div>

              <div className="text-center p-4 bg-red-100 rounded-xl border border-red-300">
                <AlertTriangle className="w-6 h-6 text-red-700 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-800">${results.annualCostResponding}</div>
                <div className="text-sm text-red-700">Costo anual (¡BRUTAL!)</div>
              </div>
            </div>

            {/* Time Freed */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <h4 className="text-xl font-bold text-center mb-4 text-gray-900">Con Agente IA, recuperarías:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Coffee className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-700">{results.hoursFreedDaily}h</div>
                  <div className="text-sm text-green-600">Horas libres por día</div>
                </div>

                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Palette className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-700">{results.hoursFreedMonthly}h</div>
                  <div className="text-sm text-blue-600">Horas productivas por mes</div>
                </div>
              </div>
            </div>

            {/* Opportunity */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 rounded-xl text-white">
              <div className="text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-3" />
                <h4 className="text-xl font-bold mb-2">Potencial de Ingresos Adicionales</h4>
                <div className="text-3xl font-black mb-2">${results.potentialRevenue.toLocaleString()}/mes</div>
                <p className="opacity-90 mb-4">
                  Usando las {results.hoursFreedMonthly}h liberadas para generar más ingresos
                </p>

                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-lg font-bold">
                    Ganancia neta: ${results.opportunityCost.toLocaleString()}/mes
                  </div>
                  <div className="text-sm opacity-90">(Después de pagar los $297 del Agente IA)</div>
                </div>
              </div>
            </div>

            {/* What you could do */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Con {results.hoursFreedDaily}h diarias libres podrías:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "🎨 Crear nuevos diseños únicos",
                  "📈 Hacer marketing para atraer más clientes",
                  "🏆 Mejorar tus técnicas y habilidades",
                  "💼 Expandir tu negocio a nuevas ubicaciones",
                  "👥 Capacitar a tu equipo",
                  "☕ Tener tiempo personal y familiar",
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                    <span className="text-lg">{activity.split(" ")[0]}</span>
                    <span className="text-gray-700">{activity.substring(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            {results.opportunityCost > 1000 && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl text-white"
              >
                <div className="text-2xl font-bold mb-2">
                  ¡Podrías ganar ${results.opportunityCost.toLocaleString()} EXTRA cada mes!
                </div>
                <div className="text-lg opacity-90 mb-4">
                  El costo de NO automatizar: ${results.annualCostResponding.toLocaleString()} anuales perdidos
                </div>
                <div className="text-sm bg-white/20 rounded-full px-4 py-2 inline-block">
                  ⏰ Cada día que esperes, pierdes ${results.dailyCostResponding}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
