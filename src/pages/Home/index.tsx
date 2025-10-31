import Navbar from "@/components/Navbar"

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-6 lg:px-20 lg:py-6">
        {/* Introduction */}
        <div className="flex flex-col justify-center items-center lg:flex-row rounded-xl overflow-hidden w-full">
          {/* Text */}
          <div className="w-full lg:w-[40%] flex flex-col p-4">
            <span
              style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
              className="text-stone-900 text-3xl lg:text-8xl md:text-6xl text-wrap"
            >
              Dal 2025
            </span>
            <span
              style={{ fontFamily: "'Libre Baskerville', serif", fontWeight: 400 }}
              className="text-stone-700 text-2xl lg:text-7xl md:text-5xl leading-7 md:leading-18 text-wrap"
            >
              creatività servita con la cura di un buon caffè
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-[60%]">
            <img
              src="image/drink_1.webp"
              alt=""
              className="object-cover w-full h-full rounded-xl lg:rounded-none"
            />
            <div
              className="absolute inset-0 bg-none lg:bg-linear-[90deg_in_oklab,rgba(255,255,255,1)_10%,rgba(208,212,203,0.2)_25%,rgba(0,0,0,0)_100%]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home