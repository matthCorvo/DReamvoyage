import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
    NavBtn,
    NavBtnLink} from './NavElements'




    
const Navbar = ({toggle}) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true) } else {
                setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

   ;
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'>
                    DREAM<br></br>&emsp;VOYAGE
                </NavLogo>
                <MobileIcon  onClick={toggle}>
                <FaBars />
                </MobileIcon>
                <NavMenu>
                <NavItem>
                        <NavLinks to='/' >Accueil</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/Trips'>Destinations</NavLinks>
                    </NavItem>
                    
                    
                </NavMenu>
                <NavBtn>
              <NavBtnLink to='/Register'>Mon compte</NavBtnLink>
          </NavBtn>
            </NavbarContainer>
        </Nav>     </IconContext.Provider>    
        </>
    );
};

export default Navbar;

