import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

interface CaracteristicaProps {
  icon: string
  text: string
}

export function Types({ icon, text }: CaracteristicaProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image
          src={`/images/${icon}.svg`}
          alt="Icon"
          w="85px"
          h="85px"
          mb="6"
        />
      ) : (
        <Text color="yellow.500" fontSize="4xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.800" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  )
}
