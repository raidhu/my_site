import { Box, Heading, Text, VStack, Button, useColorModeValue } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)

const Hero = () => {
  const textColor = useColorModeValue('gray.600', 'gray.300')

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = '/my_site/resume/Raidhu_Resume.pdf'
    link.download = 'Raidhu_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <AnimatePresence>
      <Box as="section" py={20} textAlign="center">
        <VStack spacing={6} align="center" maxW="800px" mx="auto">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h1" size="2xl" mb={4}>
              Hi, I'm Raidhu Beiucy Duraisamy
            </Heading>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" color={textColor} maxW="850px">
            A robotics engineer passionate about building intelligent, autonomous systems.
            I specialize in AI-driven automation, ROS-based development, and turning real-world
            challenges into robotic solutions.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              size="lg"
              colorScheme="blue"
              onClick={handleDownload}
            >
              Download Resume 😎
            </Button>
          </MotionBox>
        </VStack>
      </Box>
    </AnimatePresence>
  )
}

export default Hero 