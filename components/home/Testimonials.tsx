import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Liam Gave Sillada Clarin",
        review: "The place is very clean and the service is good 👍👍 thanks to doc alhorani and ate rose for being good to there clients.",
        rating: 5,
    },
    {
        name: "Vodkabella Manahan",
        review: "I love Dr. FATIMA she's so sweet and very kind 😍❤️♥️🥰",
        rating: 5,
    },
    {
        name: "Asim Akhtar",
        review: "Dr. Daren she is nice, and the kabayan Dr Hazel she is very nice and understanding. High five 👋 for Nurse Moral, she is wholesome",
        rating: 5,
    },
    {
        name: "Carlo Mirandilla",
        review: "Good dentists...",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <Section className="bg-muted/50">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Our Patients Say</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Don&apos;t just take our word for it. Read reviews from our happy patients.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t, i) => (
                    <Card key={i} className="border-none shadow-sm bg-card">
                        <CardContent className="pt-6 space-y-4">
                            <div className="flex gap-1">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic">&quot;{t.review}&quot;</p>
                            <p className="font-semibold text-sm">{t.name}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
