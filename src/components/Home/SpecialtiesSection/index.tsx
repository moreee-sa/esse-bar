import { useTheme } from "@components/Theme/ThemeContext"
import { FaCoffee } from "react-icons/fa";

function SpecialtiesSection() {
  const { primary, text } = useTheme();

  return (
    <div className="bg-[#f3eae1] h-screen">
      {/* Testo */}
      <div className="w-full flex items-center justify-center p-5">
        <span
          className="text-4xl"
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: text,
          }}
        >
          Specialità
        </span>
      </div>

      {/* Specialità Section */}
      <div className="w-full flex justify-center">
        {/* Espresso */}
        <div className="flex flex-col items-center justify-start w-80 h-full">
          <div className="bg-[#904a1a] rounded-full p-4">
            <FaCoffee color={primary} size={50} />
          </div>
          <span
            className="text-3xl"
            style={{
              fontFamily: "'Mochiy Pop One', sans-serif",
              color: text,
            }}
          >
            Espresso
          </span>
          <span
            className="text-xl mt-2 text-center"
            style={{
              fontFamily: "'Nunito Sans Variable', sans-serif",
              fontWeight: 300,
              color: text,
            }}
          >
            Il classico caffè concentrato
          </span>
        </div>

        {/* VerticalDivider */}
        <div className="flex h-25">
          <div className="bg-[#d3c8b2] w-0.5 h-full" />
        </div>

        {/* Latte */}
        <div className="flex flex-col items-center justify-start w-80 h-full">
          <div className="bg-[#904a1a] rounded-full p-4">
            <FaCoffee color={primary} size={50} />
          </div>
          <span
            className="text-3xl"
            style={{
              fontFamily: "'Mochiy Pop One', sans-serif",
              color: text,
            }}
          >
            Latte
          </span>
          <span
            className="text-xl mt-2 text-center"
            style={{
              fontFamily: "'Nunito Sans Variable', sans-serif",
              fontWeight: 300,
              color: text,
            }}
          >
            Bevande calde con latte (cappuccino, latte macchiato)
          </span>
        </div>

      </div>
    </div>
  )
}

export default SpecialtiesSection