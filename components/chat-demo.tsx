"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const demoMessages = [
  { text: "¡Hola! ¿En qué puedo ayudarte hoy?", isBot: true },
  { text: "Hola, me interesa agendar una cita", isBot: false },
  { text: "¡Perfecto! Te ayudo con eso. ¿Para qué servicio necesitas la cita?", isBot: true },
  { text: "Para una consulta de marketing digital", isBot: false },
  {
    text: "Excelente. Tengo disponibilidad para esta semana. ¿Prefieres mañana a las 10:00 AM o el jueves a las 2:00 PM?",
    isBot: true,
  },
  { text: "Mañana a las 10 está perfecto", isBot: false },
  {
    text: "¡Listo! He agendado tu cita para mañana a las 10:00 AM. Te enviaré un recordatorio por WhatsApp. ¿Necesitas algo más?",
    isBot: true,
  },
]

export default function ChatDemo() {
  const [messages, setMessages] = useState<Message[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)

  const startDemo = () => {
    setMessages([])
    setCurrentMessageIndex(0)
    setIsPlaying(true)
  }

  useEffect(() => {
    if (!isPlaying || currentMessageIndex >= demoMessages.length) return

    const timer = setTimeout(() => {
      const currentMessage = demoMessages[currentMessageIndex]

      if (currentMessage.isBot) {
        setIsTyping(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: currentMessage.text,
              isBot: true,
              timestamp: new Date(),
            },
          ])
          setIsTyping(false)
          setCurrentMessageIndex((prev) => prev + 1)
        }, 1500)
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: currentMessage.text,
            isBot: false,
            timestamp: new Date(),
          },
        ])
        setCurrentMessageIndex((prev) => prev + 1)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, isPlaying])

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: inputValue,
        isBot: false,
        timestamp: new Date(),
      },
    ])

    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(true)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: "¡Gracias por tu mensaje! En la versión real, respondería de forma inteligente basada en tu negocio específico.",
            isBot: true,
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
      }, 1500)
    }, 500)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">Agente IA</h3>
              <p className="text-sm opacity-90">En línea • Responde al instante</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
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

          {messages.length === 0 && !isPlaying && (
            <div className="text-center py-8">
              <Bot className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Mira cómo funciona el agente IA</p>
              <Button onClick={startDemo} className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                Iniciar Demo
              </Button>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escribe tu mensaje..."
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              size="sm"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
