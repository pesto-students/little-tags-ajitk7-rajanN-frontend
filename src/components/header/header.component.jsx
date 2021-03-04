import React from 'react';
import './header.styles.scss';
import { Link} from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = () => (
    <div className='header'>
       
    <div class="topnav">
    <a>
        <div class="Menu"></div>
        <div class="Menu"></div>
        <div class="Menu"></div>
    </a>
    <a class="logo">Little Tags</a>
    <a class="active">Home</a>
  <a>About</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a>Mens</a>
      <a>Womens</a>
      <a>Kids</a>
    </div>
  </div>
  <a>Contact us</a>
  
  <div class="Search_searchBox__2157V" aria-hidden="true">
      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="text" placeholder="Search for products.." value=""/>
      </div>
      <div class="Welcome">Welcome, Rajan</div>
<div class="Icon">
<span class="Header_badge__bklo6">0</span>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>
  </div>
          
</div>
        
        



        

        
    </div>

)

export default Header;
