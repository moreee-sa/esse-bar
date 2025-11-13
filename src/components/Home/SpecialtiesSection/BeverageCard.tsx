import { useTheme } from "@/components/Theme/ThemeContext";
import { FaCoffee } from "react-icons/fa"

type BeverageCardProps = {
  title: string;
  description: string;
}

function BeverageCard({ title, description }: BeverageCardProps) {
  const { primary, text } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-start w-40 h-full">
      <div className="bg-[#904a1a] rounded-full p-4">
        <FaCoffee color={primary} size={50} />
      </div>
      <span
        className="text-2xl md:text-3xl"
        style={{
          fontFamily: "'Mochiy Pop One', sans-serif",
          color: text,
        }}
      >
        {title}
      </span>
      <span
        className="text-lg md:text-xl mt-2 text-center p-1"
        style={{
          fontFamily: "'Nunito Sans Variable', sans-serif",
          fontWeight: 300,
          color: text,
        }}
      >
        {description}
      </span>
    </div>
  )
}

export default BeverageCard