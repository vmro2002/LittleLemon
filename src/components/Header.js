import React from 'react'
import {Text, HStack, Flex, Spacer, Center, useMediaQuery} from '@chakra-ui/react'
import logo from '../images/Logo.svg'
import icon from '../icons/hamburgericon.svg'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
  } from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export default function Header() {
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')

    const handleClick = (anchor) => () => {
        const id = anchor;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };


    //loginWithRedirect function redirects the user to Auth0 authorization page
    const { loginWithRedirect } = useAuth0();
    
    const handleLogin = async () => {

        await loginWithRedirect({
            //appState returnTo property is the path to the route once authorization is complete
            appState: {
              returnTo: "/dashboard",
            },
          });
    }

    const HeaderOption = () => {
        if (isLargerThan800) {
            return(
                <HStack spacing={8} pt='3'>
                    <Link to='/'><a href='#/Home' onClick={handleClick("Home")}><Text fontFamily='karla' fontWeight='bold' fontSize='1.2em'>Home</Text></a></Link>
                    <a href='#/About' onClick={handleClick("About")}><Text fontFamily='Karla' fontWeight='bold' fontSize='1.2em'>About</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.2em'>Menu</Text></a>
                    <Link to='/Reservations'><a href='#/Reservations'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.2em'>Reservations</Text></a></Link>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.2em'>Order Online</Text></a>
                    <Text onClick={handleLogin} fontFamily='Karla' fontWeight='bold' fontSize='1.2em'>Log In</Text>
                </HStack>
            )
        }
        else {
            return(
                <Menu>
                     <MenuButton
                        aria-label='Options'
                        py='4'
                      >
                       <Center> <img src={icon} alt='hamburger menu icon' size='xs'/></Center></MenuButton>
                      <MenuList>
                    <Link to='/'>
                        <MenuItem onClick={handleClick("Home")}>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>Home</Text></a>
                        </MenuItem>
                    </Link>
                            <MenuDivider/>
                        <MenuItem  onClick={handleClick("About")}>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>About</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>Menu</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                    <Link to='/Reservations'>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>Reservations</Text></a>
                        </MenuItem>
                    </Link>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>Order Online</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1em'>Log in</Text></a>
                        </MenuItem>
                      </MenuList>
                </Menu>
            )
        }
    }

    return(
        <HStack px='8' py='2' id='Home'>
            <Flex w='100%'>
                <img src={logo} alt='Little Lemon Logo' width='202px' height='74px'/>
            <Spacer/>
            <nav>
                <HeaderOption/>
            </nav>
            </Flex>
        </HStack>
    )
}