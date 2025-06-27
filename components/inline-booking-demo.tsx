"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send, Calendar, Play, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

const demoFlow = [
  {
    trigger: "start",
    botResponse: "¡Hola! Soy el asistente virtual de Ink Studio. ¿En qué puedo ayudarte hoy?",
    options: ["Quiero agendar una cita", "Ver precios", "Ubicación del estudio"],
  },
  {
    trigger: "Quiero agendar una cita",
    botResponse: "¡Perfecto! ¿Qué tipo de tatuaje te interesa?",
    options: ["Tatuaje pequeño (2-4 horas)", "Tatuaje mediano (4-6 horas)", "Tatuaje grande (sesión completa)"],
  },
  {
    trigger: "Tatuaje pequeño (2-4 horas)",
    botResponse: "Excelente elección. Tengo disponibilidad esta semana. ¿Cuál de estas fechas te conviene?",
    options: ["Mañana 2:00 PM", "Jueves 10:00 AM", "Viernes 4:00 PM"],
  },
  {
    trigger: "Mañana 2:00 PM",
    botResponse: "¡Perfecto! Para confirmar tu cita necesito algunos datos. ¿Cuál es tu nombre completo?",
    options: [],
  },
]

export default function InlineBookingDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [currentStep, setCurrentStep] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [customerName, setCustomerName] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Esta linea causa que el scroll se mantenga al final de los mensajes
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  // useEffect(() => {
  //   scrollToBottom()
  // }, [messages])

  const startDemo = () => {
    setMessages([])
    setCurrentStep(0)
    setCustomerName("")
    setIsCompleted(false)
    setInputValue("")
    setIsActive(true)
    setTimeout(() => {
      addBotMessage(demoFlow[0].botResponse, demoFlow[0].options)
    }, 1000)
  }

  const addBotMessage = (text: string, options: string[] = []) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text,
          isBot: true,
          timestamp: new Date(),
          options,
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        isBot: false,
        timestamp: new Date(),
      },
    ])
  }

  const handleOptionClick = (option: string) => {
    addUserMessage(option)

    // Find next step
    const nextStep = demoFlow.find((step) => step.trigger === option)
    if (nextStep) {
      setTimeout(() => {
        addBotMessage(nextStep.botResponse, nextStep.options)
      }, 800)
    }
  }

  const handleNameSubmit = () => {
    if (!inputValue.trim()) return

    setCustomerName(inputValue)
    addUserMessage(inputValue)
    setInputValue("")

    setTimeout(() => {
      addBotMessage(
        `Gracias ${inputValue}! Tu cita está confirmada para mañana a las 2:00 PM. Te enviaré un recordatorio por WhatsApp. ¿Necesitas la dirección del estudio?`,
        ["Sí, envíame la dirección", "No, ya la conozco"],
      )
    }, 800)
  }

  const handleFinalStep = (option: string) => {
    addUserMessage(option)

    if (option === "Sí, envíame la dirección") {
      setTimeout(() => {
        addBotMessage(
          "📍 Ink Studio Barcelona\nCalle del Arte 123, Barcelona\n\n✅ ¡Listo! Tu cita está 100% confirmada. Nos vemos mañana a las 2:00 PM.",
        )
        setIsCompleted(true)
      }, 800)
    } else {
      setTimeout(() => {
        addBotMessage("✅ ¡Perfecto! Tu cita está 100% confirmada. Nos vemos mañana a las 2:00 PM.")
        setIsCompleted(true)
      }, 800)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Demo Interactivo: Agente IA</h3>
                <p className="text-sm opacity-90">Mira cómo agenda citas automáticamente</p>
              </div>
            </div>
            <div className="flex gap-2">
              {!isActive && (
                <Button
                  onClick={startDemo}
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Iniciar Demo
                </Button>
              )}
              {isActive && (
                <Button
                  onClick={startDemo}
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reiniciar
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {!isActive && messages.length === 0 && (
            <div className="text-center py-12">
              <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-700 mb-2">Prueba el Agente IA en Acción</h4>
              <p className="text-gray-500 mb-6">Ve cómo agenda una cita completa sin intervención humana</p>
              <Button onClick={startDemo} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                <Play className="w-5 h-5 mr-2" />
                Comenzar Demostración
              </Button>
            </div>
          )}

          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div className="max-w-xs">
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>

                  {/* Options */}
                  {message.options && message.options.length > 0 && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (customerName && (option.includes("dirección") || option.includes("conozco"))) {
                              handleFinalStep(option)
                            } else {
                              handleOptionClick(option)
                            }
                          }}
                          className="block w-full text-left px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg text-sm transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
              </div>
            </motion.div>
          )}

          {/* Completion Message */}
          {isCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center p-4 bg-green-50 rounded-xl border border-green-200"
            >
              <div className="text-green-600 mb-2">
                <Calendar className="w-8 h-8 mx-auto" />
              </div>
              <h4 className="font-bold text-green-800 mb-2">¡Cita Agendada Exitosamente!</h4>
              <p className="text-sm text-green-700 mb-4">
                ✅ Sin intervención humana
                <br />✅ Proceso 100% automatizado
                <br />✅ Cliente satisfecho
              </p>
              <Button onClick={startDemo} size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <RotateCcw className="w-4 h-4 mr-2" />
                Probar Otro Escenario
              </Button>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input for name */}
        {messages.length > 0 && messages[messages.length - 1]?.text.includes("nombre completo") && !customerName && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu nombre..."
                onKeyPress={(e) => e.key === "Enter" && handleNameSubmit()}
                className="flex-1"
              />
              <Button onClick={handleNameSubmit} size="sm" className="bg-indigo-500 hover:bg-indigo-600 text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Demo Info */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <Bot className="w-4 h-4" />
            <span>Demo interactivo • Powered by GPT-4 • Así funcionaría en tu negocio</span>
          </div>
        </div>
      </div>
    </div>
  )
}
