"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import PainPointSection from "@/components/sections/pain-point-section"
import SystemSection from "@/components/sections/system-section"
import TestimonialSection from "@/components/sections/testimonial-section"
import CTASection from "@/components/sections/cta-section"
import WhatsAppButton from "@/components/whatsapp-button"
import PricingSection from "@/components/pricing-section"
import HourCostCalculator from "@/components/hour-cost-calculator"
import InlineBookingDemo from "@/components/inline-booking-demo"
import InlineDashboardDemo from "@/components/inline-dashboard-demo"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        <HeroSection />
        <PainPointSection />

        {/* Sección de Solución - Con demo inline */}
        <section
          id="solucion"
          className="relative py-10 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
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
            </div>

            {/* Demo Interactivo Inline */}
            <InlineBookingDemo />
          </div>
        </section>

        {/* Sección Cómo Funciona - Simplificada */}
        <section
          id="como-funciona"
          className="relative py-5 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { title: "Cliente escribe", desc: "WhatsApp/Instagram", color: "bg-green-500" },
                { title: "IA procesa", desc: "Análisis inteligente", color: "bg-blue-500" },
                { title: "Respuesta", desc: "Como si fueras tú", color: "bg-purple-500" },
                { title: "Acción", desc: "Agenda en tu CRM", color: "bg-orange-500" },
                { title: "Notificación", desc: "Solo si es necesario", color: "bg-amber-500" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                  >
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección ROI - Con calculadora mejorada */}
        <section
          id="roi"
          className="relative py-10 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Los números
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  hablan por sí solos
                </span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Descubre cuánto dinero pierdes respondiendo WhatsApp manualmente
              </p>
            </div>

            <HourCostCalculator />
          </div>
        </section>

        {/* Sección Dashboard - Inline */}
        <section className="relative py-10 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InlineDashboardDemo />
          </div>
        </section>

        {/* Sección de Pricing */}
        <PricingSection />

        <SystemSection />
        {/* <TestimonialSection /> */}
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
