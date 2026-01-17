"use client";

import { useState } from 'react';
import Image from 'next/image';
import { products, ProductType } from '@/data/products';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function ProductShowcase() {
    const [activeTab, setActiveTab] = useState<ProductType>('tamales');

    const filteredProducts = products.filter(p => p.type === activeTab);

    return (
        <section id="productos" className="py-20 relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-dark mb-4 px-4 leading-tight">
                        Tamales de chancho, pollo, mixtos y queso en San Sebastián
                    </h2>
                    <p className="text-xl text-gray-600">
                        La auténtica tradición de la gastronomía lojana
                    </p>
                </div>

                {/* TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-20">
                    {(['tamales', 'humitas', 'quimbolitos'] as ProductType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 border backdrop-blur-sm
                                ${activeTab === tab
                                    ? 'bg-primary text-white border-primary shadow-lg shadow-amber-500/30 scale-105'
                                    : 'bg-white/60 text-gray-700 border-white/50 hover:bg-white/90 hover:scale-105'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 pt-12 px-4">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProductCard({ product }: { product: typeof products[0] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => setCurrentImageIndex((p) => (p + 1) % product.images.length);
    const prevImage = () => setCurrentImageIndex((p) => (p - 1 + product.images.length) % product.images.length);

    const handleOrder = async () => {
        // Track click to Google Sheets
        try {
            await fetch('https://script.google.com/macros/s/AKfycbz3VLAaojJiD3TgJPiMHvboVlr9Lp8M3LKjTZdJJcWhiG8vFKLtKIMtiIlb8E4mIly2Mg/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    producto: product.name,
                    precio: product.price
                })
            });
        } catch (error) {
            console.log('Analytics tracking failed:', error);
        }

        // Open WhatsApp
        const phone = '593982810040';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(product.waMessage)}`;
        window.open(url, '_blank');
    };

    return (
        <article className="group relative flex flex-col pt-24 mt-12 rounded-[2rem] bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
            {/* IMAGE CONTAINER (Floating) */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 drop-shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-inner bg-white/10">
                    <Image
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        fill
                        className="object-cover mix-blend-multiply scale-110"
                        priority={true}
                    />

                    {/* Price Badge */}
                    {product.id.includes('tamal') && ( // Apply to all tamales if desired
                        <div className="absolute top-4 right-6 w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center font-extrabold text-lg shadow-lg rotate-12 border-2 border-white z-30 animate-pulse">
                            {product.price}
                        </div>
                    )}

                    {/* Slider Controls */}
                    {product.images.length > 1 && (
                        <>
                            <button onClick={prevImage} className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-md flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={nextImage} className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full shadow-md flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
                                <ChevronRight size={20} />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 flex flex-col items-center text-center p-8 pt-20">
                <div className="mb-4">
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-1">{product.name}</h3>
                    <span className="text-2xl font-bold text-primary-dark block">{product.price}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                    {product.description}
                </p>

                <div className="mb-8 w-full">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Ingredientes</h4>
                    <ul className="flex flex-wrap gap-2 justify-center">
                        {product.ingredients.slice(0, 4).map(ing => (
                            <li key={ing} className="bg-white/50 border border-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                                {ing}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={handleOrder}
                    className="w-full bg-red-600 text-white py-3.5 rounded-full font-bold shadow-lg shadow-red-600/20 hover:bg-red-700 hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 group/btn"
                >
                    <ShoppingBag size={20} className="group-hover/btn:animate-bounce" />
                    Pedir Ahora
                </button>
            </div>
        </article>
    );
}
