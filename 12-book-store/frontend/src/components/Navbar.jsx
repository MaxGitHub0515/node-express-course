import {Link} from "react-router-dom"
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import avatarImage from "../assets/avatar.png"
import { useState } from "react";



const Navbar = () => {
  const currentUser = true;
  // React State ->> const [holder, updater] = definedstate(); 
  // holder - holds the state value, updater - updates the state 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigationData = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Cart Page", href: "/cart"},
    {name: "Orders", href: "/orders"},
    {name: "Check Out", href: "/checkout"},
  ];

  return (
    
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            <div className="flex items-center md:gap-16 gap-4">
                {/* Log and search bar */}
                <Link to="/">
                <HiMiniBars3CenterLeft className="size-6"/>
                </Link>
                <div className="relative sm:w-72 w-40 space-x-2">
                <IoSearchOutline className="absolute inline-block left-1 inset-y-2"/>
                <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"/>
                </div>
            </div>

            <div className="relative flex items-center md:space-x-3 space-x-2">
              <div>
                {
                     currentUser ? <>
                     <button className="flex items-center" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      {/* using dynamic classes after alt */}
                      <img src={avatarImage} alt="" className={`size-7 rounded-full 
                         ${currentUser ? 'ring-2 ring-blue-400' : ''}`}/>
                     </button>
                     
                      { 
                      
                        /* Remember: 
                        For && 
                        If the left side is truthy, the expression continues to the right side, and the value on the right is returned.
                        If the left side is falsy, the right side is ignored, and the left side is immediately returned without evaluating the right side.
                        For ||
                        it searches for the first truthy value and returns it 
                        */
                        // If isDropdownOpen is true, React will render the <div>.
                        isDropdownOpen && (
                          <div className="absolute right-0 w-48 mt-2 z-40  bg-white shadow-lg rounded-md">
                            <ul className="py-2">
                              {
                                navigationData.map((item) => (
                                  // with the key, React updates only the changed items instead of re-rendering the whole lis
                                  // close the menu if clicked on a link
                                    <li key={item.name} onClick={() => setIsDropdownOpen(false)}> 
                                    <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                      {item.name}
                                    </Link>
                                    
                                  </li>
                                )
                              )
                              }
                              
                            </ul>
                          </div>
                        )     
                     
                      }
            
                     </> : <Link to="/login">
                        <HiOutlineUser className="size-6" />
                     </Link>
                  }
              
              </div>
             
                <button className="hidden  sm:block">
                  <HiOutlineHeart className="size-6" />
                </button>
                <Link to="/cart" className="bg-amber-300 p-1 sm:px-6 px-2 flex items-center">
                <HiOutlineShoppingCart className="size-6"/>
                <span>0</span>


                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
