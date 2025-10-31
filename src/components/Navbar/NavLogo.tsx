import { Link } from "react-router"

type NavLogoProps = {
  brand: string;
}

function NavLogo({ brand }: NavLogoProps) {
  return (
    <Link to={"/home"}>
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