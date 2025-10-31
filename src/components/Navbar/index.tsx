import NavLink from "@components/Navbar/NavLink"
import NavLogo from "@components/Navbar/NavLogo"

function Navbar() {
  return (
    <div className="bg-[#24252a] w-full flex items-center px-20 py-6 sticky top-0 z-10">
      <div className="w-[40%] h-full flex items-center">
        <NavLogo brand="ESSE" path="/" />
      </div>
      <div className="w-full h-full flex justify-end items-center gap-4">
        <NavLink name="Home" path="/" />
        <NavLink name="Menu" path="/menu" />
        <NavLink name="Contatti" path="/contatti" highlighted />
      </div>
    </div>
  )
}

export default Navbar