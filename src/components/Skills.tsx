import { Box, Heading, SimpleGrid, Text, Progress, VStack } from '@chakra-ui/react'

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Record<string, Skill[]> = {
  "Software & Programming Languages": [
    { name: "C & C++", level: 80, category: "Programming Languages" },
    { name: "Python", level: 85, category: "Programming Languages" },
    { name: "Object-Oriented Programming (OOP)", level: 85, category: "Programming Languages" },
    { name: "ROS & ROS2", level: 80, category: "Programming Languages" },
    { name: "Docker & Containerization", level: 75, category: "Programming Languages" }
  ],
  "Robotics & Systems Development": [
    { name: "SLAM (RTAB-Map)", level: 80, category: "Frontend" },
    { name: "Autonomous Navigation & Path Planning", level: 85, category: "Frontend" },
    { name: "Sensor Fusion (LiDAR, IMU, Depth Cameras)", level: 85, category: "Frontend" },
    { name: "Perception & Point Cloud Processing", level: 80, category: "Frontend" },
    { name: "API Integration with external systems (elevators, pallets)", level: 87, category: "Frontend" }

  ],
  " Tools & Technologies": [
    { name: "OpenCV (Computer Vision)", level: 80, category: "Backend" },
    { name: "Ubuntu/Linux Systems", level: 85, category: "Backend" },
    { name: "MQTT & IoT Integration", level: 75, category: "Backend" },
    { name: "Dockerized ROS nodes", level: 83, category: "Backend" }
  ]
}

const SkillBar = ({ skill }: { skill: Skill }) => (
  <Box mb={4}>
    <Text mb={2}>{skill.name}</Text>
    <Progress value={skill.level} colorScheme="blue" hasStripe size="sm" />
  </Box>
)

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <Box>
    <Heading size="md" mb={4}>{title}</Heading>
    <VStack align="stretch" spacing={2}>
      {skills.map((skill) => (
        <SkillBar key={skill.name} skill={skill} />
      ))}
    </VStack>
  </Box>
)

export const Skills = () => {
  return (
    <Box as="section" py={10} id="skills">
      <VStack spacing={8} align="stretch">
        <Heading as="h2" size="xl" textAlign="center">
          Skills
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCategory key={category} title={category} skills={skillList} />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default Skills 