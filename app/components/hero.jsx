export default function Hero() {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-40 py-15 bg-no-repeat bg-[length:40%] bg-[position:right_50%]"
      style={{ backgroundImage: "url('/principal.png')" }}
    >
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold leading-snug text-black">
          Tu bienestar emocional es nuestra prioridad
        </h1>
        <h5 className="text-3xl font-bold leading-snug text-gray-700">
          Sesiones de terapia online personalizadas para tu bienestar emocional
        </h5>
        <button className="mt-6 px-6 py-3 bg-[#3FB6A8] text-white rounded-lg hover:bg-[#3FB6A8]">
          Agendar una cita
        </button>
      </div>
    </section>
  )
}

