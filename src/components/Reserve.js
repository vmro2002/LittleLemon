import React, {useState} from 'react'
import {HStack, VStack, useMediaQuery, Text, Box, Button, Spacer, Input} from '@chakra-ui/react'
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"

export default function Reserve(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')
    const [placeholder, setPlaceholder] = useState('Occasion')

    return(
        <>
        <Text fontFamily='Markazi Text' fontWeight='bold' fontSize='4em' pl={isLargerThan800? '40':'5'} py='4'>Reservations</Text>
        <VStack px={isLargerThan800? '40' : '5'} spacing={5}>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='5' minH='60px'>
               <HStack>
                    <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Date</Text>
                    <Spacer/>
                    <input type='date'/>
               </HStack>
            </Box>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='5' minH='60px'>
               <HStack>
                    <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Time</Text>
                    <Spacer/>
                    <input type='time'/>
               </HStack>
            </Box>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='4'>
               <HStack>
                    <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Number of guests</Text>
                    <Spacer/>
                    <NumberInput defaultValue={2} min={1} max={14} size='sm' maxW='20'>
                        <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
               </HStack>
            </Box>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='3'>
                <Menu>
                    <MenuButton as={Button} rightIcon={placeholder === "Occasion"? <FontAwesomeIcon icon={faChevronDown}/>:<FontAwesomeIcon icon={faChevronUp}/>} onClick={() => setPlaceholder("Occasion")} minW='xs' mx='5'>
                        <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{placeholder}</Text>
                    </MenuButton>
                    <MenuList minW='xs'>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Birthday")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Birthday</Text></MenuItem>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Anniversary")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Anniversary</Text></MenuItem>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Engagement")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Engagement</Text></MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='4'>
                <Input size='sm' placeholder="Please enter your name"/>
            </Box>
            <Button colorScheme='yellow'>Submit</Button>
        </VStack>
        </>
    )
}