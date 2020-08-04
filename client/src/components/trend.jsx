import React from "react"
import styled from "styled-components"
import {AreaChart} from "./area-chart"

export const Trend = ({ areaData, selectedArea }) => {

    const Wrapper = styled.div`
        flex: 1.2;
        text-align: left;
    `
    const Content = styled.div`
        display: flex;
        align-items: center;
    `

    const Title = styled.div`
        flex: 1;
        color: #65696D;
        font-size: 1.1em;
        text-transform: uppercase;
        text-align: center;
    `

    const Tab = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 1.5;
        margin-left: 2vh;
    `

    const Right = styled.div`
        flex: 0.6;
    `

    const Area = styled.div`
        height: 50vh;
        width: 75vh;
        margin: 50px;
        margin-top: 15vh;
    `

    const Box = styled.div`
        height: 4vh;
        width: auto;
        background: #0071C5;
        border-radius: 3px;
        font-size: 0.8em;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 1vh;
        padding-right: 1vh;
        cursor: pointer;
        transition: 0.3s ease-out;
        margin-left: 1vh;

        &:hover {
            background: #04426F;
        }
    `

    return (
        <Wrapper >
            <Content>
                <Title >{selectedArea} TREND</Title>
                <Tab >
                    <Box style={{opacity: ".5"}}> Day </Box>
                    <Box> Week </Box>
                    <Box> Month </Box>
                    <Box> Quarter </Box>
                    <Box> Half </Box>
                    <Box> Year </Box>
                </Tab>
                <Right />
            </Content>
            <Area > <AreaChart areaData={areaData}/> </Area>
        </Wrapper>

    )

}