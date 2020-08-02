import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Title = () => {

    const Head = styled.div`
        background: #D6D5D4;
        height: 8vh;
        margin-top: 2vh;
        display: flex;
        align-items: center; 
        padding-left: 21vh;
    `

    return (
        <Head >
            <FontAwesomeIcon icon={faGlobe} size="lg"/>
            <text style={{marginLeft: "1vh"}}>Diagnostic Tool</text>
        </Head>
    )

}