import { useState } from "react"
import NavLogo from "@components/Navbar/NavLogo"
import NavLink from "@components/Navbar/NavLink";
import { CiMenuBurger, CiCircleRemove } from "react-icons/ci"

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    if (isOpen) {setIsOpen(false)}
    else {setIsOpen(true)}
  }

  return (
    <>
      <div className="bg-[#24252a] w-full items-center p-6 sticky top-0 z-10 flex md:hidden">
        <div className="w-full h-full flex items-center">
          <NavLogo brand="ESSE" path="/" />
        </div>
        <div className="w-full h-full flex justify-end items-center" onClick={() => handleMenu()}>
          {isOpen ? <CiCircleRemove color="white" size={30} /> : <CiMenuBurger color="white" size={30} />}
        </div>
      </div>

      <div className={`z-20 fixed top-0 right-0 w-full h-full transition-[backdrop-filter] duration-300 md:hidden ${isOpen ? 'translate-x-0 backdrop-blur-xs' : 'translate-x-full'}`} onClick={() => handleMenu()} />

      <div className={`z-30 fixed top-0 right-0 w-[250px] h-full bg-[#0e131f] transform transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-20 flex flex-col items-end justify-center p-6" onClick={() => handleMenu()}>
          {isOpen && <CiCircleRemove color="white" size={35} />}
        </div>
        <div className="flex flex-col items-center gap-4">
          <NavLink name="Home" path="/" />
          <NavLink name="Menu" path="/menu" />
        </div>
      </div>
    </>
  )
}

export default NavbarMobile