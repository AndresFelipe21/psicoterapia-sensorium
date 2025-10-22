export default function Contact() {
  return (
    <section id="contact" className="px-10 py-16 bg-white">
      <h2 className="text-2xl font-bold mb-6">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <form className="space-y-4">
          <input type="text" placeholder="Nombre completo" className="w-full p-3 border rounded-lg"/>
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 border rounded-lg"/>
          <textarea placeholder="Mensaje" className="w-full p-3 border rounded-lg h-32"></textarea>
          <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-900">
            Enviar mensaje
          </button>
        </form>

        <div className="flex flex-col items-center justify-center bg-gray-100 rounded-lg p-6">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
          <p>Dirección de ejemplo</p>
        </div>
      </div>
    </section>
  )
}
