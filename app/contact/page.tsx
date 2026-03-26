import { ContactForm } from "@/components/contact/ContactForm"
import { Section } from "@/components/ui/section"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get in touch with us to schedule an appointment or ask any questions.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <div className="space-y-8">
                        <div className="bg-card p-8 rounded-xl shadow-sm border space-y-6">
                            <h2 className="text-2xl font-bold">Clinic Information</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-muted-foreground">3338 Hafsah Bint Umar, Ar Rawdah 2, Exit 12<br />Riyadh 7691, Saudi Arabia</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground">+966 58 084 4236</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">info@teethcare.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Hours</h3>
                                        <p className="text-muted-foreground">
                                            Mon - Thu: 09:00 - 22:00<br />
                                            Friday: 09:00 - 20:00<br />
                                            Sat - Sun: 09:00 - 22:00
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="h-64 bg-slate-200 rounded-xl overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-slate-100">
                                Google Map Embed Placeholder
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <ContactForm />
                    </div>
                </div>
            </Section>
        </div >
    )
}
