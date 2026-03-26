import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { ShieldCheck, Clock, Award, Leaf } from "lucide-react"

const features = [
    {
        title: "Experienced Dentists",
        description: "Our team of specialists has over 20 years of combined experience.",
        icon: Award,
    },
    {
        title: "Modern Technology",
        description: "We use the latest dental equipment for precise and painless treatments.",
        icon: ShieldCheck,
    },
    {
        title: "Pain-Free Treatment",
        description: "Advanced techniques to ensure your comfort during every procedure.",
        icon: Leaf,
    },
    {
        title: "Flexible Scheduling",
        description: "Late evening and weekend appointments available to fit your busy life.",
        icon: Clock,
    },
]

export function WhyChooseUs() {
    return (
        <Section className="bg-muted/50">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Choose Us</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We are committed to providing the highest standard of dental care.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <Card key={index} className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow bg-card">
                        <CardContent className="pt-6 flex flex-col items-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full shadow-sm text-primary">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="font-semibold text-xl">{feature.title}</h3>
                            <p className="text-muted-foreground text-sm">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
