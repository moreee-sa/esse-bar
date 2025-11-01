import FadeContent from "@components/FadeContent"

function HomeImage() {
  return (
    <div className="relative w-full lg:w-[60%]">
      <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
          <img
            src="image/drink_1.webp"
            alt=""
            className="object-cover w-full h-full rounded-md lg:rounded-none"
            />
          <div
            className="absolute inset-0 bg-none lg:bg-linear-[90deg_in_oklab,rgba(255,255,255,1)_10%,rgba(208,212,203,0.2)_25%,rgba(0,0,0,0)_100%]"
            />
      </FadeContent>
    </div>
  )
}

export default HomeImage