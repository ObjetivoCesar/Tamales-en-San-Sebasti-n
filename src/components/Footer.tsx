export default function Footer() {
    return (
        <footer className="bg-black text-white py-16 mt-20 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

                    {/* COL 1: Logo */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent inline-block">
                            Chabaquito
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            La auténtica tradición lojana en cada bocado. Tamales, humitas y quimbolitos hechos con amor.
                        </p>
                    </div>

                    {/* COL 2: Contacto */}
                    <div className="flex flex-col items-center md:items-start pl-0 md:pl-8">
                        <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">Contáctanos</h4>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-center gap-2 justify-center md:justify-start">
                                <span>📍</span> San Sebastián, Loja
                            </p>
                            <p className="flex items-center gap-2 justify-center md:justify-start">
                                <span>📱</span> 098 281 0040 <span className="text-xs opacity-50">(Rosa Quezada)</span>
                            </p>
                            <p className="flex items-center gap-2 justify-center md:justify-start">
                                <span>✉️</span> info@chabaquito.com
                            </p>
                        </div>
                    </div>

                    {/* COL 3: Enlaces */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-bold mb-4 text-white uppercase tracking-wider">Enlaces</h4>
                        <ul className="space-y-2 text-gray-400">
                            {['Menú', 'Ubicación', 'Historia', 'Testimonios'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-12 text-center text-sm text-gray-500 relative z-20">
                    <p>
                        &copy; {new Date().getFullYear()} Chabaquito. Todos los derechos reservados. | Diseñado por <a href="http://cesarreyesjaramillo.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors">César Reyes</a>
                    </p>
                </div>
            </div>

            {/* Decoration: Superimposed Tamalito */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 md:w-80 md:h-80 pointer-events-none opacity-90 z-0">
                {/* Updated image as requested */}
                <img
                    src="/images/productos/tamal-lojano_web-removebg-preview.png"
                    alt="Tamal Lojano Decorativo"
                    className="w-full h-full object-contain filter drop-shadow-2xl brightness-90 contrast-110 rotate-[-15deg]"
                />
            </div>
        </footer>
    );
}
