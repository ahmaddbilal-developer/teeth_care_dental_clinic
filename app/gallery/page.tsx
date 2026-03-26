"use client"

import { Section } from "@/components/ui/section"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Search } from "lucide-react"

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
        alt: "Modern Treatment Room",
        category: "Clinic",
    },
    {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop",
        alt: "Root Canal Specialist",
        category: "Procedures",
    },
    {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop",
        alt: "Dental Examination",
        category: "Procedures",
    },
    {
        src: "https://images.unsplash.com/photo-1579684385183-1b60fe78b97a?q=80&w=2070&auto=format&fit=crop",
        alt: "Waiting Area",
        category: "Clinic",
    },
    {
        src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=2069&auto=format&fit=crop",
        alt: "Dental Tools",
        category: "Equipment",
    },
    {
        src: "https://images.unsplash.com/photo-1598256989494-0363070d355c?q=80&w=2835&auto=format&fit=crop",
        alt: "Happy Patient",
        category: "Patients",
    },
]

export default function GalleryPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <section className="bg-background py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Gallery</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Take a tour of our modern clinic and see the smiles we&apos;ve created.
                    </p>
                </div>
            </section>

            <Section>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image, index) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-square bg-muted">
                                    {/* Placeholder for Next/Image */}
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${image.src}')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <Search className="text-white h-8 w-8" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="font-medium text-sm">{image.alt}</p>
                                        <p className="text-xs text-slate-200">{image.category}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl p-0 overflow-hidden border-none bg-transparent shadow-none">
                                <div className="relative aspect-video w-full">
                                    <div
                                        className="w-full h-full bg-contain bg-center bg-no-repeat"
                                        style={{ backgroundImage: `url('${image.src}')` }}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </Section>
        </div>
    )
}
