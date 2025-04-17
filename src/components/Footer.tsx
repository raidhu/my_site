import { Box, Container, Text, HStack, Link } from '@chakra-ui/react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" py={4} bg="blue.50">
      <Container maxW="container.lg">
        <HStack justify="space-between" align="center" flexWrap="wrap">
          <Text>
            © {currentYear} Raidhu Beiucy Duraisamy. All rights reserved.
          </Text>
          <HStack spacing={12}>
            <Link href="#about" color="gray.600" _hover={{ color: 'blue.500' }}>
              About
            </Link>
            <Link href="#experience" color="gray.600" _hover={{ color: 'blue.500' }}>
              Experience
            </Link>
            <Link href="#skills" color="gray.600" _hover={{ color: 'blue.500' }}>
              Skills
            </Link>
            <Link href="#contact" color="gray.600" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}

export default Footer 