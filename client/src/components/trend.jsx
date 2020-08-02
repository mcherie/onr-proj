import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCalendarWeek, faCalendarCheck, faDiceFour, faDiceSix, faGlassCheers, } from '@fortawesome/free-solid-svg-icons'

export const Trend = () => {

    // this should be for the whole trend itself, so flex equal with "filters"
    const Wrapper = styled.div`
        flex: 1.2;
        text-align: left;
    `
    const Content = styled.div`
        background: blue;
        display: flex;
    `


    const Tab = styled.div`
        display: flex;
        justify-content: space-between;
        flex: 1.5;
    `

    const Right = styled.div`
    flex: 1;
`

    const Area = styled.div`
        background: grey;
        height: 30vh;
        width: 30vh;
    `

    const Title = styled.div`
        flex: 1;
    `

    return (
        <Wrapper >
            <Content>
                <Title >QUALITY TREND SCORE</Title>
                <Tab >
                    <FontAwesomeIcon icon={faCalendarDay} size="2x" />
                    <FontAwesomeIcon icon={faCalendarWeek} size="2x" />
                    <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
                    <FontAwesomeIcon icon={faDiceFour} size="2x" />
                    <FontAwesomeIcon icon={faDiceSix} size="2x" />
                    <FontAwesomeIcon icon={faGlassCheers} size="2x" />
                </Tab>
                <Right />
            </Content>
        </Wrapper>

    )

}