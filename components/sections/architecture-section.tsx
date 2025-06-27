"use client"

import { motion } from "framer-motion"
import { MessageCircle, Brain, Calendar, Bell, ArrowRight, Zap } from "lucide-react"

const flowSteps = [
  {
    icon: MessageCircle,
    title: "Cliente escribe",
    description: "WhatsApp/Instagram",
    color: "from-green-500 to-emerald-500",
    detail: "Mensaje recibido instantáneamente",
  },
  {
    icon: Brain,
    title: "IA procesa",
    description: "Base de conocimiento personalizada",
    color: "from-blue-500 to-indigo-500",
    detail: "Análisis inteligente del contexto",
  },
  {
    icon: Zap,
    title: "Respuesta inteligente",
    description: "Como si fueras tú",
    color: "from-purple-500 to-pink-500",
    detail: "Tone of voice personalizado",
  },
  {
    icon: Calendar,
    title: "Acción automática",
    description: "Agenda en tu CRM",
    color: "from-orange-500 to-red-500",
    detail: "Integración directa sin errores",
  },
  {
    icon: Bell,
    title: "Notificación",
    description: "Solo si necesitas intervenir",
    color: "from-amber-500 to-orange-500",
    detail: "Escalación inteligente",
  },
]

const integrations = [
  { name: "WhatsApp", logo: "💬", color: "bg-green-500" },
  { name: "Instagram", logo: "📷", color: "bg-pink-500" },
  { name: "HubSpot", logo: "🔶", color: "bg-orange-500" },
  { name: "Pipedrive", logo: "🟢", color: "bg-green-600" },
  { name: "Calendly", logo: "📅", color: "bg-blue-500" },
  { name: "Zoom", logo: "💙", color: "bg-blue-600" },
]

export default function ArchitectureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const flowVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section
      id="como-funciona"
      className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Cómo funciona
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              la magia
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            (sin tecnicismos complicados)
          </p>
        </motion.div>

        {/* Flow Diagram */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div variants={flowVariants} whileHover={{ scale: 1.05 }} className="group relative">
                  <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 min-w-[200px] min-h-[240px]">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 leading-tight">{step.description}</p>
                    <p className="text-xs text-gray-500 leading-tight">{step.detail}</p>
                  </div>
                </motion.div>

                {/* Arrow */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="hidden lg:block mx-3"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}

                {/* Mobile Arrow */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="lg:hidden my-3 rotate-90"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Integrations */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Integrado con tus herramientas actuales</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group"
              >
                <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div
                    className={`w-10 h-10 ${integration.color} rounded-xl flex items-center justify-center text-white text-lg`}
                  >
                    {integration.logo}
                  </div>
                  <span className="font-medium text-gray-700">{integration.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg">
            <Brain className="w-6 h-6" />
            <span className="font-bold text-lg">No es un chatbot genérico. Es TU empleado virtual entrenado.</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
