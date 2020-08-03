import React from "react"

import styled from "styled-components"
import {AreaChart} from "./area-chart"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCalendarWeek, faCalendarCheck, faDiceFour, faDiceSix, faGlassCheers, } from '@fortawesome/free-solid-svg-icons'

export const Trend = ({ areaData }) => {

    // this should be for the whole trend itself, so flex equal with "filters"
    const Wrapper = styled.div`
        flex: 1.2;
        text-align: left;
    `
    const Content = styled.div`
        display: flex;
        align-items: center;
    `


    const Tab = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 0.9;
    `

    const Right = styled.div`
        flex: 1;
    `

    const Area = styled.div`
        height: 40vh;
        width: 60vh;
        margin: 50px;
        margin-top: 20vh;
    `

    const Title = styled.div`
        flex: 1;
        color: #65696D;
    `

    return (
        <Wrapper >
            <Content>
                <Title >QUALITY TREND SCORE</Title>
                <Tab >
                    <FontAwesomeIcon icon={faCalendarDay} size="lg" color="#03396c"/>
                    <FontAwesomeIcon icon={faCalendarWeek} size="lg" color="#03396c"/>
                    <FontAwesomeIcon icon={faCalendarCheck} size="lg" color="#03396c"/>
                    <FontAwesomeIcon icon={faDiceFour} size="lg" color="#03396c"/>
                    <FontAwesomeIcon icon={faDiceSix} size="lg" color="#03396c"/>
                    <FontAwesomeIcon icon={faGlassCheers} size="lg" color="#03396c"/>
                </Tab>
                <Right />
            </Content>
            <Area > <AreaChart areaData={areaData}/> </Area>
        </Wrapper>

    )

}