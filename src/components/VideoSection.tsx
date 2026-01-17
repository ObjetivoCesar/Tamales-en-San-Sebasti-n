export default function VideoSection() {
    return (
        <section id="ubicacion" className="py-20 relative overflow-hidden">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl mb-4">Encuéntranos</h2>
                    <p className="text-gray-500 text-lg">
                        Estamos ubicados en la calle Bolívar, a pocos pasos del parque central.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px] md:h-[450px]">
                    {/* VIDEO: Cómo llegar */}
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-white h-full relative group">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                            title="Cómo llegar"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>

                    {/* MAPA */}
                    <div className="rounded-2xl overflow-hidden shadow-xl bg-white h-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1768656914399!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ3EwZXp6MkFF!2m2!1d-4.001874290569012!2d-79.20126504169961!3f162.69468173341252!4f-56.212893921992844!5f0.7820865974627469"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
