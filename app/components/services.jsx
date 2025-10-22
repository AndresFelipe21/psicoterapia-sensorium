"use client"
import { useState } from "react"

export default function Services() {
  const services = [
    {
      title: "Psicoterapia Individual",
      image: "individual.jpg",
      description: "Enfocada a proporcionar habilidades que te permita vencer momentos de ansiedad, depresión, traumas, estrés, enojo, cambios importantes en tu vida, duelo por pérdida (muerte o separación) otros que puedas estar vivenciando."
    },
    {
      title: "Psicoterapia en Pareja",
      image: "pareja.jpg",
      description: "Les aportaré como pareja para abordar dificultades en la comunicación que les lleva a vivenciar conflictos, infidelidad, dificultades sexuales; o a transitar por un proceso de separación o divorcio."
    },
    {
      title: "Psicoterapia para niños y adolescentes",
      image: "ninos.webp",
      description: "Apoyaré los retos de esta etapa de desarrollo, como el manejo del estrés, dependencia, la autoestima, identidad, orientación sexual, solución de conflictos y los desafíos emocionales."
    },
    {
      title: "Psicoterapia Familiar",
      image: "familia.jpg",
      description: "Estaré con ustedes para ayudarles a mejorar la comunicación, resolver conflictos, desarrollar habilidades parentales efectivas y fortalecer los lazos familiares."
    }
  ]

  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services" className="px-10 py-16 bg-gray-50 relative">
      <h2 className="text-2xl font-bold mb-8">Servicios</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="flex items-center space-x-4">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-12 h-12 object-contain rounded-full bg-gray-100 p-2"
              />
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <button 
                  onClick={() => setSelectedService(service)} 
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <img 
              src={selectedService.image} 
              alt={selectedService.title} 
              className="w-60 h-60 mx-auto mb-6 object-contain rounded-full bg-gray-100 p-3"
            />
            <h3 className="text-3xl font-bold mb-4 text-center">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 text-lg">{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
