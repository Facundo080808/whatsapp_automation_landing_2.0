"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Clock, Zap, Shield, AlertTriangle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 34,
    seconds: 56,
  })

  // Countdown to July
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59, days: prev.days }
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Me interesa el precio BETA del Agente IA ($3,000 + $150/mes). ¿Pueden darme más información sobre cómo empezar?",
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section className="relative py-10 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6 font-semibold">
            <AlertTriangle className="w-5 h-5" />
            OFERTA DE LANZAMIENTO - TIEMPO LIMITADO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Precio especial
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              para pioneros
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Sé de los primeros en automatizar tu negocio con IA
          </p>
        </div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true ,amount: 0.01 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-lg mb-4">
            <Clock className="w-5 h-5" />
            <span className="font-bold">Oferta termina en:</span>
          </div>
          <div className="flex justify-center gap-4">
            {[
              { label: "Días", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Seg", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-sm text-gray-600 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Beta Price */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                🚀 PRECIO BETA - HASTA JULIO
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-2xl border-4 border-green-200 hover:border-green-300 transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pionero Beta</h3>

                <div className="mb-6">
                  <div className="text-5xl font-black text-green-600 mb-2">$3,000</div>
                  <div className="text-gray-600 mb-4">Setup completo + entrenamiento</div>
                  <div className="text-3xl font-bold text-blue-600">+ $150/mes</div>
                  <div className="text-sm text-gray-500">Microservicios + OpenAI GPT-4</div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl mb-6">
                  <div className="text-green-800 font-bold mb-2">🎯 AHORRAS $1,000 USD</div>
                  <div className="text-sm text-green-700">vs precio regular de $4,000</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "✅ Setup completo en 10 dias habiles",
                  "✅ Entrenamiento personalizado",
                  "✅ Integración con tu CRM actual",
                  "✅ WhatsApp o Instagram conectados",
                  "✅ Panel de supervisión incluido",
                  "✅ Soporte tecnico Lunes a Viernes 09:00-18:30(-3GTM)",
                  "✅ Actualizaciones gratuitas",
                  "✅ Garantía de funcionamiento",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-4 text-lg font-bold"
              >
                🚀 Reservar Precio Beta
              </Button>

              <div className="text-center mt-4 text-sm text-gray-500">
                Solo {Math.floor(Math.random() * 8) + 3} cupos disponibles este mes
              </div>
            </div>
          </motion.div>

          {/* Regular Price */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            className="relative opacity-75"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="bg-gray-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                📅 PRECIO REGULAR - AGOSTO EN ADELANTE
              </div>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-xl border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Precio Regular</h3>

                <div className="mb-6">
                  <div className="text-5xl font-black text-gray-600 mb-2">$4,000</div>
                  <div className="text-gray-600 mb-4">Setup completo + entrenamiento</div>
                  <div className="text-3xl font-bold text-blue-600">+ $150/mes</div>
                  <div className="text-sm text-gray-500">Microservicios + OpenAI GPT-4</div>
                </div>

                <div className="bg-red-50 p-4 rounded-xl mb-6">
                  <div className="text-red-800 font-bold mb-2">⚠️ $1,000 MÁS CARO</div>
                  <div className="text-sm text-red-700">que el precio Beta actual</div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "✅ Setup completo en 10 dias habiles",
                  "✅ Entrenamiento personalizado",
                  "✅ Integración con tu CRM actual",
                  "✅ WhatsApp o Instagram conectados",
                  "✅ Panel de supervisión incluido",
                  "✅ Soporte tecnico Lunes a Viernes 09:00-18:30(-3GTM)",
                  "✅ Actualizaciones gratuitas",
                  "✅ Garantía de funcionamiento",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </div>
                ))}
              </div>

              <Button disabled className="w-full bg-gray-300 text-gray-500 py-4 text-lg font-bold cursor-not-allowed">
                Disponible en Agosto
              </Button>

              <div className="text-center mt-4 text-sm text-gray-400">Precio sujeto a disponibilidad</div>
            </div>
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true ,amount: 0.01 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">¿Por qué este precio especial?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Feedback Valioso</h4>
                <p className="text-sm opacity-90">Nos ayudas a perfeccionar el sistema</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Caso de Estudio</h4>
                <p className="text-sm opacity-90">Tu éxito es nuestro mejor marketing</p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Pionero</h4>
                <p className="text-sm opacity-90">Ventaja competitiva antes que otros</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fee Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h4 className="font-bold text-blue-900 mb-3 text-center">💡 ¿Por qué $150/mes?</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-blue-800">OpenAI GPT-4 API (~$80/mes)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-blue-800">Servidores cloud (~$40/mes)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-blue-800">WhatsApp Business API (~$20/mes)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-blue-800">Mantenimiento y soporte (~$10/mes)</span>
              </div>
            </div>
            <div className="text-center mt-4 text-blue-700 font-medium">
              = Costo real de operación. Sin markup oculto.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
