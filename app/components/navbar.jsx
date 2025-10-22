import Link from "next/link"

export default function Navbar () {
    return (
        <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 z-50 
bg-gradient-to-r from-[#2F5DAB] to-[#5C9CE6]
">
            <div className="text-2xl font-bold">PSICOTERAPIA SENSORIUM</div>
            <div className="space-x-6">
                <Link href="#inicio">Inicio</Link>
                <Link href="#about">Sobre mí</Link>
                <Link href="#services">Servicios</Link>
                <Link href="#contact">Contacto</Link>
            </div>
        </nav>
    )
}