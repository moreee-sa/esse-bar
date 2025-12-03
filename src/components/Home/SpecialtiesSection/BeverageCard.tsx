import { THEME } from "@/lib/constants";
import '@fontsource-variable/playfair-display';

type BeverageCardProps = {
  title: string;
  description: string;
}

function BeverageCard({ title, description }: BeverageCardProps) {  
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl drop-shadow-lg">
      {/* Image */}
      <div className="w-full h-full">
        <img
          src="image/coffee_1.webp"
          alt={title}
          className="w-full h-full object-cover object-top rounded-2xl opacity-0"
          fetchPriority="high"
        />
      </div>

      {/* Card Overlay */}
      <div
        className="w-full h-full absolute inset-0 flex flex-col justify-center items-center p-4 text-center rounded-2xl"
        style={{ backgroundColor: THEME.backgroundSecondary}}
      >
        <h1
          className="text-2xl md:text-3xl"
          style={{
            color: THEME.textTertiary,
            fontFamily: "'Playfair Display Variable', serif",
            fontWeight: 400,
          }}
        >
          {title}
        </h1>
        <p
          className="text-base md:text-lg mt-2"
          style={{
            color: THEME.textTertiary,
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 300,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default BeverageCard