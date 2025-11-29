import { Link } from "react-router"
import { FiPhone } from "react-icons/fi";
import { THEME } from "@/lib/constants";

type NavLinkProps = {
  name: string;
  path: string;
  highlighted?: boolean;
  infoIcon?: boolean;
}

function NavLink({ name, path, highlighted=false, infoIcon=false }: NavLinkProps) {
  return (
    <Link to={path}>
      <div className={`group px-4 py-2 ${highlighted  && 'outline-2 hover:outline-white rounded-full hover: transition-colors duration-300'}`}>
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 400,
            color: THEME.text,
          }}
          className="font-bold text-lg flex justify-center items-center gap-2"
        >
          {infoIcon && <FiPhone size={20} color={THEME.text} />}
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