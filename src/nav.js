import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa';
import { LuPlaneTakeoff } from 'react-icons/lu';
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbMessage2, TbShoppingBagSearch } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiHeadphones } from 'react-icons/fi';
import { FaUser, } from "react-icons/fa";
import { CiLogin, CiLogout } from 'react-icons/ci'; 
import { TiHome } from "react-icons/ti";
//import {AiOutlineUser} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from './assets/LMlogo.png'
import './nav.css'


const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className='free'>
        
          <div className="icon">
          <LuPlaneTakeoff />
          </div>
          <p>FREE Shipping when shopping up to R800</p>
    </div>
    <div className='main_header'>
      <div className='container'>
        <div className='logo'>
        <img src={Logo} alt="logo" />
        </div> 
        <div className='search_box'>
          <input type='text' placeholder='Search your product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}>
            
          </input>
          <button onClick={() => searchbtn (search)}><FaSearch /></button>
          
        </div>
        <div className='icon'> 
          {
            isAuthenticated &&
            (
              <div className='account'>
              <div className='user_icon'>
              <FaUser />
              </div>
              <p>Hello, {user.name}</p>
            </div>
            )
          }

          <div className='auth'>
          {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
            :
            <button onClick={() => loginWithRedirect()}><CiLogin/></button>
          }
          
        </div>
          
        </div>
      </div>
    </div>
    <div className='header'>
      <div className='container'>
        <div className='nav'>
        <ul>
          <li>
            <Link to='/' className='link'>Home</Link>
          </li>

          <li>
            <Link to='/product' className='link'>Product</Link>
          </li>

          <li>
            <Link to='/about' className='link'>About</Link>
          </li>

          <li>
            <Link to='/contact' className='link'>Contact</Link>
          </li>
        </ul>
        
        </div> 

        <div className='second_icon'>
          <Link to="/" className='link'><AiOutlineHeart /></Link> 
          <Link to="/cart" className='link'><MdOutlineShoppingCart/></Link>
        
        </div>
        
      </div>

    </div>

    <div className='fixed-bottom'>
      <div className='block-container'>
        <div className='block-nav'>
        <ul>
          <li>
            <Link to='/' className='link'><TiHome/></Link>
          </li>

          <li>
            <Link to='/product' className='link'><TbShoppingBagSearch/></Link>
          </li>

          <li>
            <Link to='/about' className='link'><TbMessage2/></Link>
          </li> 
 
          <li>
            <Link to='/contact' className='link'><FiHeadphones/></Link>
          </li>

          <li>
            <Link to='/' className='link'><AiOutlineHeart/></Link>
          </li>

          <li>
            <Link to='/cart' className='link'><MdOutlineShoppingCart/></Link>
          </li>
        </ul>

        </div>
        
      </div>
    </div>
    </>
  )
}

/* check where bug starts (auth0) */

export default Nav
