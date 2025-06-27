"use client"

import { motion } from "framer-motion"
import { Bot, Brain, Zap, Database, MessageCircle, Sparkles } from "lucide-react"
import ManualVsAIDemo from "@/components/manual-vs-ai-demo"

const capabilities = [
  {
    icon: Brain,
    title: "Responde como TÚ lo harías",
    description: "RAG personalizado con tu base de conocimiento",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Database,
    title: "Agenda directamente en tu sistema",
    description: "Integración nativa con tu CRM actual",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Califica leads automáticamente",
    description: "Solo los prospectos serios llegan a tu equipo",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageCircle,
    title: "Escala a humano cuando es necesario",
    description: "Transición perfecta para casos complejos",
    color: "from-pink-500 to-red-500",
  },
]

export default function SolutionSection() {
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

  return (
    <section
      id="solucion"
      className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full mb-6 font-semibold">
            <Sparkles className="w-5 h-5" />
            LA SOLUCIÓN QUE CAMBIARÁ TU VIDA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conoce a tu nuevo
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              empleado más eficiente
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Nunca se enferma, nunca toma vacaciones, nunca se equivoca, nunca se queja
          </p>
        </motion.div>

        {/* Manual vs AI Demo */}
        <motion.div variants={itemVariants} className="mb-16">
          <ManualVsAIDemo />
        </motion.div>

        {/* Agent Characterization */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl text-white shadow-2xl">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-2">Tu Agente IA Personal</h3>
                <p className="text-lg opacity-90 mb-4">Aprende tu negocio mejor que cualquier empleado nuevo</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Powered by GPT-4</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Disponible 24/7</span>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">0% Errores</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capabilities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {capabilities.map((capability, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${capability.color} mb-4`}>
                  <capability.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{capability.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Benefits */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">¿El resultado?</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "✅ Recuperas 3+ horas diarias",
              "✅ 0% leads perdidos por horarios",
              "✅ Respuestas instantáneas 24/7",
              "✅ Integración en 48 horas",
              "✅ ROI positivo desde mes 1",
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium"
              >
                {benefit}
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl text-white">
            <h4 className="text-xl font-bold mb-2">🎯 IMAGÍNATE:</h4>
            <p className="text-lg">
              Despertarte sabiendo que tu negocio trabajó toda la noche para ti, sin que tuvieras que responder ni un
              solo mensaje
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
