import React from 'react'
import {Stack, useMediaQuery, Text, Image} from '@chakra-ui/react'
import abtphoto from '../images/manda.jpg'



export default function About(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')

    return(
       <Stack direction={isLargerThan800? 'row' : 'column'} backgroundColor='#495E57'  justifyContent='center' alignItems='center' p={5} spacing={isLargerThan800? '20' : '0'}>
            <Image height={isLargerThan800? '500' : '300'} src={abtphoto} alt='Mario and Adrian' borderRadius='16'/>
            <Stack spacing={-10} direction = 'column'>
                <Text fontFamily='Markazi Text' fontWeight='medium' fontSize='4em' color='#F4CE14'>Little Lemon </Text>
                <Text fontFamily='Markazi Text' fontWeight='medium' fontSize='2.5em' color='white'>Chicago</Text><br/><br/>
                <Text fontFamily='Karla' fontSize='1em' color='white' >Amet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do amet<br/> sint. Velit officia consequat duis enim<br/> velit mollit. Exercitation veniam<br/> consequat sunt nostrud amet.<br/> Amet minim mollit non deserunt<br/> ullamco est sit aliqua dolor do amet <br/>sint. Velit officia consequat duis enim <br/>velit mollit. </Text>
            </Stack>
       </Stack>
    )
}