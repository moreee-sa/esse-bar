import { Link } from "react-router"
import { useTheme } from "../Theme/ThemeContext";

type NavLinkProps = {
  name: string;
  path: string;
  highlighted?: boolean;
}

function NavLink({ name, path, highlighted=false }: NavLinkProps) {
  const { text } = useTheme();

  return (
    <Link to={path}>
      <div className={`group p-2 ${highlighted  && 'bg-white rounded-full hover:bg-[#b1a8a0] transition-colors duration-300'}`}>
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: text,
          }}
          className="font-bold text-lg"
        >
          {name}
        </span>
        {!highlighted &&
          <div
            className="h-px w-full group-hover:bg-[#7f5539] transition-colors duration-500"
          />
        }
      </div>
    </Link>
  )
}

export default NavLink