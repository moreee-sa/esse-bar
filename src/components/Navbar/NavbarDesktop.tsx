import NavLink from "@components/Navbar/NavLink"
import NavLogo from "@components/Navbar/NavLogo"
import { THEME } from "@/lib/constants"

function NavbarDesktop() {
  return (
    <div
      className="w-full items-center px-20 lg:px-52 py-6 sticky top-0 z-50 md:flex hidden"
      style={{
        backgroundColor: THEME.navbar
      }}
    >
      <div className="h-full flex items-center">
        <NavLogo brand="ESSE" path="/" />
      </div>
      <div className="w-full h-full flex justify-end items-center gap-4">
        <NavLink name="Home" path="/" />
        <NavLink name="Menu" path="/menu" />
        <NavLink name="Contatti" path="/contatti" highlighted infoIcon />
      </div>
    </div>
  )
}

export default NavbarDesktop