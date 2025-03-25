"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error occurred:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">We apologize for the inconvenience. An unexpected error has occurred.</p>
        <div className="flex justify-center space-x-4">
          <Button onClick={() => (window.location.href = "/")} variant="outline">
            Go Home
          </Button>
          <Button onClick={() => reset()} variant="default">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}

