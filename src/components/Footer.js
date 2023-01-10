import React from 'react'
import {HStack, Image, Text, Stack, useMediaQuery} from '@chakra-ui/react'
import footerpic from '../images/footerimg.png'

export default function Footer(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')
    return(
        <HStack py='1' justifyContent='center' spacing='10'>
            <Image src= {footerpic} alt='footer logo' height='10' objectFit='contain'/>
            <Stack direction={isLargerThan800? 'row' : 'column'} spacing={isLargerThan800? '10' : '0'}>
                <Text fontFamily='Karla' fontWeight='bold' fontSize='1em'>Chicago</Text>
                <Text fontFamily='Karla' fontWeight='bold' fontSize='1em'>+1 XXX-XXX-XXX</Text>
                <a href='mailto: littlelemon@example.com'><Text fontFamily='Karla' fontWeight='bold' fontSize='1em'>littlelemon@example.com</Text></a>
            </Stack>
        </HStack>
    )
}