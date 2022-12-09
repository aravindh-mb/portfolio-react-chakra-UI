import './App.css'
import {IconButton} from '@chakra-ui/button'
import {VStack,Flex,Heading,Spacer} from '@chakra-ui/layout'
import {useColorMode} from '@chakra-ui/color-mode'
import {FaLinkedin,FaGithub,FaInstagram,FaSun,FaMoon} from 'react-icons/fa'
import Header from './components/Header.jsx'

function App() {
const {colorMode,toggleColorMode} = useColorMode()

const isDark = colorMode==='dark'
return(
<VStack p='5' userSelect='none'>
  <Flex w="100%">
     <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>Aravindh</Heading>
     <Spacer/>
     <IconButton ml={2} icon={<FaLinkedin/>} isRound="true" onClick={()=>window.open("https://www.github.com/aravindh-mb")}></IconButton>
     <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={()=>window.open("https://www.github.com/aravindh-mb")}></IconButton>
     <IconButton ml={2} icon={<FaInstagram/>} isRound="true" onClick={()=>window.open("https://www.github.com/aravindh-mb")}></IconButton>
     <IconButton ml={2}
     icon={ isDark ? <FaSun/> : <FaMoon/> } 
     isRound="true"
     onClick={toggleColorMode}
     >
     </IconButton>
  </Flex>  
  <Header/>
  </VStack>


) 
}

export default App
