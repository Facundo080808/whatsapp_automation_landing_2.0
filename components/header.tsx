"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot, MessageCircle, Calculator } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "¡Hola! Vengo de la landing page del Agente IA y me interesa automatizar mi negocio. ¿Pueden darme más información?",
    )
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Bot className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Agente IA</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Automatización Inteligente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("problema")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              El Problema
            </button>
            <button
              onClick={() => scrollToSection("solucion")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              La Solución
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Cómo Funciona
            </button>
            <button
              onClick={() => scrollToSection("roi")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              ROI
            </button>
            <button
              onClick={() => scrollToSection("testimonios")}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Casos de Éxito
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("roi")}
              variant="outline"
              size="sm"
              className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
            >
              <Calculator className="w-4 h-4 mr-2" />
              Calcular Ahorro
            </Button>
            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Empezar Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("problema")}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                El Problema
              </button>
              <button
                onClick={() => scrollToSection("solucion")}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                La Solución
              </button>
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Cómo Funciona
              </button>
              <button
                onClick={() => scrollToSection("roi")}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                ROI
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors font-medium py-2"
              >
                Casos de Éxito
              </button>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Button
                  onClick={() => scrollToSection("roi")}
                  variant="outline"
                  size="sm"
                  className="border-indigo-200 text-indigo-700 hover:bg-indigo-50 w-full"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calcular Ahorro
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  size="sm"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Empezar Ahora
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
