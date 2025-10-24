"use client";
import { useState } from "react";

export default function AgendarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    fecha: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("✅ Tu cita ha sido agendada con éxito. Nos contactaremos contigo pronto.");
    // Aquí podrías enviar los datos a tu backend o API (ejemplo: fetch('/api/citas', { method: 'POST', body: JSON.stringify(formData) }))
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#E0F7F4] to-[#C8EAE5] px-6 py-12">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-[#3FB6A8] mb-6">
          Agenda tu cita
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Por favor completa tus datos para que podamos contactarte.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB6A8]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB6A8]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB6A8]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Fecha de la cita</label>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB6A8]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mensaje o motivo de la cita</label>
            <textarea
              name="mensaje"
              rows="3"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3FB6A8]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3FB6A8] text-white font-semibold py-3 rounded-lg hover:bg-[#36a296] transition-colors"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}
