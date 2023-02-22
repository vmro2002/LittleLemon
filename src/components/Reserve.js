import React, {useState} from 'react'
import {HStack, VStack, useMediaQuery, Text, Box, Button, Spacer, Input} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
    ChakraProvider
  } from '@chakra-ui/react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import {fetchAPI, submitAPI} from './API'


export default function Reserve(){
    const [isLargerThan800] = useMediaQuery('(min-width: 1000px)')
    const [dateinput, setDateinput] = useState('')
    const [availabletimes, setAvailabletimes] = useState([])
    const [time, setTime] = useState('Select time')
    const [guests, setGuests] = useState('Number of Guests')
    const [placeholder, setPlaceholder] = useState('Occasion (optional)')
    const [username, setUsername] = useState("")

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const guestnum = ['1 Guest' ,'2 Guests', '3 Guests', '4 Guests',
                      '5 Guests' ,'6 Guests', '7 Guests', '8 Guests',
                      '9 Guest' ,'10 Guests', '11 Guests', '12 Guests']

    function updateTime(e) {
        e.preventDefault()
        setTime('Select time')
        let datein = new Date(dateinput)
        let newdates = fetchAPI(datein)
        setAvailabletimes(newdates)
    }

    function formValid(){
        let today = new Date()
        let dateinv = new Date(dateinput)
        if (dateinput !== null
            && dateinv > today
            && time !== 'Select time'
            && guests !== 'Number of Guests'
            && username.length > 3 )
            {
            return true
            }
    }

    function handleSubmit(e){
        e.preventDefault()
        const formdata = {day: dateinput,
                          timeofday: time,
                          noofguests: guests,
                          occasion: placeholder,
                          name: username}
        console.log(formdata)
        let res = submitAPI(formdata)
        if (res === true) {
            setIsOpen(true)
            setDateinput('')
            setTime('Select time')
            setAvailabletimes([])
            setGuests('Number of Guests')
            setPlaceholder('Occasion (optional)')
            setUsername('')
        }
    }

    return(
        <ChakraProvider>
            <Text fontFamily='Markazi Text' fontWeight='bold' fontSize='4em' pl={isLargerThan800? '40':'5'} py='4'>Reservations</Text>
                <form onSubmit={e => handleSubmit(e)}>
                    <VStack px={isLargerThan800? '40' : '5'} spacing={5}>
                        <Box borderRadius='lg' borderWidth='1px' minW='xs' borderColor='black' p='5' minH='60px'>
                            <HStack>
                                <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Date</Text>
                                    <Spacer/>
                                <input type='date' value={dateinput} onChange={e => setDateinput(e.target.value)} onBlur={e => updateTime(e)}/>
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
                            <MenuButton as={Button} variant='outline' borderColor='black' borderWidth='1px' rightIcon={placeholder === "Occasion (optional)"? <FontAwesomeIcon icon={faChevronDown}/>:<FontAwesomeIcon icon={faChevronUp}/>} onClick={() => setPlaceholder("Occasion (optional)")} minW='xs' py='7'>
                                <Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>{placeholder}</Text>
                            </MenuButton>
                            <MenuList minW='xs'>
                                <MenuItem justifyContent='center' onClick={() => setPlaceholder("Birthday")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Birthday</Text></MenuItem>
                                <MenuItem justifyContent='center' onClick={() => setPlaceholder("Anniversary")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Anniversary</Text></MenuItem>
                                <MenuItem justifyContent='center' onClick={() => setPlaceholder("Engagement")}><Text fontFamily='Karla' fontSize='1em' fontWeight='bold'>Engagement</Text></MenuItem>
                            </MenuList>
                        </Menu>
                        <Input maxW='xs' borderColor='black' borderWidth='1px' borderRadius='lg' py='7' placeholder="Please enter your name" value={username} onChange={e => setUsername(e.target.value)}/>
                        <Button colorScheme='yellow' type='submit' disabled={!formValid()} >Confirm Booking</Button>
                    </VStack>
                </form>
                <AlertDialog
                  motionPreset='slideInBottom'
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  isOpen={isOpen}
                  isCentered
                  borderRadius='lg'
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogBody>
                            <VStack>
                                <Text>Your booking has been confirmed!</Text>
                             </VStack>
                        </AlertDialogBody>
                        <AlertDialogFooter justifyContent='center'>
                            <Button ref={cancelRef} onClick={onClose}>DONE</Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
    </ChakraProvider>
 )
}
