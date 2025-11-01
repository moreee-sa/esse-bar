import NavbarDesktop from "@components/Navbar/NavbarDesktop"
import NavbarMobile from "@components/Navbar/NavbarMobile"
import ThemeContext, { defaultTheme } from "@components/Theme/ThemeContext"

function Navbar() {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <NavbarDesktop />
      <NavbarMobile />
    </ThemeContext.Provider>
  )
}

export default Navbar