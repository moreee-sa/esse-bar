import HomeText from "@components/Home/HomeText"
import HomeImage from "@components/Home/HomeImage"

function HomeSection() {
  return (
    <div className="w-full h-[60vh] md:h-[60vh] lg:h-[80vh] relative overflow-hidden">
      <HomeImage />
      <HomeText />
    </div>
  )
}

export default HomeSection