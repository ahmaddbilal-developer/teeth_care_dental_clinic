import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import { AppointmentModal } from "@/components/appointment/AppointmentModal"

export function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background">
            {/* Background with overlay - Placeholder for real image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40 z-10" />
                {/* In a real project, use Next.js Image here */}
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop')",
                        backgroundColor: "#cbd5e1"
                    }}
                />
            </div>

            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-center text-center space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl">
                    Glow Up Begins With <span className="text-primary-foreground">Your Smile</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto">
                    Premium Dental Care for a Confident Smile, right here in <span className="font-semibold text-white">Riyadh, Saudi Arabia</span>. Experience gentle, professional, and state-of-the-art dental treatment in a calm and relaxing environment.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <AppointmentModal trigger={
                        <Button size="lg" className="h-12 px-8 text-lg gap-2">
                            <Calendar className="h-5 w-5" />
                            Book Appointment
                        </Button>
                    } />

                    <Button size="lg" variant="outline" className="h-12 px-8 text-lg gap-2 bg-transparent text-white border-white hover:bg-white hover:text-primary-foreground" asChild>
                        <a href="tel:+966580844236">
                            <Phone className="h-5 w-5" />
                            Call Now
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
