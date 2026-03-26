import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Stethoscope, Smile, Sparkles, HeartPulse, ScanFace, Syringe } from "lucide-react"

const services = [
    {
        title: "General Dentistry",
        description: "Routine checkups, cleanings, and fillings to maintain optimal oral health.",
        icon: Stethoscope,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Whitening, veneers, and makeovers for a stunning, confident smile.",
        icon: Sparkles,
    },
    {
        title: "Orthodontics",
        description: "Straighten your teeth with modern braces and clear aligners.",
        icon: Smile,
    },
    {
        title: "Root Canal",
        description: "Pain-free root canal treatments to save your natural teeth.",
        icon: HeartPulse,
    },
    {
        title: "Dental Implants",
        description: "Permanent, natural-looking replacements for missing teeth.",
        icon: Syringe, // Using Syringe as placeholder for Implant/Screw
    },
    {
        title: "Oral Surgery",
        description: "Expert surgical care including extractions and jaw procedures.",
        icon: ScanFace,
    },
]

export function Services() {
    return (
        <Section className="bg-card">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive dental care tailored to your specific needs.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 group bg-card">
                        <CardHeader className="space-y-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
    )
}
