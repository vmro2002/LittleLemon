import React from 'react'
import {Stack, Button, useMediaQuery, Text, VStack, Image} from '@chakra-ui/react'
import photo from '../images/heropic.jpg'



export default function Hero(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')
    const HeroPhoto = () => {
        if (isLargerThan800) {return(
        <Image src={photo} alt='Food Pic' height='375' width='324' borderRadius='16'/>
    )}
    }
    return(
       <Stack direction={isLargerThan800? 'row' : 'column'} backgroundColor='#495E57'  justifyContent='center' alignItems='center' p={5} spacing='75px'>
            <VStack spacing={25}>
                <Stack spacing={-10} direction = 'column'>
                    <Text fontFamily='Markazi Text' fontWeight='medium' fontSize='4em' color='#F4CE14'>Little Lemon </Text>
                    <Text fontFamily='Markazi Text' fontWeight='medium' fontSize='2.5em' color='white'>Chicago</Text><br/><br/>
                    <Text fontFamily='Karla' fontSize='1em' color='white' >Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.</Text>
                </Stack>
                <Button colorScheme='yellow'>Reserve a Table</Button>
            </VStack>       
            <HeroPhoto/>
       </Stack>
    )
}