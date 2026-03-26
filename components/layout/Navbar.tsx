"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { AppointmentModal } from "@/components/appointment/AppointmentModal"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    const toggleMenu = () => setIsOpen(!isOpen)

    // Close menu when route changes
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    {/* Logo */}
                    <Image src="/logo.png" alt="Teeth Care Logo" width={80} height={80} className="w-10 h-10 object-contain" />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-primary leading-none">Teeth Care</span>
                        <span className="text-xs text-muted-foreground font-medium">Dental Clinic</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-foreground/60"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a href="tel:+966580844236" className="text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>+966 58 084 4236</span>
                    </a>
                    <AppointmentModal />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t bg-background overflow-hidden"
                    >
                        <div className="container px-4 py-4 space-y-4">
                            <nav className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === link.href ? "text-primary" : "text-foreground/60"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>
                            <div className="flex flex-col gap-4 mt-6">
                                <a href="tel:+966580844236" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                    <span>+966 58 084 4236</span>
                                </a>
                                <AppointmentModal />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
