import React from 'react'
import {VStack, HStack, Text, Button, Spacer, useMediaQuery, Stack, Card, CardBody, Image,} from '@chakra-ui/react'
import bruchetta from '../images/bruchetta.svg'
import lemondes from '../images/lemoncake.png'
import greeksal from '../images/greek salad.jpg'


export default function Highlights(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')
    return(
        <VStack px={isLargerThan800? '40' : '5'} py='5'>
                <HStack w='100%'>
                    <Text fontFamily='Markazi Text' fontWeight='bold' fontSize='4em' >Specials</Text>
                    <Spacer/>
                    <Button colorScheme='yellow'>Online Menu</Button>
                </HStack>
                <Stack direction={isLargerThan800? 'row' : 'column'} justifyContent='center' alignItems='center' spacing={5}>
                    <Card maxW='sm' minH='md' bg='#EDEFEE'>
                        <CardBody p='0'>
                            <Image src={greeksal} alt='Greek Salad' borderRadius='lg'/>
                            <VStack spacing={5}>
                                <HStack w='100%' px='4'>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium'>Greek Salad</Text>
                                    <Spacer/>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium' color='#EE9972'>$12.99</Text>
                                </HStack>
                                <Text fontFamily='Karla' fontSize='1em' px='6'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic. </Text>
                            </VStack>
                            <Button colorScheme='black' variant='link' pl='4' pt='5'>
                                    Order a delivery
                            </Button>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' minH='md' bg='#EDEFEE'>
                        <CardBody p='0'>
                            <Image src={bruchetta} alt='Bruchetta' borderRadius='lg'/>
                            <VStack spacing={5}>
                                <HStack w='100%' px='4'>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium'>Bruchetta</Text>
                                    <Spacer/>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium' color='#EE9972'>$5.99</Text>
                                </HStack>
                                <Text fontFamily='Karla' fontSize='1em' px='6'>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </Text>
                            </VStack>
                            <Button colorScheme='black' variant='link' pl='4' pt='5'>
                                    Order a delivery
                            </Button>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' minH='md' bg='#EDEFEE'>
                        <CardBody p='0'>
                            <Image src={lemondes} alt='Lemon Dessert' borderRadius='lg' w='100%'/>
                            <VStack spacing={5}>
                                <HStack w='100%' px='4'>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium'>Lemon Dessert</Text>
                                    <Spacer/>
                                    <Text fontFamily='Markazi Text' fontSize='2em' fontWeight='medium' color='#EE9972'>$5.00</Text>
                                </HStack>
                                <Text fontFamily='Karla' fontSize='1em' px='6'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</Text>
                            </VStack>
                            <Button colorScheme='black' variant='link' pl='4' pt='5'>
                                    Order a delivery
                            </Button>
                        </CardBody>
                    </Card>
                </Stack>
        </VStack>
    )
}