import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { AppointmentModal } from "@/components/appointment/AppointmentModal"
import Link from "next/link"

export function CTA() {
    return (
        <Section className="bg-primary text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Ready for a Confident Smile?
                    </h2>
                    <p className="text-lg text-primary-foreground/90">
                        Book your appointment today and take the first step towards better oral health.
                        New patients are always welcome!
                    </p>
                </div>
                <div className="flex shrink-0 gap-4">
                    <AppointmentModal trigger={
                        <Button size="lg" variant="secondary" className="text-primary font-bold">
                            Book Appointment
                        </Button>
                    } />
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </Section>
    )
}
