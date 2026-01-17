"use client";

import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "María Augusta",
            date: "Hace 2 semanas",
            comment: "¡Los mejores tamales de Loja! El sabor es auténtico y la atención excelente. Recomendadísimo el de chancho.",
            stars: 5,
            initial: "M"
        },
        {
            name: "Carlos E.",
            date: "Hace un mes",
            comment: "Me encanta el ambiente y la comida. Un lugar perfecto para ir con la familia. Los quimbolitos son una delicia.",
            stars: 5,
            initial: "C"
        },
        {
            name: "Juan P.",
            date: "Hace 3 días",
            comment: "Excelente servicio y calidad. Llegaron calientitos a la casa. Sin duda volveré a pedir.",
            stars: 5,
            initial: "J"
        }
    ];

    return (
        <section className="py-20 relative">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                        <span className="font-bold text-2xl">4.8</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 1].map((_, i) => (
                                <Star key={i} size={24} fill={i === 4 ? "url(#half)" : "currentColor"} className="text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-500 text-sm">(120+ Reseñas en Google)</span>
                    </div>
                </div>

                <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-4 snap-x snap-mandatory scrollbar-hide">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="glass-panel p-8 rounded-2xl relative hover:-translate-y-1 transition-transform duration-300 min-w-[85vw] md:min-w-0 snap-center"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {t.initial}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <span className="text-xs text-gray-500">{t.date}</span>
                                </div>
                                <div className="ml-auto flex">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5 opacity-50" />
                                </div>
                            </div>

                            <div className="flex mb-3 text-yellow-400">
                                {[...Array(t.stars)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-gray-600 italic">
                                "{t.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SVG Gradients/Defs */}
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="half">
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="transparent" stroke="currentColor" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
}
