import React from 'react'
import {Button} from '@chakra-ui/button'
import {useColorMode} from '@chakra-ui/color-mode'
import {Image} from'@chakra-ui/image'
import {Stack,Flex,Circle,Heading,Box,Text} from '@chakra-ui/layout'
import {useMediaQuery} from '@chakra-ui/media-query'

export const Header = () => {
    const {colorMode} = useColorMode()
    const isDark = colorMode==='dark'

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (
    <Stack userSelect='none'>
        
       {isNotSmallerScreen && (
          <Circle position="absolute"
            bg="blue.500"
            opacity="0.1"
            w="150px"
            h="150px"
            alignSelf="flex-end"/>
        )}
        
    <Flex 
    direction={isNotSmallerScreen ? 'row' : 'column'}
    spacing={isNotSmallerScreen ?'1px' : '2px'}
    alignSelf='flex-start'
    p ={isNotSmallerScreen? '32px': 0}
    >
    <Box mt={isNotSmallerScreen?0:16} alignSelf='flex-start'>
    <Text fontSize='3xl'>Hi, I am</Text>
    <Text 
    fontSize='6xl' 
    bgGradient='linear(to-r,cyan.400,purple.400)' 
    fontWeignt="bold"
    bgClip='text'
    >Aravindh Arumugam</Text>

    <Text color={isDark ? 'grey.200' : 'grey.700'}>Frontend Developer , Designer looking for a job</Text>

    <Button alignSelf={isNotSmallerScreen ? 'center':'center'} bgGradient='linear(240deg,cyan.200,purple.200)' color='white' mt={4} >Hire Me</Button>
    </Box>
    <Image
     alignSelf='center'
     backgroundColor='transparent'
     boxSize={150}
     mt={10}
     ml={2}
     zIndex={1}
     src='https://avatars.githubusercontent.com/u/83901906?v=4'
     borderRadius='full'
     />
    </Flex>
    </Stack>
  )
}

export default Header