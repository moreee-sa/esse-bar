import FadeContent from "@components/FadeContent"
import { IoRestaurantOutline } from "react-icons/io5";
import { useTheme } from "@components/Theme/ThemeContext";

function HomeText() {
  const { primary, text } = useTheme();
  
  return (
    <div className="flex flex-col justify-center lg:justify-start absolute inset-0 z-10 w-full p-6 md:p-20 lg:px-52 lg:py-24 md:w-[70vw] lg:w-[80vw]">
      <FadeContent blur={true} duration={800} delay={50} easing="ease-out" initialOpacity={0}>
        <span
          style={{
            fontFamily: "'Mochiy Pop One', sans-serif",
          }}
          className="text-[#faf5f3] text-3xl md:text-5xl lg:text-6xl text-wrap"
        >
          ESSE
        </span>
      </FadeContent>

      <FadeContent blur={true} duration={800} delay={100} easing="ease-out" initialOpacity={0} className="md:mt-4 lg:mt-7">
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 200,
          }}
          className="text-[#faf5f3] text-2xl md:text-3xl lg:text-4xl leading-8 lg:leading-16 text-wrap"
        >
          Assapora l’arte di un caffè perfetto!
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
            <IoRestaurantOutline color={text} size={18} />
            Apri Menu
          </button>
        </div>
      </FadeContent>
    </div>
  )
}

export default HomeText