import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Stethoscope, Smile, Sparkles, HeartPulse, ScanFace, Syringe, Baby, Activity } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive oral exams, digital X-rays, and professional cleanings to prevent cavities and gum disease.",
        icon: Stethoscope,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Transform your smile with veneers, bonding, and professional whitening treatments for a radiant look.",
        icon: Sparkles,
    },
    {
        title: "Orthodontics",
        description: "Traditional braces and clear aligners to correct misaligned teeth and bite issues for all ages.",
        icon: Smile,
    },
    {
        title: "Root Canal Therapy",
        description: "Advanced endodontic treatment to save infected teeth and relieve pain effectively.",
        icon: HeartPulse,
    },
    {
        title: "Dental Implants",
        description: "The gold standard for replacing missing teeth, restoring both function and aesthetics seamlessly.",
        icon: Syringe,
    },
    {
        title: "Oral Surgery",
        description: "Wisdom teeth extraction, bone grafting, and other surgical procedures performed with care.",
        icon: ScanFace,
    },
    {
        title: "Pediatric Dentistry",
        description: "Gentle and fun dental care specifically designed for children to build healthy habits early.",
        icon: Baby,
    },
    {
        title: "Periodontal Care",
        description: "Treatment of gum disease to protect the foundation of your teeth and overall health.",
        icon: Activity,
    },
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Header */}
            <section className="bg-background py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Treatments</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We offer a full range of dental services using the latest technology to ensure the best possible care for you and your family.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <Section>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section className="bg-primary/5 py-16">
                <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">Need a Custom Treatment Plan?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Schedule a consultation with our experienced dentists to discuss your specific needs and goals.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="/appointment">Book a Consultation</Link>
                    </Button>
                </div>
            </Section>
        </div>
    )
}
