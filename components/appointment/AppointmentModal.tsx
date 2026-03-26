"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AppointmentForm } from "./AppointmentForm"

interface AppointmentModalProps {
    trigger?: React.ReactNode
}

export function AppointmentModal({ trigger }: AppointmentModalProps) {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || <Button>Book Appointment</Button>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Book Your Visit</DialogTitle>
                    <DialogDescription>
                        Fill out the form below to request an appointment. We&apos;ll get back to you to confirm.
                    </DialogDescription>
                </DialogHeader>
                <AppointmentForm onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}
