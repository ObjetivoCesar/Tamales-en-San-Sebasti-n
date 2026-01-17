import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Elements */}

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Content */}
                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                    <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold border border-amber-200">
                        Nuevo en San Sebastián
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        <span className="block text-primary">Tamales tradicionales</span>
                        en San Sebastián, Loja
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Tamales de chancho, pollo, mixtos y queso con la auténtica receta lojana. Perfectos para tu desayuno, cafecito o eventos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link href="#productos" className="btn-primary justify-center">
                            Ver Menú
                        </Link>
                        <Link href="#cafeteria" className="px-6 py-3 rounded-full font-semibold text-gray-700 border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all text-center">
                            Cafetería
                        </Link>
                    </div>
                </div>

                {/* Hero Image (Unified) */}
                <div className="relative order-1 md:order-2 flex justify-center">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-90 animate-pulse"></div>
                    <div className="relative z-10 w-72 h-72 md:w-[550px] md:h-[550px] animate-[float_6s_ease-in-out_infinite]">
                        <Image
                            src="/images/productos/tamal-pollo-removebg.png"
                            alt="Tamal Lojano"
                            fill
                            className="object-contain drop-shadow-2xl mix-blend-multiply"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
