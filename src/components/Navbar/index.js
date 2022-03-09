import React from 'react'
import {Link} from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from '@chakra-ui/react';

function index() {
  return (
    <nav className={styles.nav}>
        <div className={styles.left}>
            <div className='logo'>
                
                <Link to="/">ecommerce</Link>
                
            </div>
            <ul className={styles.menu}>
                <li>
                    <Link to="/">Products</Link>
                </li>
            </ul>

        </div>
        
        <div className={styles.right}>

            <Link to="/signin">
                <Button colorScheme='pink'>Login</Button>
            </Link>
            <Link to="/signup">
                <Button colorScheme='blue'>Register</Button>
            </Link>

            
            
        </div>
        
    </nav>
  )
}

export default index