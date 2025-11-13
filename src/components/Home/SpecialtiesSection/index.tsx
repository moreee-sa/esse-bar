import { useTheme } from "@components/Theme/ThemeContext";
import BeverageCard from "./BeverageCard";

function SpecialtiesSection() {
  const { text } = useTheme();

  return (
    <div className="bg-[#f3eae1] py-10">
      <div className="w-full flex items-center justify-center p-5">
        <span
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: text,
          }}
        >
          Specialità
        </span>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-10 lg:gap-0">
        <BeverageCard title="Espresso" description="Il classico caffè" />
        <BeverageCard title="Latte" description="Bevande calde con latte" />
        <BeverageCard title="Cappuccino" description="Il classico con latte montato e schiuma" />
        <BeverageCard title="Macchiato" description="Un tocco di latte sul tuo espresso" />
      </div>
    </div>
  )
}

export default SpecialtiesSection