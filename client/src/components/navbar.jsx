import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faSignal, faEnvelopeOpenText, faProjectDiagram, faFileImport, } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {

  const Wrapper = styled.div`
    background: #005b96;
    color: white;
    height: 6vh;
    margin-bottom: 3vh;
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
    transform: translateY(50%);
    display: flex;
    justify-content: space-between;
  `

  return (
    <Wrapper>
      <Title>Diagnostic Tool</Title>
      <Box>
        <span >Logged in as General User </span>&nbsp; |
        <FontAwesomeIcon icon={faThumbtack} size="xxs" color="white" style={{paddingLeft: "2vh"}}/>
        <FontAwesomeIcon icon={faSignal} size="1x" color="white" style={{paddingLeft: "2vh"}}/>
        <FontAwesomeIcon icon={faEnvelopeOpenText} size="1x" color="white" style={{paddingLeft: "2vh"}}/>
        <FontAwesomeIcon icon={faProjectDiagram} size="xs" color="white" style={{paddingLeft: "2vh"}} />
        <FontAwesomeIcon icon={faFileImport} size="1x" color="white" style={{paddingLeft: "2vh"}}/>
      </Box>
    </Wrapper>
  )
}