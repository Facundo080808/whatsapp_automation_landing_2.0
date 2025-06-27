"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, RotateCcw, Clock, User, Bot, MessageCircle, Calendar, Palette, Coffee, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimeSlot {
  time: string
  activity: string
  icon: React.ReactNode
  type: "productive" | "repetitive" | "break"
}

const manualSchedule: TimeSlot[] = [
  { time: "9:00", activity: "Responder WhatsApp", icon: <MessageCircle className="w-4 h-4" />, type: "repetitive" },
  { time: "9:30", activity: "Agendar citas manualmente", icon: <Calendar className="w-4 h-4" />, type: "repetitive" },
  {
    time: "10:00",
    activity: "Más mensajes de Instagram",
    icon: <MessageCircle className="w-4 h-4" />,
    type: "repetitive",
  },
  {
    time: "10:30",
    activity: "Confirmar citas por teléfono",
    icon: <MessageCircle className="w-4 h-4" />,
    type: "repetitive",
  },
  { time: "11:00", activity: "Diseñar tatuajes", icon: <Palette className="w-4 h-4" />, type: "productive" },
  {
    time: "12:00",
    activity: "Almuerzo interrumpido por mensajes",
    icon: <Coffee className="w-4 h-4" />,
    type: "break",
  },
  { time: "13:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  {
    time: "14:00",
    activity: "Responder consultas atrasadas",
    icon: <MessageCircle className="w-4 h-4" />,
    type: "repetitive",
  },
  { time: "15:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "16:00", activity: "Agendar para mañana", icon: <Calendar className="w-4 h-4" />, type: "repetitive" },
  {
    time: "17:00",
    activity: "Responder últimos mensajes",
    icon: <MessageCircle className="w-4 h-4" />,
    type: "repetitive",
  },
  { time: "18:00", activity: "Cerrar estudio (agotado)", icon: <User className="w-4 h-4" />, type: "break" },
]

const aiSchedule: TimeSlot[] = [
  { time: "9:00", activity: "Diseñar tatuajes", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "10:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "11:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "12:00", activity: "Almuerzo relajado", icon: <Coffee className="w-4 h-4" />, type: "break" },
  { time: "13:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "14:00", activity: "Desarrollar nuevos diseños", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "15:00", activity: "Tatuar cliente", icon: <Palette className="w-4 h-4" />, type: "productive" },
  { time: "16:00", activity: "Marketing y redes sociales", icon: <Zap className="w-4 h-4" />, type: "productive" },
  {
    time: "17:00",
    activity: "Planificar expansión del negocio",
    icon: <Zap className="w-4 h-4" />,
    type: "productive",
  },
  { time: "18:00", activity: "Cerrar estudio (energizado)", icon: <User className="w-4 h-4" />, type: "break" },
]

export default function ManualVsAIDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0)
  const [showComparison, setShowComparison] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentTimeIndex((prev) => {
        if (prev >= Math.max(manualSchedule.length, aiSchedule.length) - 1) {
          setIsPlaying(false)
          setShowComparison(true)
          return prev
        }
        return prev + 1
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isPlaying])

  const startDemo = () => {
    setCurrentTimeIndex(0)
    setShowComparison(false)
    setIsPlaying(true)
  }

  const resetDemo = () => {
    setCurrentTimeIndex(0)
    setIsPlaying(false)
    setShowComparison(false)
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case "productive":
        return "bg-green-100 text-green-800 border-green-200"
      case "repetitive":
        return "bg-red-100 text-red-800 border-red-200"
      case "break":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const manualProductiveHours = manualSchedule.filter((slot) => slot.type === "productive").length
  const aiProductiveHours = aiSchedule.filter((slot) => slot.type === "productive").length

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 sm:p-6 text-white">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Demo: Día de un Dueño de Estudio de Tatuajes</h3>
              <p className="text-sm sm:text-base opacity-90">Manual vs Automatizado con IA</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={isPlaying ? () => setIsPlaying(false) : startDemo}
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                {isPlaying ? "Pausar" : "Iniciar Demo"}
              </Button>
              <Button
                onClick={resetDemo}
                variant="secondary"
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Demo Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Manual Side */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-red-800 text-lg">Operación Manual</h4>
                  <p className="text-sm text-red-600">Atención tradicional</p>
                </div>
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {manualSchedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, scale: 0.95 }}
                    animate={{
                      opacity: index <= currentTimeIndex ? 1 : 0.3,
                      scale: index === currentTimeIndex ? 1.02 : 0.95,
                      backgroundColor: index === currentTimeIndex ? "#fef2f2" : "transparent",
                    }}
                    className={`p-3 rounded-lg border transition-all duration-300 ${getActivityColor(slot.type)} ${
                      index === currentTimeIndex ? "ring-2 ring-red-300" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="font-semibold text-sm">{slot.time}</span>
                        {slot.icon}
                        <span className="text-sm truncate">{slot.activity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Side */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-800 text-lg">Con Agente IA</h4>
                  <p className="text-sm text-indigo-600">Automatización inteligente</p>
                </div>
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {aiSchedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, scale: 0.95 }}
                    animate={{
                      opacity: index <= currentTimeIndex ? 1 : 0.3,
                      scale: index === currentTimeIndex ? 1.02 : 0.95,
                      backgroundColor: index === currentTimeIndex ? "#f0f9ff" : "transparent",
                    }}
                    className={`p-3 rounded-lg border transition-all duration-300 ${getActivityColor(slot.type)} ${
                      index === currentTimeIndex ? "ring-2 ring-indigo-300" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="font-semibold text-sm">{slot.time}</span>
                        {slot.icon}
                        <span className="text-sm truncate">{slot.activity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* AI Background Tasks */}
          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
            <h5 className="font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              Mientras tanto, el Agente IA trabaja 24/7:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2 text-indigo-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Responde WhatsApp
              </div>
              <div className="flex items-center gap-2 text-indigo-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Agenda citas automáticamente
              </div>
              <div className="flex items-center gap-2 text-indigo-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Califica leads
              </div>
              <div className="flex items-center gap-2 text-indigo-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Confirma citas
              </div>
            </div>
          </div>

          {/* Results Comparison */}
          <AnimatePresence>
            {showComparison && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <div className="text-center p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="text-2xl font-bold text-red-700 mb-1">{manualProductiveHours}h</div>
                  <div className="text-sm text-red-600">Horas productivas (Manual)</div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-bold text-green-700 mb-1">{aiProductiveHours}h</div>
                  <div className="text-sm text-green-600">Horas productivas (Con IA)</div>
                </div>

                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700 mb-1">
                    +{aiProductiveHours - manualProductiveHours}h
                  </div>
                  <div className="text-sm text-blue-600">Tiempo recuperado</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
