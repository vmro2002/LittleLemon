import React, {useState, useEffect} from 'react'
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
    const [guests, setGuests] = useState('Number of Guests')
    const guestnum = ['1 Guest' ,'2 Guests', '3 Guests', '4 Guests',
                      '5 Guests' ,'6 Guests', '7 Guests', '8 Guests',
                      '9 Guest' ,'10 Guests', '11 Guests', '12 Guests']
    const [availabletimes, setAvailabletimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    const [time, setTime] = useState('Select time')
    const [dateinput, setDateinput] = useState('')
    function Trying(e) {
        e.preventDefault()
        console.log(dateinput)
        
        
    }

    return(
        <>
        <Text fontFamily='Markazi Text' fontWeight='bold' fontSize='4em' pl={isLargerThan800? '40':'5'} py='4'>Reservations</Text>
        <VStack px={isLargerThan800? '40' : '5'} spacing={5}>
            <Box borderRadius='lg' borderWidth='1px' minW='sm' borderColor='black' p='5' minH='60px'>
               <HStack>
                    <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Date</Text>
                    <Spacer/>
                    <input type='date' value={dateinput} onChange={e => setDateinput(e.target.value)} onBlur={e => Trying(e)}/>
               </HStack>
            </Box>
            <Menu>
                    <MenuButton as={Button} variant='outline' borderWidth='1px' borderColor='black' rightIcon={time === 'Select time'?<FontAwesomeIcon icon={faChevronDown}/>:<FontAwesomeIcon icon={faChevronUp}/>} onClick={() => setTime("Select time")} minW='xs' py='7'>
                        <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{time}</Text>
                    </MenuButton>
                    <MenuList minW='xs'>
                        {availabletimes.map((times) => (
                            <MenuItem justifyContent='center' onClick={() => setTime(times)}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{times}</Text></MenuItem>
                        ))}
                    </MenuList>
            </Menu>
            <Menu>
                    <MenuButton as={Button} variant='outline' borderWidth='1px' borderColor='black' rightIcon={guests === "Number of Guests"? <FontAwesomeIcon icon={faChevronDown}/>:<FontAwesomeIcon icon={faChevronUp}/>} onClick={() => setGuests("Number of Guests")} minW='xs' py='7'>
                        <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{guests}</Text>
                    </MenuButton>
                    <MenuList minW='xs'>
                        {guestnum.map((guest) => (
                            <MenuItem justifyContent='center' onClick={() => setGuests(guest)}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{guest}</Text></MenuItem>
                        ))}
                    </MenuList>
            </Menu>
            <Menu>
                    <MenuButton as={Button} variant='outline' borderColor='black' borderWidth='1px' rightIcon={placeholder === "Occasion"? <FontAwesomeIcon icon={faChevronDown}/>:<FontAwesomeIcon icon={faChevronUp}/>} onClick={() => setPlaceholder("Occasion")} minW='xs' py='7'>
                        <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{placeholder}</Text>
                    </MenuButton>
                    <MenuList minW='xs'>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Birthday")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Birthday</Text></MenuItem>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Anniversary")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Anniversary</Text></MenuItem>
                        <MenuItem justifyContent='center' onClick={() => setPlaceholder("Engagement")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Engagement</Text></MenuItem>
                    </MenuList>
            </Menu>
            <Input maxW='xs' borderColor='black' borderWidth='1px' borderRadius='lg' py='7' placeholder="Please enter your name"/>
            <Button colorScheme='yellow' >Submit</Button>
        </VStack>
        </>
    )
}