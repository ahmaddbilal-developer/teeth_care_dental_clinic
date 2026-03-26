import { AppointmentForm } from "@/components/appointment/AppointmentForm"
import { Section } from "@/components/ui/section"

export default function AppointmentPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Book an Appointment</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to enhance your smile? Schedule your visit today.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-card p-8 rounded-xl shadow-lg border">
                        <h2 className="text-2xl font-bold mb-6">Patient Information</h2>
                        <AppointmentForm />
                    </div>
                </div>
            </Section>
        </div>
    )
}
