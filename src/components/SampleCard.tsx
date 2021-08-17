import { VFC } from "react"
import { Badge, Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { MdStar } from "react-icons/md"

type sampleCardProps = {
  cardList: Array<string>
}

export const SampleCard: VFC<sampleCardProps> = props => {
  const { cardList } = props
  return (
    <SimpleGrid minChildWidth="320px" gap={"40px"}>
      {cardList.map(text => {
        return (
          <Box>
            <Box p="5" maxW="320px" borderWidth="1px" m={"0 auto"}>
              <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
              <Flex align="baseline" mt={2}>
                <Badge colorScheme="pink">Plus</Badge>
                <Text
                  ml={2}
                  textTransform="uppercase"
                  fontSize="sm"
                  fontWeight="bold"
                  color="pink.800"
                >
                  Verified &bull; Cape Town
                </Text>
              </Flex>
              <Text
                mt={2}
                fontSize="xl"
                fontWeight="semibold"
                lineHeight="short"
              >
                Modern, Chic Penthouse with Mountain, City & Sea Views
              </Text>
              <Text mt={2}>$119/night</Text>
              <Flex mt={2} align="center">
                <Box as={MdStar} color="orange.400" />
                <Text ml={1} fontSize="sm">
                  <b>4.84</b> (190)
                </Text>
              </Flex>
            </Box>
          </Box>
        )
      })}
    </SimpleGrid>
  )
}
