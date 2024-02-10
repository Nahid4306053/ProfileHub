import { NavLink } from "react-router-dom";
import '../../Scss/Navbar.scss'
import logo  from '/images/logo.png'
export default function Navbar() {
  const links = (
    <>
      <li> <NavLink to={'/'}>Users</NavLink> </li>
      <li> <NavLink to={'/add-user'}>Add User</NavLink> </li>
    </>
  );
  return (
    <div className="drawer bg-sky-100 sticky top-0 z-[999]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">

       <div className="container mx-auto">
       <div className="w-full navbar px-0">
     
          <div className="flex-1 px-2 mx-2"><img className="h-12" src={logo} alt="" /></div>
          <div className="flex-none hidden lg:block">
            <ul className="menu text-lg nav-manu  menu-horizontal">
              {links}
            </ul>
          </div>     
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
       </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {links}
        </ul>
      </div>
    </div>
  );
}
