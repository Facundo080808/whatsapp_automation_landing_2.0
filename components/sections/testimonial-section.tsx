"use client"

import { easeOut, motion } from "framer-motion"
import { Quote, Star, TrendingUp, Users, Calendar } from "lucide-react"

export default function TestimonialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const quoteVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  }

  return (
    <section
      id="testimonios"
      className="relative py-10 bg-gradient-to-br from-purple-50 via-white to-emerald-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Casos de
            <span className="bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
              {" "}
              éxito reales
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Estudios que transformaron su negocio con automatización
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div variants={quoteVariants} className="mb-16">
          <div className="relative p-8 md:p-12 bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-emerald-500 rounded-2xl shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 pt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
              "Pasamos de 20 a 60 reservas mensuales sin contratar personal. El bot responde al instante y solo me
              llegan los clientes que realmente quieren tatuarse. Mi agenda está siempre llena."
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MR</span>
              </div>
              <div>
                <div className="font-bold text-gray-900 text-lg">María Rodríguez</div>
                <div className="text-gray-600">Ink Studio Barcelona</div>
                <div className="text-sm text-purple-600 font-medium">Tatuajes • Piercing</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-purple-100 to-emerald-100 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200%</div>
            <div className="text-gray-600">Aumento en reservas</div>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-emerald-100 to-purple-100 mb-4">
              <Users className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
            <div className="text-gray-600">Personal adicional</div>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200">
            <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-purple-100 to-emerald-100 mb-4">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">30</div>
            <div className="text-gray-600">Días para ROI positivo</div>
          </div>
        </motion.div>

        {/* Additional Social Proof */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-br from-purple-400 to-emerald-400 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xs">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="font-medium">+50 estudios automatizados este mes</span>
            </div>

            <div className="text-xs text-gray-400">⭐ 4.9/5 satisfacción promedio • 98% recomiendan el servicio</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
