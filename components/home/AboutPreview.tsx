import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function AboutPreview() {
    return (
        <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Placeholder */}
                <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 shadow-xl">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop')" }}
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Meet Dr. Sarah & The Team
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        At Teeth Care, we believe that a visit to the dentist should be a positive experience. Our clinic is designed to be relaxing and comfortable, putting you at ease from the moment you walk in.
                    </p>

                    <ul className="space-y-3">
                        {[
                            "Highly qualified and experienced team",
                            "State-of-the-art dental technology",
                            "Personalized treatment plans",
                            "Comfortable and relaxing environment"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4">
                        <Button asChild size="lg">
                            <Link href="/about">Learn More About Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    )
}
