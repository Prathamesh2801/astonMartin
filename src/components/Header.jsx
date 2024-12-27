import Logo from "../assets/fL.png";

export default function Header() {
  return (
    <div className="drawer  z-50 " >
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar py-3 text-white fixed w-full">
          <div className="navbar-start">
            <label htmlFor="my-drawer" className="drawer-button ">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
            </label>
          </div>

          <div className="navbar-end mx-5">
            <a className="btn text-white bg-transparent mx-5 hover:bg-white hover:text-black">Configure</a>
            <a className="btn text-white bg-transparent hover:bg-white hover:text-black">Enquire</a>
          </div>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              <img src={Logo} alt="" style={{ height: "3.3rem" }} />
            </a>
          </div>
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  );
}
