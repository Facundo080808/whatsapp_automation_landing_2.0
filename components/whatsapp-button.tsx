"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Vengo de la landing page del Agente IA Conversacional y me interesa automatizar la atención de mi negocio. ¿Pueden darme más información?",
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-30 p-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6" />

        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        ¡Automatiza tu negocio ahora!
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </div>
    </motion.button>
  )
}
