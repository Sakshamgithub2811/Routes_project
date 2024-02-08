import React from 'react';
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";


const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex'>
      <Link to="/">
        <img src={logo} alt="Logo" width={300} height={300} loading="lazy"/>
      </Link>
      <nav >
        <ul className='flex gap-3'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className='flex ml-5 mr-3'>
        { !isLoggedIn && 
          <Link to="/login">
               <button onClick={()=>{
                setIsLoggedIn(false);
                

               }}>
                Login
               </button>           
          </Link>
        }
         { !isLoggedIn && 
          <Link to="/signup">
               <button>
                SignUp
               </button>           
          </Link>
        }
         { isLoggedIn &&
          <Link to="/logout">
               <button>
                LogOut
               </button>           
          </Link>
        }
         { isLoggedIn &&
          <Link to="/dashboard">
               <button>
                Dashboard
               </button>           
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar
