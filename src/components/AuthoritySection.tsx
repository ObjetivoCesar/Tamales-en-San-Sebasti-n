"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function AuthoritySection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="historia" className="py-20 bg-white/50 backdrop-blur-sm">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">¿Qué es el tamal lojano? Historia y tradición</h2>

                    <div className="max-w-4xl mx-auto text-lg text-gray-600 leading-relaxed text-left space-y-4 relative transition-all duration-500">
                        {/* Content Container with conditional class */}
                        <div className={`${!isExpanded ? 'h-40 overflow-hidden mask-bottom-fade' : ''} transition-all duration-500`}>
                            <p>
                                El <strong className="text-primary-dark">tamal lojano</strong> es una delicia tradicional de la ciudad de Loja, Ecuador, especialmente apreciada en lugares icónicos como San Sebastián. Esta preparación artesanal se diferencia por su masa de <strong>maíz amarillo molido</strong> finamente y sazonado, logrando una textura suave inconfundible.
                            </p>
                            <br />
                            <p>
                                Los tamales lojanos reflejan la mezcla cultural de nuestra gastronomía. Son un símbolo de hospitalidad, presentes tanto en un buen <strong>desayuno con café caliente</strong> como en reuniones familiares. Lo que realmente lo hace único es su envoltura en <strong>hojas de achira</strong>, que infunde un aroma herbal delicioso al cocinarse al vapor.
                            </p>
                            <br />
                            <p>
                                La preparación comienza seleccionando el mejor maíz, que se remoja y muele. Luego, se cocina con manteca de cerdo y especias hasta obtener una masa homogénea ("sango"). El relleno, conocido como "condumio", suele ser de pollo o cerdo estofado con arvejas y zanahorias. Finalmente, se envuelve y se cuece al vapor, resultando en un manjar listo para disfrutar.
                            </p>
                        </div>

                        {/* Toggle Button */}
                        <div className="text-center mt-4">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-primary font-bold hover:underline focus:outline-none"
                            >
                                {isExpanded ? 'Ocultar' : 'Seguir leyendo...'}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Card 1 */}
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-300 border border-white/60 shadow-xl">
                        <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/images/productos/tamal-pollo.png" // Placeholder or specific image
                                alt="Elaboración Artesanal"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Elaboración Artesanal</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Cada tamal se prepara a mano, siguiendo la receta de la abuela. Desde la molienda del maíz hasta la envoltura en hoja de achira.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-300 border border-white/60 shadow-xl">
                        <div className="relative w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-md">
                            <Image
                                src="/images/productos/tamal-queso.png" // Using the queso placeholder
                                alt="Ingredientes Frescos"
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">Ingredientes Frescos</h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Utilizamos solo ingredientes frescos y locales. Pollo de campo, manteca pura y el mejor quesillo lojano.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
