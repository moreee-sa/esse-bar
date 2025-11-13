import InfoBox from "./InfoBox"
import ScheduleBox from "./ScheduleBox"

function FeaturesSection() {
  return (
    <div className="bg-[#452a1b] flex flex-col lg:flex-row box-content">
      <InfoBox />
      <ScheduleBox />
    </div>
  )
}

export default FeaturesSection