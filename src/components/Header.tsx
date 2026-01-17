"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, Phone, ShoppingBag } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'h-[70px] glass-panel' : 'h-[90px] bg-transparent'}`}>
            <div className="container h-full flex items-center justify-between">
                {/* Brand */}
                <div className={`flex items-center gap-2 text-2xl font-extrabold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}>
                    {/* Logo Image */}
                    <div className="relative w-10 h-10 md:w-12 md:h-12">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/general/logo.png" alt="Logo" className="object-contain w-full h-full" />
                    </div>
                    <span>Chabaquito</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Nuestros Tamales', 'Cafetería', 'Historia', 'Ubicación'].map((item) => (
                        <Link key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide">
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <button className="btn-primary">
                    <Phone size={18} /> <span>Pedir Ya</span>
                </button>
            </div>
        </header>
    );
}
