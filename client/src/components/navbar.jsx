import React from "react"
import styled from "styled-components"

export const Navbar = () => {

  const Wrapper = styled.div`
    background: #406DE5;
    color: white;
    height: 5vh;
    margin-bottom: 2vh;
    padding-left: 10vh;
    display: flex;
    align-items: center;  
  `

  const Box =  styled.div`
    float: right;
    text-align: right;
  `

  return (
    <Wrapper>
      <text style={{float: "left"}}>Diagnostic Tools</text>
      <Box>Hello</Box>
    </Wrapper>
  )
}