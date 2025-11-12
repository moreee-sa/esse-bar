import FadeContent from "@components/FadeContent"
import { CiCoffeeCup } from "react-icons/ci";
import { useTheme } from "@components/Theme/ThemeContext";

function HomeText() {
  const { primary, text } = useTheme();
  
  return (
    <div className="flex flex-col justify-center lg:justify-start absolute inset-0 z-10 w-full p-6 md:p-20 lg:px-52 lg:py-24 md:w-[70vw] lg:w-[80vw]">
      <FadeContent blur={true} duration={800} delay={0} easing="ease-out" initialOpacity={0}>
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 200,
          }}
          className="text-[#faf5f3] text-2xl md:text-3xl lg:text-4xl text-wrap"
        >
          Assapora l’arte
        </span>
      </FadeContent>

      <FadeContent blur={true} duration={800} delay={200} easing="ease-out" initialOpacity={0} className="md:mt-2">
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 200,
          }}
          className="text-[#faf5f3] text-2xl md:text-3xl lg:text-4xl text-wrap"
        >
        di un caffè perfetto!
      </span>
      </FadeContent>

      <FadeContent blur={true} duration={800} delay={200} easing="ease-out" initialOpacity={0}>
        <div className="mt-3 md:mt-9">
          <button
            className="flex gap-1.5 items-center justify-center hover:bg-[#db812d] transition-colors duration-200 rounded-full p-3 md:p-5 text-sm md:text-lg "
            style={{ 
              fontFamily: "'Nunito Sans Variable', sans-serif",
              fontWeight: 300,
              backgroundColor: primary,
              color: text
            }}
          >
            <CiCoffeeCup color={text} size={30} />
            Apri Menu
          </button>
        </div>
      </FadeContent>
    </div>
  )
}

export default HomeText