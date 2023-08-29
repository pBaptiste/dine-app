import Banner from "@/components/Banner"
import ExperienceSection from "@/components/ExperienceSection"
import HighLightsSection from "@/components/HighLightsSection"
import EventsSection from "@/components/EventsSection"
import CallToAction from "@/components/CallToAction"

export default function Home() {
  return (
    <main>
      <Banner/>
      <ExperienceSection />
      <HighLightsSection />
      <EventsSection />
      <CallToAction />
    </main>
  )
}
