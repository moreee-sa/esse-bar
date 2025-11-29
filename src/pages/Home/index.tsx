import Navbar from "@components/Navbar"
import HomeSection from "@/components/Home"
import SpecialtiesSection from "@components/Home/SpecialtiesSection"
import FeaturesSection from "@/components/Home/FeaturesSection"

function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <SpecialtiesSection />
      <FeaturesSection />
    </>
  )
}

export default Home