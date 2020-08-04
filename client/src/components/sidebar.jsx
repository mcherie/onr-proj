import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faSignal, faEnvelopeOpenText, faProjectDiagram, faFileImport, } from '@fortawesome/free-solid-svg-icons'


export const Sidebar = () => {

    const Box = styled.div`
        height: 100%;
        background: #03396c;
        width: 6vh;
        overflow-wrap: break-word;
        text-align: center;
    `

    const Tab = styled.div`
        display: flex;
        flex-direction: column;
        height: 25vh;
        justify-content: space-between;
        margin-top: 8vh;
        align-items: center;
        padding-right: 0.6vh;
    `

    const Separator =  styled.div`
        background: #2A2A2A; 
        width: 105%;
        height: 1px;
    `

    return (
        <Box>
            <Tab>
                    <Separator />
                    <FontAwesomeIcon icon={faThumbtack} size="1x" color="white" />
                    <Separator />
                    <FontAwesomeIcon icon={faSignal} size="xs" color="white" />
                    <Separator />
                    <FontAwesomeIcon icon={faEnvelopeOpenText} size="1x" color="white" />
                    <Separator />
                    <FontAwesomeIcon icon={faProjectDiagram} size="xs" color="white" />
                    <Separator />
                    <FontAwesomeIcon icon={faFileImport} size="1x" color="white" />
                    <Separator />
            </Tab>
        </Box>
    )
}
