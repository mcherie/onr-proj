import React from "react"
import styled from "styled-components"

export const Navbar = () => {

  const Box = styled.div`
    background: blue;
    color: white;
    height: 5vh;
    margin-bottom: 2vh;
  `
  return (
    <Box>
      Diagnostic Tools
    </Box>
  )
}