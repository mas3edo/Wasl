"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const saduSquares = [
    [-1, -1], [0, -1], [1, -1],
    [-1, 0], [1, 0],
    [-1, 1], [0, 1], [1, 1],
    [-2, -2], [2, -2], [-2, 2], [2, 2],
    [0, -3], [-1, -4], [0, -4], [1, -4], [0, -5],
    [0, 3], [-1, 4], [0, 4], [1, 4], [0, 5],
    [3, 0], [4, -1], [4, 0], [4, 1], [5, 0],
    [-3, 0], [-4, -1], [-4, 0], [-4, 1], [-5, 0],
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { path: '/', label: 'الرئيسية' },
        { path: '/services', label: 'خدماتنا' },
        { path: '/about', label: 'من نحن' },
        { path: '/contact', label: 'اتصل بنا' }
    ];

    const isActive = (path) => pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${isScrolled
                ? 'bg-[#0a132e]/86 backdrop-blur-lg shadow-lg'
                : 'bg-[#0a132e]/66 backdrop-blur-md md:bg-transparent md:backdrop-blur-0'
                }`}
        >
            <nav className="mx-auto w-full max-w-7xl px-4 py-2.5 sm:px-6 lg:px-8" dir="rtl">
                <div className="flex items-center justify-between gap-4">
                    <motion.div
                        className="text-2xl font-bold"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Link href="/" className="flex items-center gap-2.5">
                        <svg
                            viewBox="0 0 140 140"
                            className="h-auto w-8 text-[#8B0016] transition-transform duration-300 hover:scale-105 md:w-9"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="miter"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g transform="translate(70, 70)">
                                {saduSquares.map(([x, y], i) => (
                                    <rect key={i} x={x * 10 - 4} y={y * 10 - 4} width="8" height="8" />
                                ))}
                            </g>
                        </svg>
                            <span className="text-xl font-extrabold leading-none text-[#8B0016] md:text-2xl">وصل</span>
                            <span className="text-white/40">|</span>
                            <span className="text-sm text-white/70 md:text-base">Wasl</span>
                        </Link>
                    </motion.div>
                    <div className="hidden items-center gap-6 md:flex lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className="group relative"
                            >
                                <motion.span
                                    className={`text-sm transition-colors lg:text-base ${isActive(link.path) ? 'text-white' : 'text-white/80 hover:text-white'
                                        }`}
                                    whileHover={{ y: -2 }}
                                >
                                    {link.label}
                                </motion.span>
                                <span
                                    className={`absolute bottom-0 right-0 h-0.5 bg-gradient-to-l from-[#8B0016] to-[#3B0009] transition-all duration-300 ${isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
                        aria-controls="mobile-nav-menu"
                        aria-expanded={isMobileMenuOpen}
                        className="relative z-[100] flex h-12 w-12 cursor-pointer touch-manipulation items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white md:hidden"
                        onClick={(e) => {
                            e.preventDefault();
                            setIsMobileMenuOpen((prev) => !prev);
                        }}
                    >
                        <span className="sr-only">{isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}</span>
                        {isMobileMenuOpen ? <X size={22} className="pointer-events-none" /> : <Menu size={22} className="pointer-events-none" />}
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <>
                    <button
                        type="button"
                        aria-label="إغلاق القائمة"
                        className="fixed inset-0 top-[64px] z-40 bg-black/35 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <motion.div
                        id="mobile-nav-menu"
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed inset-x-0 top-[64px] z-[75] border-t border-white/10 bg-[#0a132e]/95 py-3 backdrop-blur-xl md:hidden"
                        dir="rtl"
                    >
                        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        className={`block rounded-xl px-3 py-3 text-sm transition-colors ${isActive(link.path)
                                            ? 'bg-white/10 font-semibold text-white'
                                            : 'text-white/85 hover:bg-white/5 hover:text-white'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </header>
    );
}
