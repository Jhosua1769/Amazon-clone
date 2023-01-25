import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { Button } from '@mui/material';

const linkStyle = {
  textDecoration: 'none'
};

function Header({ handleChange, handleSubmit, searchTerm }) {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {

    if (user) {
      auth.signOut();
    }
  }

  return (
    
    <div className='header'>
        <Link to="/">
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="" />
        </Link>
         
          <form onSubmit={handleSubmit} className='header__search'>         
          <input className="header__searchInput" value={searchTerm} type="text" onChange={handleChange}/>
          <Button type="submit" >
          <SearchIcon className='header__searchIcon'/>
          </Button>
          </form>
          
        <div className='header__nav'>
          {/* redirect only if there's no user */}
          <Link to= {!user && '/login'} style={linkStyle} className='Link_hover'>
          <div onClick={handleAuthenticaton} className='header__option'>
            <span className='header__optionLineOne'>Hello {!user ? 'Guest' :  user.email}</span>
            <span className='header__optionLineTwo'>{user ? 'Sign Out': 'Sign In'}</span>
          </div>
          </Link>
          <Link to='/orders' style={linkStyle} className='Link_hover'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
          </Link>
          <Link to='/' style={linkStyle} className='Link_hover'>
          <div className='header__option' >
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
          </Link>
          <Link to='/Checkout' preventScrollReset={true} style={linkStyle} className='Link_hover'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon className='basket'></ShoppingBasketIcon>
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
          </Link>
        </div>
    </div>
    
  )
}
// 2:20:50
export default Header