import { Link } from "react-router"

type NavLogoProps = {
  brand: string;
  path: string;
}

function NavLogo({ brand, path }: NavLogoProps) {
  return (
    <Link to={path}>
      <span
        style={{
          fontFamily: "'Roboto Mono Variable', monospace",
          fontWeight: 150,
        }}
        className="font-bold text-white text-2xl">
          {brand}
      </span>
    </Link>
  )
}

export default NavLogo