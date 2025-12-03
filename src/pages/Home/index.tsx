import Navbar from "@components/Navbar"
import HomeSection from "@/components/Home"
import SpecialtiesSection from "@components/Home/SpecialtiesSection"
import FeaturesSection from "@/components/Home/FeaturesSection"
import { THEME } from "@/lib/constants"

function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <div className="py-5 px-5 lg:px-52" style={{ backgroundColor: THEME.backgroundSecondary }}>
        <SpecialtiesSection />
        <FeaturesSection />
      </div>
    </>
  )
}

export default Home