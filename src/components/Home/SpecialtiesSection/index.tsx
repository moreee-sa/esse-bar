import BeverageCard from "./BeverageCard";
import { THEME } from "@/lib/constants";

function SpecialtiesSection() {
  return (
    <div className="flex flex-col gap-5 py-5">
      <div className="w-full flex items-center md:justify-center py-3">
        <span
          className="text-3xl md:text-4xl lg:text-5xl"
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: THEME.textTertiary,
          }}
        >
          Specialità
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5 lg:gap-2">
        <BeverageCard title="Espresso" description="Il classico caffè" />
        <BeverageCard title="Latte" description="Bevande calde con latte" />
        <BeverageCard title="Cappuccino" description="Il classico con latte montato e schiuma" />
        <BeverageCard title="Macchiato" description="Un tocco di latte sul tuo espresso" />
      </div>
    </div>
  )
}

export default SpecialtiesSection