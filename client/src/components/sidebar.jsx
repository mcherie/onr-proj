import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faSignal, faEnvelopeOpenText, faProjectDiagram, faFileImport, } from '@fortawesome/free-solid-svg-icons'


export const Sidebar = () => {

    const Box = styled.div`
        height: 100vh;
        background: #375C91;
        width: 5vh;
        overflow-wrap: break-word;
        text-align: center;
    `

    const Tab = styled.div`
        display: flex;
        flex-direction: column;
        height: 25vh;
        justify-content: space-between;
        margin-top: 7vh;
        display: flex;
        align-items: center;
        padding-right: 0.6vh;
    `

    return (
        <Box>
            <Tab>
                    <FontAwesomeIcon icon={faThumbtack} size="m" color="white"/>
                    <FontAwesomeIcon icon={faSignal} size="xs" color="white" />
                    <FontAwesomeIcon icon={faEnvelopeOpenText} size="m" color="white" />
                    <FontAwesomeIcon icon={faProjectDiagram} size="xs" color="white" />
                    <FontAwesomeIcon icon={faFileImport} size="m" color="white" />
            </Tab>
        </Box>
    )
}
