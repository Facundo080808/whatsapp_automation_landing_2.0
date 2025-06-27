"use client"

import { useState } from "react"
import { MessageCircle, User, Bot, CheckCircle, AlertCircle, Send, Eye, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Conversation {
  id: string
  customerName: string
  customerPhone: string
  status: "active" | "resolved" | "needs_human"
  lastMessage: string
  timestamp: string
  messages: Array<{
    id: string
    text: string
    isBot: boolean
    timestamp: string
    needsAttention?: boolean
  }>
  intent: string
  aiConfidence: number
}

const mockConversations: Conversation[] = [
  {
    id: "1",
    customerName: "María González",
    customerPhone: "+34 612 345 678",
    status: "active",
    lastMessage: "¿Cuánto cuesta un tatuaje en el brazo?",
    timestamp: "Hace 2 min",
    intent: "Consulta de precios",
    aiConfidence: 95,
    messages: [
      { id: "1", text: "Hola, ¿cuánto cuesta un tatuaje en el brazo?", isBot: false, timestamp: "14:30" },
      {
        id: "2",
        text: "¡Hola María! El precio depende del tamaño y complejidad. Un tatuaje pequeño (5-8cm) cuesta desde €80, mediano (8-15cm) desde €150, y grande (15cm+) desde €250. ¿Qué tamaño tienes en mente?",
        isBot: true,
        timestamp: "14:30",
      },
    ],
  },
  {
    id: "2",
    customerName: "Carlos Ruiz",
    customerPhone: "+34 687 123 456",
    status: "needs_human",
    lastMessage: "Quiero modificar un tatuaje que me hice en otro sitio",
    timestamp: "Hace 5 min",
    intent: "Consulta compleja",
    aiConfidence: 65,
    messages: [
      {
        id: "1",
        text: "Hola, tengo un tatuaje que me hice en otro estudio y no me gusta como quedó. ¿Pueden arreglarlo?",
        isBot: false,
        timestamp: "14:25",
      },
      {
        id: "2",
        text: "Hola Carlos. Sí, hacemos correcciones y cover-ups. Para darte un presupuesto exacto necesitaríamos ver el tatuaje actual. ¿Podrías enviar una foto?",
        isBot: true,
        timestamp: "14:25",
      },
      {
        id: "3",
        text: "Quiero modificar un tatuaje que me hice en otro sitio",
        isBot: false,
        timestamp: "14:27",
        needsAttention: true,
      },
    ],
  },
  {
    id: "3",
    customerName: "Ana Martín",
    customerPhone: "+34 654 987 321",
    status: "resolved",
    lastMessage: "¡Perfecto! Nos vemos mañana a las 4",
    timestamp: "Hace 10 min",
    intent: "Cita agendada",
    aiConfidence: 98,
    messages: [
      { id: "1", text: "Hola, quiero agendar una cita para un tatuaje pequeño", isBot: false, timestamp: "14:20" },
      {
        id: "2",
        text: "¡Hola Ana! Perfecto. Para un tatuaje pequeño tengo disponibilidad mañana a las 16:00. ¿Te conviene?",
        isBot: true,
        timestamp: "14:20",
      },
      { id: "3", text: "¡Perfecto! Nos vemos mañana a las 4", isBot: false, timestamp: "14:22" },
      {
        id: "4",
        text: "¡Excelente! Tu cita está confirmada para mañana 16:00. Te enviaré un recordatorio. ¡Hasta mañana!",
        isBot: true,
        timestamp: "14:22",
      },
    ],
  },
]

export default function InlineDashboardDemo() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(mockConversations[0])
  const [conversations, setConversations] = useState(mockConversations)
  const [newMessage, setNewMessage] = useState("")
  const [stats, setStats] = useState({
    totalConversations: 24,
    resolvedToday: 18,
    needsAttention: 2,
    avgResponseTime: "12s",
  })

  const handleTakeOver = (conversationId: string) => {
    setConversations((prev) =>
      prev.map((conv) => (conv.id === conversationId ? { ...conv, status: "active" as const } : conv)),
    )
  }

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return

    const updatedMessage = {
      id: Date.now().toString(),
      text: newMessage,
      isBot: false, // Human intervention
      timestamp: new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }),
    }

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversation.id
          ? {
              ...conv,
              messages: [...conv.messages, updatedMessage],
              lastMessage: newMessage,
              status: "active" as const,
            }
          : conv,
      ),
    )

    setSelectedConversation((prev) => ({ ...prev, messages: [...prev.messages, updatedMessage] } ))

    setNewMessage("")
  }

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Explanation Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full mb-4 font-semibold">
          <Eye className="w-5 h-5" />
          PANEL DE SUPERVISIÓN
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Control Total en Tiempo Real</h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Ve todas las conversaciones, supervisa las respuestas del agente IA, e interviene cuando sea necesario.
          <br />
          <span className="font-semibold text-indigo-600">Tú siempre tienes el control final.</span>
        </p>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <h4 className="font-bold text-green-800 mb-1">Supervisión 24/7</h4>
            <p className="text-sm text-green-700">Ve cada conversación en tiempo real</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <User className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <h4 className="font-bold text-blue-800 mb-1">Intervención Humana</h4>
            <p className="text-sm text-blue-700">Toma control cuando lo necesites</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <Bot className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <h4 className="font-bold text-purple-800 mb-1">IA Inteligente</h4>
            <p className="text-sm text-purple-700">Te alerta cuando necesita ayuda</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Panel de Control IA</h3>
                <p className="text-sm opacity-90">Supervisión en tiempo real • Ink Studio Barcelona</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Sistema Activo</span>
            </div>
          </div>
        </div>

        <div className="flex h-[500px]">
          {/* Sidebar - Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Stats */}
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="text-lg font-bold text-indigo-600">{stats.totalConversations}</div>
                  <div className="text-xs text-gray-600">Conversaciones hoy</div>
                </div>
                <div className="text-center p-2 bg-white rounded-lg">
                  <div className="text-lg font-bold text-green-600">{stats.resolvedToday}</div>
                  <div className="text-xs text-gray-600">Resueltas por IA</div>
                </div>
              </div>
            </div>

            {/* Conversations */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    selectedConversation?.id === conversation.id ? "bg-indigo-50 border-indigo-200" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {conversation.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{conversation.customerName}</div>
                        <div className="text-xs text-gray-500">{conversation.customerPhone}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {conversation.status === "needs_human" && <AlertCircle className="w-4 h-4 text-orange-500" />}
                      {conversation.status === "resolved" && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {conversation.status === "active" && <MessageCircle className="w-4 h-4 text-blue-500" />}
                    </div>
                  </div>

                  <div className="text-xs text-gray-600 mb-1">{conversation.intent}</div>
                  <div className="text-sm text-gray-800 truncate mb-2">{conversation.lastMessage}</div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                    <div className="flex items-center gap-1">
                      <Bot className="w-3 h-3 text-indigo-500" />
                      <span className="text-xs text-indigo-600">{conversation.aiConfidence}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {selectedConversation.customerName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium">{selectedConversation.customerName}</div>
                    <div className="text-sm text-gray-500">{selectedConversation.customerPhone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedConversation.status === "needs_human"
                        ? "bg-orange-100 text-orange-700"
                        : selectedConversation.status === "resolved"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {selectedConversation.status === "needs_human"
                      ? "Requiere Atención"
                      : selectedConversation.status === "resolved"
                        ? "Resuelto"
                        : "Activo"}
                  </div>

                  {selectedConversation.status === "needs_human" && (
                    <Button
                      onClick={() => handleTakeOver(selectedConversation.id)}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      <User className="w-4 h-4 mr-1" />
                      Tomar Control
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedConversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"} ${
                    message.needsAttention ? "animate-pulse" : ""
                  }`}
                >
                  <div className="max-w-xs">
                    <div
                      className={`px-4 py-2 rounded-2xl ${
                        message.isBot
                          ? message.needsAttention
                            ? "bg-orange-100 text-orange-800 border border-orange-200"
                            : "bg-gray-100 text-gray-800"
                          : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {message.isBot ? (
                        <Bot className="w-3 h-3 text-indigo-500" />
                      ) : (
                        <User className="w-3 h-3 text-gray-500" />
                      )}
                      <span className="text-xs text-gray-500">{message.timestamp}</span>
                      {message.needsAttention && <AlertCircle className="w-3 h-3 text-orange-500 ml-1" />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Intervenir como humano..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-indigo-500 hover:bg-indigo-600 text-white">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-xs text-gray-500 mt-2 flex items-center gap-2">
                <User className="w-3 h-3" />
                Modo: Intervención Humana Disponible
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistema Activo</span>
              </div>
              <div>Tiempo de respuesta promedio: {stats.avgResponseTime}</div>
            </div>
            <div className="text-xs">Panel de Supervisión • Intervención humana disponible 24/7</div>
          </div>
        </div>
      </div>
    </div>
  )
}
