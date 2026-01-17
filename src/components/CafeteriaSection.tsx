import Image from 'next/image';

export default function CafeteriaSection() {
    return (
        <section id="cafeteria" className="py-20">
            <div className="container">
                <div className="glass-panel p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Menú del Día</span>
                        <h2 className="text-3xl md:text-4xl">Almuerzos Ejecutivos</h2>
                        <div className="space-y-4 text-gray-600">
                            <p className="text-lg">
                                Disfruta de una experiencia casera completa.
                            </p>
                            <ul className="space-y-2 inline-block text-left">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span> Sopa del día (tradicional)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span> Plato fuerte variado
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span> Bebida natural
                                </li>
                            </ul>
                        </div>
                        <div className="pt-4">
                            <button className="btn-primary w-full md:w-auto justify-center">
                                Ver Menú de Hoy
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex justify-center relative">
                        <div className="absolute inset-0 bg-amber-100/50 rounded-full blur-3xl transform scale-75"></div>
                        <Image
                            src="/images/productos/tamal-chancho.png"
                            alt="Almuerzo Ejecutivo"
                            width={400}
                            height={400}
                            className="relative z-10 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
