import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Medal, Users, Heart } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <section className="bg-background py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">About Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Building confident smiles through compassionate care and excellence in dentistry.
                    </p>
                </div>
            </section>

            {/* Our Story */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                Founded in 2010, Teeth Care began with a simple mission: to provide world-class dental care in a warm and welcoming environment. We understand that visiting the dentist can be stressful for many, which is why we&apos;ve designed our clinic to be a sanctuary of calm.
                            </p>
                            <p>
                                Over the years, we have grown from a small practice to a state-of-the-art facility equipped with the latest dental technology. Our team of specialists covers every aspect of dentistry, ensuring that you receive comprehensive care under one roof.
                            </p>
                        </div>
                        <div className="flex gap-8 pt-4">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold text-primary">15+</h3>
                                <p className="text-sm text-muted-foreground">Years Experience</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold text-primary">5k+</h3>
                                <p className="text-sm text-muted-foreground">Happy Patients</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-3xl font-bold text-primary">20+</h3>
                                <p className="text-sm text-muted-foreground">Specialists</p>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
                        {/* Placeholder for clinic interior */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop')" }}
                        />
                    </div>
                </div>
            </Section>

            {/* Mission */}
            <Section className="bg-muted/50">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tight">Our Values</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-card p-8 rounded-xl shadow-sm space-y-4 text-center">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Heart className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Compassion</h3>
                        <p className="text-muted-foreground">We treat every patient with kindness, empathy, and respect, ensuring a comfortable experience.</p>
                    </div>
                    <div className="bg-card p-8 rounded-xl shadow-sm space-y-4 text-center">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Medal className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Excellence</h3>
                        <p className="text-muted-foreground">We strive for perfection in every procedure, using the best materials and techniques available.</p>
                    </div>
                    <div className="bg-card p-8 rounded-xl shadow-sm space-y-4 text-center">
                        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Community</h3>
                        <p className="text-muted-foreground">We are proud to serve our local community and contribute to better oral health for everyone.</p>
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section>
                <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground space-y-6">
                    <h2 className="text-3xl font-bold">Join Our Family</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Experience the difference of patient-centered dental care.
                        We are accepting new patients.
                    </p>
                    <Button size="lg" variant="secondary" asChild className="font-bold">
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </Section>
        </div>
    )
}
