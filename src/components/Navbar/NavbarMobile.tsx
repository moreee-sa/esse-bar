import { useState } from "react"
import NavLogo from "@components/Navbar/NavLogo"
import NavLink from "@components/Navbar/NavLink";
import { IoCloseOutline, IoMenuOutline  } from "react-icons/io5";
import { useTheme } from "../Theme/ThemeContext";

function NavbarMobile() {
  const { primary, secondary, text } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    if (isOpen) {setIsOpen(false)}
    else {setIsOpen(true)}
  }

  return (
    <>
      <div
        className="w-full items-center p-6 sticky top-0 z-50 flex md:hidden"
        style={{ backgroundColor: primary }}
      >
        <div className="w-full h-full flex items-center">
          <NavLogo brand="ESSE" path="/" />
        </div>
        <div className="w-full h-full flex justify-end items-center" onClick={() => handleMenu()}>
          <IoMenuOutline color={text} size={35} />
        </div>
      </div>

      <div className={`z-20 fixed top-0 right-0 w-full h-full transition-[backdrop-filter] duration-300 md:hidden ${isOpen ? 'translate-x-0 backdrop-blur-xs' : 'translate-x-full'}`} onClick={() => handleMenu()} />

      <div
        className={`z-60 fixed top-0 right-0 w-[250px] h-full transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: secondary }}
      >
        <div className="h-20 flex flex-col items-end justify-center p-6" onClick={() => handleMenu()}>
          {isOpen && <IoCloseOutline color={text} size={35} />}
        </div>
        <div className="flex flex-col items-center gap-4">
          <NavLink name="Home" path="/" />
          <NavLink name="Menu" path="/menu" />
          <NavLink name="Contatti" path="/contatti" />
        </div>
      </div>
    </>
  )
}

export default NavbarMobile