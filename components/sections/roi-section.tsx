"use client"

import { motion } from "framer-motion"
import { Calculator, TrendingUp, Clock, Users, DollarSign } from "lucide-react"
import ROICalculator from "@/components/roi-calculator"

const benefits = [
  {
    icon: Clock,
    metric: "87%",
    title: "menos tiempo en tareas repetitivas",
    description: "Tu equipo se enfoca en lo que realmente importa",
    color: "from-blue-500 to-indigo-500",
    finalValue: 87,
  },
  {
    icon: TrendingUp,
    metric: "312%",
    title: "más leads atendidos fuera de horario",
    description: "Nunca pierdas una oportunidad por horarios",
    color: "from-indigo-500 to-purple-500",
    finalValue: 312,
  },
  {
    icon: Users,
    metric: "0",
    title: "errores en agendamiento",
    description: "Precisión perfecta en cada cita programada",
    color: "from-purple-500 to-pink-500",
    finalValue: 0,
  },
  {
    icon: DollarSign,
    metric: "ROI+",
    title: "positivo desde el mes 1",
    description: "Recupera la inversión inmediatamente",
    color: "from-pink-500 to-red-500",
    finalValue: 1,
  },
]

export default function ROISection() {
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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="roi"
      className="relative py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-green-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Title */}
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Los números
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  hablan por sí solos
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl">
                Resultados reales de negocios que ya automatizaron su atención
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
                  <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} mb-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="mb-3">
                      <div
                        className={`text-3xl md:text-4xl font-black bg-gradient-to-br ${benefit.color} bg-clip-text text-transparent`}
                      >
                        {benefit.metric === "ROI+" ? (
                          <>ROI+ mes {benefit.finalValue}</>
                        ) : benefit.metric === "0" ? (
                          "0"
                        ) : benefit.metric.includes("%") ? (
                          <>{benefit.finalValue}%</>
                        ) : (
                          benefit.metric
                        )}
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Case Study */}
            <motion.div variants={itemVariants} className="hidden lg:block">
              <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl text-white shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Caso de Éxito Real</h3>
                </div>
                <p className="text-lg mb-2">"Cliente X: De 2 a 8 citas diarias sin contratar personal"</p>
                <p className="opacity-90">Ahorro anual: $34,560 • ROI: 1,164% • Tiempo de implementación: 48 horas</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - ROI Calculator */}
          <div>
            <motion.div variants={itemVariants}>
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full mb-4">
                  <Calculator className="w-5 h-5" />
                  <span className="font-semibold">Calculadora Interactiva</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Calcula tu ahorro</h3>
                <p className="text-gray-600">Descubre cuánto puedes ahorrar con automatización</p>
              </div>
              <ROICalculator />
            </motion.div>
          </div>

          {/* Mobile Case Study */}
          <motion.div variants={itemVariants} className="lg:hidden lg:col-span-2">
            <div className="p-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-xl font-bold">Caso de Éxito Real</h3>
              </div>
              <p className="text-lg mb-2">"Cliente X: De 2 a 8 citas diarias sin contratar personal"</p>
              <p className="opacity-90">Ahorro anual: $34,560 • ROI: 1,164%</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
