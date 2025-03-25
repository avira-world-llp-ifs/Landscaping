import FooterCard from "@/components/FooterCard"
import CraftloreFooter from "@/components/CraftloreFooter"

export default function FooterExamplesPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Footer Examples</h1>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Footer Card Component</h2>
          <p className="mb-8 text-gray-600">
            This component can be used as a call-to-action banner before the main footer.
          </p>
          <FooterCard />
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Craftlore Footer Component</h2>
          <p className="mb-8 text-gray-600">This is a comprehensive footer design for the Craftlore website.</p>
        </div>
      </div>

      {/* The Craftlore footer is full-width, so we place it outside the container */}
      <CraftloreFooter />
    </div>
  )
}

