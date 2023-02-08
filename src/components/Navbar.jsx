import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <>
        <nav>
            <ul>
               <li>
                    <Link to="/"><p>HOME</p></Link>
                </li>
                <li>
                    <Link to="users"><p>USERS</p></Link>
                </li>
                <li>
                    <Link to="posts"><p>POSTS</p></Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar;

