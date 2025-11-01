import HomeText from "@components/Home/HomeText"
import HomeImage from "@components/Home/HomeImage"

function HomeSection() {
  return (
    <div className="p-6 lg:px-20 lg:py-6">
        <div className="flex flex-col justify-center items-center lg:flex-row rounded-xl overflow-hidden w-full">
          <HomeText />
          <HomeImage />
        </div>
    </div>
  )
}

export default HomeSection