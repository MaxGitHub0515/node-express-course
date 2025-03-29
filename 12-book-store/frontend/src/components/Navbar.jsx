import {Link} from "react-router-dom"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            <div className="flex items-center md:gap-16 gap-4">
                Log and search bar
                <Link to="/">
                <HiMiniBars3CenterLeft className="size-6"/>
                </Link>
                <div className="relative sm:w-72 w-40 space-x-2">
                <IoSearchOutline className="absolute inline-block left-3 inset-y-2"/>
                <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                </div>
            </div>

            <div>
                nav items here
            </div>
        </nav>
    </header>
  )
}

export default Navbar
