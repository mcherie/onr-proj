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
        flex: 1;
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
        flex: 1.2;
    `

    return (
        <Wrapper >
            <Content>
                <Title >QUALITY TREND SCORE</Title>
                <Tab >
                    <FontAwesomeIcon icon={faCalendarDay} size="lg" color="darkblue"/>
                    <FontAwesomeIcon icon={faCalendarWeek} size="lg" color="darkblue"/>
                    <FontAwesomeIcon icon={faCalendarCheck} size="lg" color="darkblue"/>
                    <FontAwesomeIcon icon={faDiceFour} size="lg" color="darkblue"/>
                    <FontAwesomeIcon icon={faDiceSix} size="lg" color="darkblue"/>
                    <FontAwesomeIcon icon={faGlassCheers} size="lg" color="darkblue"/>
                </Tab>
                <Right />
            </Content>
            <Area > <AreaChart areaData={areaData}/> </Area>
        </Wrapper>

    )

}