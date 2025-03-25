"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>

      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h4 className="text-xl font-bold text-green-600 mb-2">Message Sent Successfully!</h4>
          <p className="text-gray-600 text-center">
            Thank you for reaching out. Our team will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <Input
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              className="w-full"
              placeholder="+1 (123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full min-h-[120px]"
              placeholder="How can we help you?"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#003087] hover:bg-[#002266] text-white py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </form>
      )}
    </div>
  )
}

