"use client"

import type React from "react"

import { easeOut, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Calendar, Download, Shield, Clock, Zap, Users, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function CTASection() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [automatedBusinesses, setAutomatedBusinesses] = useState(127)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 12 })

  // Simulate real-time counter
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setAutomatedBusinesses((prev) => prev + 1)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return { hours: 23, minutes: 59, seconds: 59 } // Reset
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Handle success
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Vengo de la landing page del Agente IA Conversacional y me interesa automatizar la atención de mi negocio. ¿Pueden darme más información sobre cómo funciona y los precios?",
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <section className="relative py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            ¿Listo para que tu competencia
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              se pregunte cómo lo haces?
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Únete a los negocios que ya automatizaron su atención
          </p>
        </motion.div>

        {/* Urgency Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg">
            <Users className="w-5 h-5" />
            <span className="font-semibold">{automatedBusinesses} negocios automatizados este mes</span>
          </div>

          <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">
              Próximo slot: {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* CTA Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Option 1: WhatsApp */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative group">
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-300">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empezar Automatización Ahora</h3>
                <p className="text-gray-600 mb-6">Habla directo con nuestro especialista y comienza hoy mismo</p>

                <Button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold mb-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chatear por WhatsApp
                </Button>

                <div className="text-xs text-gray-500">✓ Respuesta inmediata ✓ Setup en 48h</div>
              </div>
            </div>
          </motion.div>

          {/* Option 2: Demo */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative group">
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-indigo-200 hover:border-indigo-300">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 mb-6">
                  <Calendar className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ver Demo Personalizada</h3>
                <p className="text-gray-600 mb-6">Te mostramos exactamente cómo funcionaría en tu negocio</p>

                <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Tu WhatsApp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 font-semibold"
                  >
                    {isSubmitting ? "Agendando..." : "Agendar Demo Gratis"}
                  </Button>
                </form>

                <div className="text-xs text-gray-500">✓ Demo de 15 minutos ✓ Sin compromiso</div>
              </div>
            </div>
          </motion.div>

          {/* Option 3: Specialist */}
          <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="relative group">
            <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-300">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                  <Download className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hablar con Especialista</h3>
                <p className="text-gray-600 mb-6">Consulta personalizada sobre tu caso específico</p>

                <Button
                  variant="outline"
                  className="w-full bg-white text-purple-700 border-2 border-purple-200 hover:bg-purple-50 py-6 text-lg font-semibold mb-6"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </Button>

                <div className="text-xs text-gray-500">✓ Análisis gratuito ✓ Estrategia personalizada</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guarantees */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg mb-6">
            <Shield className="w-6 h-6" />
            <span className="font-bold text-lg">Setup gratis si no funciona en 48 horas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-sm text-gray-600">✓ Cancela cuando quieras</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">✓ Sin penalizaciones</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">✓ 100% compatible</div>
            </div>
          </div>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 mb-4">
              <span className="font-bold">La prueba es gratis.</span>
            </p>
            <p className="text-lg text-gray-600">
              El único riesgo es no intentarlo y seguir perdiendo clientes por respuestas lentas.
            </p>
          </div>
        </motion.div>

        {/* Final Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Negocios automatizados</div>
          </div>

          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">99.7%</div>
            <div className="text-sm text-gray-600">Uptime garantizado</div>
          </div>

          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            <Clock className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">48h</div>
            <div className="text-sm text-gray-600">Setup completo</div>
          </div>

          <div className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200">
            <Shield className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Garantía total</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
