import { Hero } from "@/components/home/Hero"
import { Services } from "@/components/home/Services"
import { AboutPreview } from "@/components/home/AboutPreview"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { Testimonials } from "@/components/home/Testimonials"
import { CTA } from "@/components/home/CTA"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </div>
  )
}
