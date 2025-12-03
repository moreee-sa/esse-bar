import InfoBox from "./InfoBox"
import ScheduleBox from "./ScheduleBox"

function FeaturesSection() {
  return (
    <div className="flex flex-col lg:flex-row box-content">
      <InfoBox />
      <ScheduleBox />
    </div>
  )
}

export default FeaturesSection