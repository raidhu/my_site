import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, VStack, useToast, HStack, Link, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const Contact = () => {
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
  }

  const socialLinks = [
    {
      label: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/raidhu'
    },
    {
      label: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/raidhu/'
    },
    {
      label: 'Email',
      icon: FaEnvelope,
      url: 'raidhu.beiucy@outlook.com'
    }
  ]

  return (
    <Box as="section" py={10} id="contact">
      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Contact Me
        </Heading>

        <HStack justify="center" spacing={6}>
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.url}
              isExternal
              _hover={{ color: 'blue.500' }}
            >
              <Icon as={link.icon} w={8} h={8} />
            </Link>
          ))}
        </HStack>

        <Box as="form" onSubmit={handleSubmit} maxW="container.md" mx="auto">
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="your.email@example.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your message" rows={6} />
            </FormControl>

            <Button type="submit" colorScheme="blue" size="lg" w="full">
              Send Message
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default Contact 