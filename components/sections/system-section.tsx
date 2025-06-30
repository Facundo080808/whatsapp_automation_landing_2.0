"use client"

import { easeOut, motion } from "framer-motion"
import { Database, Puzzle, BarChart3, Headphones, CheckCircle, Zap, DollarSign } from "lucide-react"

const modules = [
  {
    icon: Database,
    title: "Base de Conocimiento Personalizada",
    features: [
      "Tus FAQs, políticas, y tone of voice",
      "Entrenamiento con conversaciones históricas",
     
      "Respuestas contextuales inteligentes",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Puzzle,
    title: "Integraciones Nativas",
    features: [
      "Tu CRM actual (HubSpot, Pipedrive, etc.)",
      "Sistema de booking existente",
      "WhatsApp Business API o Instagram",
      "Sincronización en tiempo real",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Panel de Control",
    features: [
      "Conversaciones supervisadas",
      "Optimización continua",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "Soporte Especializado",
    features: [
      "Setup completo incluido",
      "Training personalizado",
      "Soporte técnico: Lunes a Viernes 09:00-18:30 (-3GMT)",
    ],
    color: "from-pink-500 to-red-500",
  },
]

export default function SystemSection() {
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

  const moduleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
  }

  return (
    <section className="relative py-10 bg-gradient-to-br from-indigo-50 via-white to-pink-50 overflow-hidden scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Todo listo para funcionar
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              desde día 10
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Sistema completo sin configuraciones complicadas
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <motion.div key={index} variants={moduleVariants} whileHover={{ scale: 1.02 }} className="group">
              <div className="relative p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${module.color}`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{module.title}</h3>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  {module.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Hint */}
        {/* <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full shadow-lg">
            <DollarSign className="w-6 h-6" />
            <div className="text-left">
              <div className="font-bold text-lg">Desde $297/mes</div>
              <div className="text-sm opacity-90">Menos que medio salario</div>
            </div>
          </div>
        </motion.div> */}

        {/* Value Proposition */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Zap className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Setup Inmediato</h4>
            <p className="text-gray-600 text-sm">Funcionando en 10 dias habiles</p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Database className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Sin Migraciones</h4>
            <p className="text-gray-600 text-sm">Se integra con tu sistema actual</p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <Headphones className="w-8 h-8 text-pink-600 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Soporte Total</h4>
            <p className="text-gray-600 text-sm">Equipo dedicado para tu éxito</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
