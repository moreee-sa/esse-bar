import { Link } from "react-router"
import { useTheme } from "../Theme/ThemeContext";

type NavLogoProps = {
  brand: string;
  path: string;
}

function NavLogo({ brand, path }: NavLogoProps) {
  const { text } = useTheme();

  return (
    <Link to={path}>
      <span
        style={{
          fontFamily: "'Roboto Mono Variable', monospace",
          fontWeight: 150,
          color: text
        }}
        className="font-bold text-2xl"
      >
        {brand}
      </span>
    </Link>
  )
}

export default NavLogo