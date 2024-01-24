import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { useSelector } from "react-redux";


function Header() {
const Item= useSelector(state=>state.cart.cartItems)
  return (
    <>
      <div className="nav bg-gray-200">
        <img src="/pic/logo3.png" alt="" />
        <div className="right">
          <ul className="flex gap-12 -ml-96">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-black"}`
                }
              >
                <p className="hov"> Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/collection"
               
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-black"}`
                }
              >
                <p className="hov">Product</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Cart" className=" relative cursor-pointer">
                <BiShoppingBag className="text-3xl opacity-80"  />

                <p
                  className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center
                 justify-center text-[10px] bg-black text-white"
                >
                  {Item.length}
                </p>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="btnval">
          <button>
            {" "}
            <Link to="">Login</Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
