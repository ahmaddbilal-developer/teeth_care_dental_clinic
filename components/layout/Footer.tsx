import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container px-4 md:px-6 py-12 md:py-16 mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="lg:col-span-2 space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/logo.png" alt="Teeth Care Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                        <span className="text-xl font-bold text-primary">Teeth Care</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        Premium dental care for a confident smile. We provide gentle, professional, and pain-free treatments for the whole family.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/" className="hover:text-primary">Home</Link></li>
                        <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                        <li><Link href="/gallery" className="hover:text-primary">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Services</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/services" className="hover:text-primary">Teeth Cleaning</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Whitening</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Root Canal</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Braces</Link></li>
                        <li><Link href="/services" className="hover:text-primary">Implants</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium">Contact</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                            <span>3338 Hafsah Bint Umar, Ar Rawdah 2, Exit 12, Riyadh 7691, Saudi Arabia</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone className="h-4 w-4 shrink-0" />
                            <span>+966 58 084 4236</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span>info@teethcare.com</span>
                        </li>
                        <li className="flex items-start gap-2 pt-2">
                            <div className="space-y-1">
                                <p className="font-medium text-foreground">Opening Hours:</p>
                                <p className="text-xs">Mon - Thu: 09:00 - 22:00</p>
                                <p className="text-xs">Friday: 09:00 - 20:00</p>
                                <p className="text-xs">Sat - Sun: 09:00 - 22:00</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border-t py-6">
                <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Teeth Care. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:underline">Privacy Policy</Link>
                        <Link href="#" className="hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}
