import { Box, Flex, Button, useColorMode, Link, Icon } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box 
      as="header" 
      py={4} 
      px={8} 
      bg={colorMode === 'light' ? 'white' : 'gray.800'} 
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
        <Flex gap={6}>
          <Link href="#about" _hover={{ textDecoration: 'none' }}>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="#experience" _hover={{ textDecoration: 'none' }}>
            <Button variant="ghost">Experience</Button>
          </Link>
          <Link href="#skills" _hover={{ textDecoration: 'none' }}>
            <Button variant="ghost">Skills</Button>
          </Link>
          <Link href="#contact" _hover={{ textDecoration: 'none' }}>
            <Button variant="ghost">Contact</Button>
          </Link>
        </Flex>
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? <Icon as={MoonIcon} /> : <Icon as={SunIcon} />}
        </Button>
      </Flex>
    </Box>
  )
}

export default Header 