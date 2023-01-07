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

export default function Header() {
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')
    const HeaderOption = () => {
        if (isLargerThan800) {
            return(
                <HStack spacing={8}>
                    <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Home</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.6em'>About</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.6em'>Menu</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.6em'>Reservations</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.6em'>Order Online</Text></a>
                    <a href='#/.'><Text fontFamily='Karla' fontWeight='bold' fontSize='1.6em'>Log In</Text></a>
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
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Home</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>About</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Menu</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Reservations</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Order Online</Text></a>
                        </MenuItem>
                            <MenuDivider/>
                        <MenuItem>
                            <a href='#/.'><Text fontFamily='karla' fontWeight='bold' fontSize='1.6em'>Log in</Text></a>
                        </MenuItem>
                      </MenuList>
                </Menu>
            )
        }
    }

    return(     
        <HStack px='8' py='4'>
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