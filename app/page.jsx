import About from "./components/about";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Contact from "./components/contact";

export default function HomePage () {
    return (
        <main className="font-sans">
            <Navbar />
            <Hero/>
            <About />
            <Services/>
            <Contact/>
        </main>
    )    
}