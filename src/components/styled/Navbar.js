import { BiMenu, BiX } from "react-icons/bi";
import {Button} from './Button';
import { useState, useEffect } from 'react'
import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn
} from './Navbar.styles';
const Navbar = () => {
//click is the initial state and setclick will be the update state
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

//Create a function to handle the click state of the menu icon. 
//if the menu icon was the menu bar at the beginning when clicked it will have the close icon
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 700) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
      <div>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
                MusiqBox
            </NavLogo>
            <MenuIcon onClick={handleClick}>
                {click ? <BiX/> : <BiMenu/>}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">Sign Up</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">Log In</MenuLink>
              </MenuItem>
              <MenuItemBtn>
                {button?(
                  <MenuLinkBtn to="/home">
                    <Button primary>Get Started</Button>
                  </MenuLinkBtn>
                ): (
                  <MenuLinkBtn to="/home">
                    <Button primary bigFont onClick={closeMenu}>Get Started</Button>
                  </MenuLinkBtn>
                )
                }
              </MenuItemBtn>
            </Menu>
          </NavbarContainer>
        </Nav>
      </div>
    )
}

export default Navbar;