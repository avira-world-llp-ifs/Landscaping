import Service from "@/components/Service/Service"
import { ServerIcon, ShieldIcon, SpeedIcon, SupportIcon } from "@/components/Services/ServiceIcons"

export default function ServiceExamplePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Service Component Examples</h1>

        <h2 className="text-2xl font-semibold mb-4">Default Vertical Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Service
            icon={<ServerIcon />}
            title="Cloud Hosting"
            description="Reliable and scalable cloud hosting solutions for your applications with 99.9% uptime guarantee."
            link="/services/cloud-hosting"
          />

          <Service
            icon={<ShieldIcon />}
            title="Security Services"
            description="Advanced security measures to protect your data and applications from threats and vulnerabilities."
            link="/services/security"
            linkText="View security options"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Horizontal Layout</h2>
        <div className="space-y-6">
          <Service
            icon={<SpeedIcon />}
            title="Performance Optimization"
            description="Boost your application performance with our optimization techniques and best practices."
            link="/services/performance"
            className="horizontal"
          />

          <Service
            icon={<SupportIcon />}
            title="24/7 Support"
            description="Round-the-clock technical support to help you resolve issues and answer your questions."
            link="/services/support"
            className="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

