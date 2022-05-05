import { Flex, Grid, Icon, Image } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

import { RiArrowLeftSLine } from "react-icons/ri"

export function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== "/"

  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      p="1"
      h={["12", "24"]}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3,1fr)"
        justifyContent="center"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[14, 24]}
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          w={["18", "48"]}
          src="/images/logo.svg"
          alt="World trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}
