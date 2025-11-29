import { FaCoffee } from "react-icons/fa"
import { THEME } from "@/lib/constants";
import '@fontsource-variable/playfair-display';

type BeverageCardProps = {
  title: string;
  description: string;
}

function BeverageCard({ title, description }: BeverageCardProps) {  
  return (
    <div className="flex flex-col items-center justify-start w-40 h-full">
      <div className="bg-[#904a1a] rounded-full p-4">
        <FaCoffee color={THEME.text} size={50} />
      </div>
      <span
        className="text-2xl md:text-3xl"
        style={{
          color: THEME.text,
          fontFamily: "'Playfair Display Variable', serif",
          fontWeight: 400,
        }}
      >
        {title}
      </span>
      <span
        className="text-lg md:text-xl mt-2 text-center p-1"
        style={{
          color: THEME.text,
          fontFamily: "'Nunito Sans Variable', sans-serif",
          fontWeight: 300,
        }}
      >
        {description}
      </span>
    </div>
  )
}

export default BeverageCard