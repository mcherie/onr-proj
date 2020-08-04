import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faThumbtack } from '@fortawesome/free-solid-svg-icons'

export const Title = () => {

    const Head = styled.div`
        background: #EBECEC;
        height: 7vh;
        margin-top: 2vh;
        margin-bottom: 3vh;
        padding-left: 20vh;
        padding-right: 12vh;
        color: #4C4F52;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    `

    return (
        <Head >
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{ padding: "1vh" }} />
            <text style={{
                marginLeft: "8vh",
                fontSize: "1.2em",
            }}>Diagnostic Tool</text>
            <FontAwesomeIcon icon={faThumbtack} size="lg" style={{
                padding: "1vh", 
                color: "#0170C5",
                marginLeft: "auto",
            }}/>
        </Head>
    )

}