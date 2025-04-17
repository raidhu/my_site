import { Box, keyframes } from '@chakra-ui/react'

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg) scale(1); }
  25% { transform: translate(20px, -20px) rotate(10deg) scale(1.05); }
  50% { transform: translate(0, -40px) rotate(0deg) scale(1.1); }
  75% { transform: translate(-20px, -20px) rotate(-10deg) scale(1.05); }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); }
`

const AnimatedBackground = () => {
  const shapes = Array(8).fill(0).map((_, i) => ({
    size: Math.random() * 200 + 100,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `-${Math.random() * 20}s`,
    duration: `${Math.random() * 10 + 20}s`,
    opacity: Math.random() * 0.4 + 0.3
  }))

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
      overflow="hidden"
      pointerEvents="none"
      sx={{
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)',
          backdropFilter: 'blur(100px)'
        }
      }}
    >
      {shapes.map((shape, i) => (
        <Box
          key={i}
          position="absolute"
          left={shape.left}
          top={shape.top}
          width={`${shape.size}px`}
          height={`${shape.size}px`}
          bg={i % 2 === 0 
            ? "linear-gradient(45deg, rgba(66, 153, 225, 0.5), rgba(66, 153, 225, 0.3))"
            : "linear-gradient(45deg, rgba(159, 122, 234, 0.5), rgba(159, 122, 234, 0.3))"}
          borderRadius="30%"
          sx={{
            animation: `${float} ${shape.duration} infinite ease-in-out`,
            animationDelay: shape.delay
          }}
          transform="translate(-50%, -50%)"
          boxShadow="xl"
          border="1px solid rgba(255, 255, 255, 0.4)"
          opacity={shape.opacity}
          _before={{
            content: '""',
            position: 'absolute',
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            background: 'inherit',
            borderRadius: 'inherit',
            filter: 'blur(15px)',
            opacity: 0.8
          }}
        />
      ))}
    </Box>
  )
}

export default AnimatedBackground 