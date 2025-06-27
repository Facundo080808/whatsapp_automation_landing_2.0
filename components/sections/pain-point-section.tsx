"use client"

import { easeOut, motion } from "framer-motion"
import { MessageCircleX, Clock, AlertTriangle, DollarSign, Users, TrendingDown, Brain } from "lucide-react"

interface PainPoint {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  stat: string
  emotion: string
  color: string // por ejemplo: "from-red-400 to-pink-500"
}

const painPoints = [
  {
    icon: MessageCircleX,
    title: "Responder las mismas 20 preguntas una y otra vez",
    description: "Tu equipo pierde 3.2 horas diarias en mensajes repetitivos",
    color: "from-red-500 to-pink-500",
    stat: "3.2h/día perdidas",
    emotion: "😫 AGOTAMIENTO MENTAL",
  },
  {
    icon: Clock,
    title: "Perder leads porque nadie respondió a tiempo",
    description: "67% de los clientes esperan respuesta en menos de 2 horas",
    color: "from-orange-500 to-red-500",
    stat: "67% se van sin respuesta",
    emotion: "😰 ANSIEDAD CONSTANTE",
  },
  {
    icon: AlertTriangle,
    title: "Errores humanos en horarios y disponibilidad",
    description: "Citas mal agendadas, doble bookings, información incorrecta",
    color: "from-purple-500 to-pink-500",
    stat: "5-10 errores/día",
    emotion: "😤 FRUSTRACIÓN DIARIA",
  },
  {
    icon: DollarSign,
    title: "Pagar salario por tareas repetitivas",
    description: "Un empleado promedio cuesta $28,800 anuales solo en atención",
    color: "from-blue-500 to-purple-500",
    stat: "$28,800/año por persona",
    emotion: "💸 DINERO DESPERDICIADO",
  },
]

export default function PainPointSection() {
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

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: easeOut,
      },
    },
  }

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: easeOut },
    },
  }

  return (
    <section
      id="problema"
      className="relative py-10 bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden scroll-mt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-24 sm:w-40 h-24 sm:h-40 bg-red-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-20 sm:w-32 h-20 sm:h-32 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Title */}
        <motion.div variants={titleVariants} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full mb-6 font-semibold">
            <Brain className="w-5 h-5" />
            DIAGNÓSTICO: BURNOUT EMPRESARIAL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Te identificas con esto?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Los síntomas de la atención manual que están destruyendo tu negocio y tu salud mental
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point:PainPoint, index:number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="relative p-6 sm:p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${point.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Emotion Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                    {point.emotion}
                  </div>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${point.color} mb-6`}>
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stat Badge */}
                <div className="mb-4">
                  <div
                    className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${point.color} text-white text-sm font-bold`}
                  >
                    {point.stat}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors leading-tight">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors text-base md:text-lg">
                  {point.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Central Impact Statement */}
        <motion.div variants={cardVariants} className="text-center max-w-5xl mx-auto">
          <div className="p-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl text-white shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <TrendingDown className="w-8 h-8" />
              <Users className="w-8 h-8" />
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              La CRUDA REALIDAD: Estás trabajando MÁS para ganar MENOS
            </h3>
            <p className="text-xl opacity-90 mb-4">Mientras respondes mensajes, tu competencia está creciendo</p>
            <div className="text-lg font-semibold bg-white/20 rounded-full px-6 py-3 inline-block">
              ¿Cuánto tiempo más vas a seguir así? 🤔
            </div>
          </div>
        </motion.div>

        {/* Transition to Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true ,amount: 0.01}}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-4">
            <span className="font-bold text-indigo-600">PERO TRANQUILO...</span>
          </p>
          <p className="text-lg text-gray-600 mb-8">Hay una forma de liberarte de esta pesadilla para siempre 👇</p>
          <div className="w-12 h-12 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-3 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
