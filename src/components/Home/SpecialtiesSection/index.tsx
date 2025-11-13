import { useTheme } from "@components/Theme/ThemeContext";
import BeverageCard from "./BeverageCard";
import VerticalDivider from "./VerticalDivider";

function SpecialtiesSection() {
  const { text } = useTheme();

  return (
    <div className="bg-[#f3eae1] py-10">
      {/* Testo */}
      <div className="w-full flex items-center justify-center p-5">
        <span
          className="text-3xl lg:text-5xl"
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: text,
          }}
        >
          Specialità
        </span>
      </div>

      <div className="w-full flex justify-center">
        <BeverageCard title="Espresso" description="Il classico caffè" />
        <VerticalDivider />
        <BeverageCard title="Latte" description="Bevande calde con latte" />
      </div>
    </div>
  )
}

export default SpecialtiesSection