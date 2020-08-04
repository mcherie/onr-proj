import React from "react"
import styled from "styled-components"
import {AreaChart} from "./area-chart"

export const Trend = ({ areaData }) => {

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
    `

    const Tab = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 1.5;
        margin-left: 2vh;
    `

    const Right = styled.div`
        flex: 0.8;
    `

    const Area = styled.div`
        height: 50vh;
        width: 75vh;
        margin: 50px;
        margin-top: 20vh;
    `

    const Box = styled.div`
        height: 4vh;
        width: auto;
        background: #196ba0;
        border-radius: 3px;
        font-size: 0.7em;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 1vh;
        padding-right: 1vh;
    `

    return (
        <Wrapper >
            <Content>
                <Title >QUALITY TREND SCORE</Title>
                <Tab >
                    <Box> Day </Box>
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