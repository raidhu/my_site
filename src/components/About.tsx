import { Box, Heading, Text, SimpleGrid, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { FaRobot, FaCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

interface FeatureProps {
  title: string
  description: string
  icon: any
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      p={6}
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      textAlign="center"
    >
      <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{description}</Text>
    </MotionBox>
  )
}

const About = () => {
  const features = [
    {
      title: "Robotics Expertise",
      description: "Specialized in ROS/ROS2 development with experience in autonomous systems and humanoid robotics",
      icon: FaRobot
    },
    {
      title: "Software Development",
      description: "Proficient in multiple programming languages and frameworks for robotic systems",
      icon: FaCode
    },
    {
      title: "Education",
      description: "Advanced degree in Robotics Engineering with focus on autonomous systems",
      icon: FaGraduationCap
    }
  ]

  return (
    <Box as="section" py={20} id="about">
      <VStack spacing={12}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          textAlign="center"
          maxW="800px"
        >
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
          I am a Robotics Engineer with over 4 years of experience in designing 
          and deploying intelligent robotic systems powered by ROS and AI. My expertise 
          spans across autonomous navigation, perception, SLAM, and system integration, 
          with a focus on creating reliable and scalable automation solutions. I enjoy solving 
          real-world problems through robotics by combining technical innovation with practical 
          implementation, aiming to advance the field of human-centered intelligent machines.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default About 