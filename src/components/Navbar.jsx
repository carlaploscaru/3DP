import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";
import {styles} from "../styles";
import {navLinks} from "../constants";
import {logo,menu,close} from '../assets';

const Navbar = () => {
  const [active, setActive]=useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={"${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary"}> 
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
      to="/"
      className="flex item-center gap-2"
      onClick={()=>{
        setActive("");
        window.scrollTo(0,0);
      }}
      >
        <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex"> CARLA Ploscaru &nbsp; <span className="sm:block hidden">|3D work</span></p>
      </Link>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {
          navLinks.map((Link)=>(
            <li
            key={Link.id}
            className={`${
              active===Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-slate-50 text-[18px] font-medium cursor-pointer`}//dinamic block of code
            onClick={()=> setActive(Link.title)}//on click work or about or contact se schimba in serch bar
            >
              <a href={`#${Link.id}`}>{Link.title}</a>;
            </li>
          ))
        }
      </ul>
      <div className="sm:hidden flex flex-1 justify-end align-items: center">
        <img
           src={toggle? close : menu}
           alt="menu"
           className="w-[28px] h-[28px] object-contain cursor-pointer"
           onClick={()=> setToggle(!toggle)} //for mobile navigation bar(daca am prea multe about,contact...) not working
      ></img>
      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-x1`}>
      <ul className="list-none hidden sm:flex flex-row gap-10">
        {
          navLinks.map((Link)=>(
            <li
            key={Link.id}
            className={`${
              active===Link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-slate-50 text-[18px] font-medium cursor-pointer`}//dinamic block of code
            onClick={()=> setActive(Link.title)}//on click work or about or contact se schimba in serch bar
            >
              <a href={`#${Link.id}`}>{Link.title}</a>;
            </li>
          ))
        }
      </ul>
      </div>
      </div>
    </div>
    </nav>
  )
}
export default Navbar