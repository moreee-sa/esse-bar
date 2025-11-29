import { Link } from "react-router"
import { THEME } from "@/lib/constants"
import '@fontsource-variable/playfair-display';

type NavLogoProps = {
  brand: string;
  path: string;
}

function NavLogo({ brand, path }: NavLogoProps) {
  return (
    <Link to={path}>
      <span
        style={{
          color: THEME.text,
          fontFamily: "'Playfair Display Variable', serif",
          fontWeight: 400
        }}
        className="font-bold text-2xl"
      >
        {brand}
      </span>
    </Link>
  )
}

export default NavLogo