"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-20 right-6 z-50">
      {/* Contact options that appear when the button is clicked */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-end space-y-3 mb-3">
            {/* Phone option */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link
                href="tel:+1234567890"
                className="flex items-center bg-white text-[#003087] px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">Call Us</span>
              </Link>
            </motion.div>

            {/* Email option */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="mailto:contact@example.com"
                className="flex items-center bg-white text-[#003087] px-4 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                <span className="font-medium">Email Us</span>
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <button
        onClick={toggleOpen}
        className="bg-gray-200 fixed right-6 bottom-6 text-[#003087] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#ff5e14] transition-colors focus:outline-none"
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  )
}

