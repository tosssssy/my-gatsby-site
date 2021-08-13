import React from "react"
import { Link } from "gatsby"
import { chakra } from "@chakra-ui/react"


export const Header = () => {

  return (
    <>
    <chakra.div
    bg={"lightyellow"}
    d={"flex"}
    flexDir={"column"}
    >
    <Link to={"/"}>top</Link>
    <Link to={"/lesson1"}>lesson1</Link>
    <Link to={"/lesson2"}>lesson2</Link>
     </chakra.div>
    </>
  )
}
