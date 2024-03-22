import Link from "next/link";
import logo from "../../../../public/logo.jpeg";
import Image from "next/image";

const Navbar = () => {
  const navmenu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <details>
          <summary>Categories</summary>
          <ul className="p-2">
            <li>
              <Link href="/kids-wear">Kids-Wear</Link>
            </li>
            <li>
              <Link href="/children-cloths">Baby-Wear</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/flash-sale">Flash-Sale</Link>
      </li>
      <li>
        <Link href="/about">About-Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact-Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navmenu}
          </ul>
        </div>

        <Image
          src={logo}
          alt="logo"
          width={200}
          height={200}
          className="w-12 h-12 rounded-full"
        />
        {/* </a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navmenu}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/dashboard" className="">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
