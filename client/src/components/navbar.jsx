import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faSignal, faEnvelopeOpenText, faProjectDiagram, faFileImport, } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

  const Wrapper = styled.div`
    background: #406DE5;
    color: white;
    height: 5vh;
    margin-bottom: 2vh;
    padding-left: 10vh;
    position: relative;
  `

  const Title = styled.div`
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
  `

  const Box = styled.div`
    float: right;
    text-align: right;
    padding-right: 10vh;
    transform: translateY(40%);
    display: flex;
    justify-content: space-between;
    width: 50vh;
  `

  return (
    <Wrapper>
      <Title>Diagnostic Tools</Title>
      <Box>
        Logged in as General User |
        <FontAwesomeIcon icon={faThumbtack} size="m" color="white" />
        <FontAwesomeIcon icon={faSignal} size="xs" color="white" />
        <FontAwesomeIcon icon={faEnvelopeOpenText} size="m" color="white" />
        <FontAwesomeIcon icon={faProjectDiagram} size="xs" color="white" />
        <FontAwesomeIcon icon={faFileImport} size="m" color="white" />
      </Box>
    </Wrapper>
  )
}