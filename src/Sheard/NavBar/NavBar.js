import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assetes/guiter.png'
import { AuthContext } from '../../Context/AuthProvider';

const NavBar = () => {
  const {user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(e => console.error(e))
}

  const menuItems = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/shop'>Shop</Link></li>
    {user?.uid ?
            <>
                <li><Link to='/dashboard'>Shoping Cart</Link></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            : <li><Link to='/signup'>Sign Up</Link></li>}
  </>

  return (
    <div>
      <div className="navbar text-yellow-50 justify-between font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={2} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="text-xl font-bold">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={logo} alt='' />
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboardDrawer" tabIndex={3} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    </div>
  );
};

export default NavBar;