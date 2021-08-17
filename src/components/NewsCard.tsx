import { Box, Heading, Text } from "@chakra-ui/react"
import { VFC } from "react"

type Props = {
  title: string
  date: string
}

export const NewsCard: VFC<Props> = props => {
  return (
    <Box backgroundColor="whiteAlpha.500" border="solid 2px" width="500px">
      <Heading m="6px">{props.title}</Heading>
      <Text opacity={0.65} textAlign="right" mr="10px">
        {props.date}
      </Text>
    </Box>
  )
}
