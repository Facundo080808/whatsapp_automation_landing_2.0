"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Clock, AlertTriangle, TrendingDown, Play } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentPain, setCurrentPain] = useState(0)
  const [isOwnerTired, setIsOwnerTired] = useState(true)

  const painPoints = [
    "Respondiendo el mismo mensaje por 50ª vez hoy...",
    "Son las 11 PM y siguen llegando consultas...",
    "Perdí otro cliente porque no respondí a tiempo...",
    "No puedo ni almorzar tranquilo por los mensajes...",
    "Mi familia se queja que siempre estoy en el teléfono...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPain((prev) => (prev + 1) % painPoints.length)
      setIsOwnerTired((prev) => !prev)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Estoy AGOTADO de responder mensajes todo el día. Necesito automatizar mi negocio YA. ¿Pueden ayudarme?",
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  const scrollToSolution = () => {
    const element = document.getElementById("solucion")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 overflow-hidden pt-3 scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - The Pain */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Pain Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6 font-semibold"
            >
              <AlertTriangle className="w-5 h-5" />
              DUEÑO AGOTADO ALERT
            </motion.div>

            {/* Main Headline - Emphasizing Pain */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            >
              ¿Estás
              <span className="text-red-600"> HARTO </span>
              de ser esclavo de
              <br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                WhatsApp todo el día?
              </span>
            </motion.h1>

            {/* Rotating Pain Points */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-8">
              <div className="h-16 flex items-center">
                <motion.p
                  key={currentPain}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-xl md:text-2xl text-gray-700 italic font-medium"
                >
                  "{painPoints[currentPain]}"
                </motion.p>
              </div>
            </motion.div>

            {/* Pain Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              <div className="text-center p-4 bg-red-100 rounded-xl border border-red-200">
                <div className="text-2xl font-bold text-red-700">3.2h</div>
                <div className="text-sm text-red-600">Perdidas diarias</div>
              </div>
              <div className="text-center p-4 bg-orange-100 rounded-xl border border-orange-200">
                <div className="text-2xl font-bold text-orange-700">67%</div>
                <div className="text-sm text-orange-600">Leads perdidos</div>
              </div>
              <div className="text-center p-4 bg-yellow-100 rounded-xl border border-yellow-200">
                <div className="text-2xl font-bold text-yellow-700">24/7</div>
                <div className="text-sm text-yellow-600">Sin descanso</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                ¡LIBÉRAME DE ESTO YA!
              </Button>

              <Button
                onClick={scrollToSolution}
                variant="outline"
                size="lg"
                className="border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver la Solución
              </Button>
            </motion.div>

            {/* Urgency Message */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 text-gray-600 text-center lg:text-left"
            >
              <span className="font-semibold text-red-600">⚠️ Cada minuto que pases respondiendo manualmente</span>
              <br />
              es dinero que pierdes y estrés que acumulas
            </motion.p>
          </motion.div>

          {/* Right Content - Visual Pain Representation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Stressed Owner Illustration */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-red-200">
              {/* Owner Avatar */}
              <div className="text-center mb-6">
                <motion.div
                  animate={{
                    scale: isOwnerTired ? [1, 1.1, 1] : [1, 0.95, 1],
                    rotate: isOwnerTired ? [0, -2, 2, 0] : [0, 1, -1, 0],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center text-4xl"
                >
                  {isOwnerTired ? "😫" : "😵"}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Tú ahora mismo</h3>
                <p className="text-red-600 font-semibold">Modo: AGOTADO 24/7</p>
              </div>

              {/* Notification Hell */}
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200"
                  >
                    <MessageCircle className="w-5 h-5 text-red-500 animate-bounce" />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">WhatsApp • Ahora</div>
                      <div className="text-xs text-gray-600">¿Cuánto cuesta un tatuaje?</div>
                    </div>
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  </motion.div>
                ))}
              </div>

              {/* Stress Indicators */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-red-100 rounded-lg">
                  <Clock className="w-6 h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-sm font-bold text-red-700">11:47 PM</div>
                  <div className="text-xs text-red-600">Aún respondiendo</div>
                </div>
                <div className="text-center p-3 bg-orange-100 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                  <div className="text-sm font-bold text-orange-700">-$2,400</div>
                  <div className="text-xs text-orange-600">Perdidos este mes</div>
                </div>
              </div>

              {/* Floating Stress Bubbles */}
              <div className="absolute -top-4 -right-4">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                >
                  ¡ESTRÉS!
                </motion.div>
              </div>
              {/* <div className="absolute -bottom-4 -left-4">
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold"
                >
                  SIN VIDA
                </motion.div>
              </div> */}
            </div>

            {/* VS Arrow pointing down to solution */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold shadow-lg"
            >
              VS
            </motion.div> */}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-gray-600 mb-4 font-semibold">👇 Descubre cómo liberarte de esta pesadilla 👇</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-8 h-12 border-2 border-indigo-400 rounded-full flex justify-center mx-auto"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-4 bg-indigo-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}
