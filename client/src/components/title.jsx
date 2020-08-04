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
        padding-left: 21vh;
        color: #4C4F52;
        position: relative;
    `

    return (
        <Head >
            <FontAwesomeIcon icon={faGlobe} size="2x" style={{
                padding: "1vh", 
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)"
            }} />
            <text style={{
                marginLeft: "7vh",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.2em"
            }}>Diagnostic Tool</text>
            <FontAwesomeIcon icon={faThumbtack} size="lg" style={{
                padding: "1vh", 
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                marginLeft: "120vh",
                color: "#0170C5",
            }}/>
        </Head>
    )

}