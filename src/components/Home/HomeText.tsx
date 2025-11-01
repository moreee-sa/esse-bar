import FadeContent from "@components/FadeContent"

function HomeText() {
  return (
    <div className="w-full lg:w-[40%] flex flex-col p-4">
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <span
          style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
          className="text-stone-900 text-3xl lg:text-8xl md:text-6xl text-wrap"
        >
          Dal 2025
        </span>
      </FadeContent>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <span
          style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
          className="text-stone-700 text-2xl lg:text-7xl md:text-5xl leading-7 md:leading-18 text-wrap"
          >
          creatività servita con la cura di un buon caffè
        </span>
      </FadeContent>
      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <span
          style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
          className="text-stone-700 text-base lg:text-lg leading-5 md:leading-6 text-wrap mt-6"
          >
          La nostra storia inizia oggi, con la stessa passione di chi ogni giorno crea esperienze da gustare, una tazza alla volta.
        </span>
      </FadeContent>
    </div>
  )
}

export default HomeText