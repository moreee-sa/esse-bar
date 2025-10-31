import { Link } from "react-router"

type NavLinkProps = {
  name: string;
  path: string;
  highlighted?: boolean;
}

function NavLink({ name, path, highlighted=false }: NavLinkProps) {
  return (
    <Link to={path}>

      <div className={`group p-2 ${highlighted  && 'bg-[#008ea8] rounded-full hover:bg-[#035766] transition-colors duration-300'}`}>
        <span
          style={{
            fontFamily: "'Nunito Sans Variable', sans-serif",
            fontWeight: 150,
          }}
          className="font-bold text-white text-lg">
            {name}
        </span>
        {!highlighted &&
          <div className="h-0.5 w-full group-hover:bg-black transition-colors duration-500"></div>
        }
      </div>
    </Link>
  )
}

export default NavLink