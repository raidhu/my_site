import { Box, Heading, VStack, Text } from '@chakra-ui/react'

export const Experience = () => {
  return (
    <Box as="section" py={10} id="experience">
      <VStack spacing={6} align="start">
        <Heading as="h2" size="xl">
          Experience
        </Heading>
        <Text>
          Your professional experience will go here. We'll add more content soon!
        </Text>
      </VStack>
    </Box>
  )
}

export default Experience 