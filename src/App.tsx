import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <Box minH="100vh" position="relative" overflow="hidden">
      <AnimatedBackground />
      <Box position="relative" bg="transparent">
        <Header />
        <Container maxW="container.lg" position="relative">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </Container>
        <Footer />
      </Box>
    </Box>
  )
}

export default App
