import { Divider, Flex, Heading } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Banner } from "../components/Banner"
import { Header } from "../components/Header"
import { Slider } from "../components/Slider"
import { Travel } from "../components/Travel"

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Travel />
      <Divider
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa ?<br />
        Então escolha seu continente.
      </Heading>

      <Slider />
    </Flex>
  )
}

export default Home
