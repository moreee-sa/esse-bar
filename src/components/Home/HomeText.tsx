import FadeContent from "@components/FadeContent"
import { CiCoffeeCup } from "react-icons/ci";
import '@fontsource-variable/playfair-display';
import { THEME } from "@/lib/constants";

function HomeText() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center absolute inset-0 z-10 w-full py-20">
      <div className="flex flex-col items-center">
        <span
          className="text-7xl md:text-8xl lg:text-9xl"
          style={{
            color: THEME.text,
            fontFamily: "'Playfair Display Variable', serif",
            fontWeight: 800,
          }}
        >
          ESSE
        </span>

        <div className="flex justify-center items-center gap-4">
          <div className="w-10 h-px" style={{ backgroundColor: THEME.text }} />
          <span
            className="text-2xl md:text-3xl lg:text-5xl"
            style={{
              color: THEME.text,
              fontFamily: "'Playfair Display Variable', serif",
              fontWeight: 600,
            }}
          >
            BAR
          </span>
          <div className="w-10 h-px" style={{ backgroundColor: THEME.text }} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <FadeContent blur={true} duration={800} delay={0} easing="ease-out" initialOpacity={0}>
          <span
            style={{
              fontFamily: "'Nunito Sans Variable', sans-serif",
              fontWeight: 400,
              color: THEME.textSecondary,
            }}
            className="text-base md:text-lg lg:text-xl text-wrap uppercase"
          >
            Assapora l’arte
          </span>
        </FadeContent>

        <FadeContent blur={true} duration={800} delay={200} easing="ease-out" initialOpacity={0} className="md:mt-1">
          <span
            style={{
              fontFamily: "'Nunito Sans Variable', sans-serif",
              fontWeight: 400,
              color: THEME.textSecondary,
            }}
            className="text-base md:text-lg lg:text-xl text-wrap uppercase"
          >
          di un caffè perfetto!
        </span>
        </FadeContent>
        <FadeContent blur={true} duration={800} delay={200} easing="ease-out" initialOpacity={0}>
          <div className="mt-5">
            <button
              className="outline-2 flex gap-1.5 items-center justify-center hover:bg-[#181a19] transition-colors duration-200 rounded-full p-3 md:p-5 text-sm md:text-lg "
              style={{ 
                fontFamily: "'Nunito Sans Variable', sans-serif",
                fontWeight: 300,
                color: THEME.text,
                outlineColor: THEME.text,
              }}
            >
              <CiCoffeeCup color={THEME.text} size={30} />
              Apri Menu
            </button>
          </div>
        </FadeContent>
      </div>

    </div>
  )
}

export default HomeText