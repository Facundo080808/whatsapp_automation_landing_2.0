"use client"

import { Bot, MessageCircle, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre el Agente IA para automatizar mi negocio.")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank")
  }

  return (
   <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Agente IA</h3>
            <p className="text-gray-400 text-sm">Automatización Inteligente</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
          Transformamos tu atención al cliente con inteligencia artificial. Nunca más pierdas un lead por respuestas lentas.
        </p>
      </div>

      <div className="flex justify-start md:justify-end">
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Empezar Ahora
        </button>
      </div>
      
    </div>
  </div>
</footer>
)
}

// <footer className="bg-gray-900 text-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {/* Company Info */}
//       <div className="flex justify-between lg:col-span-2">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
//             <Bot className="w-6 h-6 text-white" />
//           </div>
//           <div>
//             <h3 className="text-xl font-bold">Agente IA</h3>
//             <p className="text-gray-400 text-sm">Automatización Inteligente</p>
//           </div>
//         </div>
//         <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
//           Transformamos tu atención al cliente con inteligencia artificial. Nunca más pierdas un lead por respuestas
//           lentas.
//         </p>
//         <div className="flex items-center gap-4">
//           <button
//             onClick={handleWhatsAppClick}
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
//           >
//             <MessageCircle className="w-5 h-5" />
//             Empezar Ahora
//           </button>
//         </div>
//       </div>

//       {/* Contact Info */}
//       {/* <div>
//         <h4 className="text-lg font-semibold mb-6">Contacto</h4>
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             <MessageCircle className="w-5 h-5 text-green-500" />
//             <span className="text-gray-300">WhatsApp: +1 (234) 567-890</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Mail className="w-5 h-5 text-blue-500" />
//             <span className="text-gray-300">hola@agenteai.com</span>
//           </div>
//           <div className="flex items-center gap-3">
//             <Phone className="w-5 h-5 text-purple-500" />
//             <span className="text-gray-300">+1 (234) 567-891</span>
//           </div>
//           <div className="flex items-start gap-3">
//             <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
//             <span className="text-gray-300">
//               Miami, FL
//               <br />
//               Estados Unidos
//             </span>
//           </div>
//         </div>
//       </div> */}

//       {/* Support Hours */}
//       {/* <div>
//         <h4 className="text-lg font-semibold mb-6">Soporte</h4>
//         <div className="space-y-4">
//           <div className="flex items-center gap-3">
//             <Clock className="w-5 h-5 text-indigo-500" />
//             <div>
//               <p className="text-gray-300 font-medium">24/7 Disponible</p>
//               <p className="text-gray-400 text-sm">Respuesta inmediata</p>
//             </div>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-xl">
//             <p className="text-green-400 font-semibold text-sm mb-1">✓ Setup Gratuito</p>
//             <p className="text-green-400 font-semibold text-sm mb-1">✓ Integración en 48h</p>
//             <p className="text-green-400 font-semibold text-sm mb-1">✓ Soporte Técnico</p>
//             <p className="text-green-400 font-semibold text-sm">✓ Garantía Total</p>
//           </div>
//         </div>
//       </div> */}
//     </div>

//     {/* Bottom Bar */}
//     {/* <div className="border-t border-gray-800 mt-12 pt-8">
//       <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//         <p className="text-gray-400 text-sm">© 2024 Agente IA. Todos los derechos reservados.</p>
//         <div className="flex items-center gap-6 text-sm text-gray-400">
//           <a href="#" className="hover:text-white transition-colors">
//             Términos de Servicio
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Política de Privacidad
//           </a>
//           <a href="#" className="hover:text-white transition-colors">
//             Cookies
//           </a>
//         </div>
//       </div>
//     </div> */}
//   </div>
// </footer>