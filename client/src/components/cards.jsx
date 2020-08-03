import React, {useCallback} from "react"
import styled from "styled-components"

import {Circle} from "./circle"

export const Cards = ({title, sample, score, fetchAreaData}) => {

    const Card = styled.div`
        height: 22vh;
        flex-basis: 25%;
        border: 1px solid blue;
        border-radius: 3px;
        margin-top: 3vh;
        margin-bottom: 3vh;
    `

    const updateAreaChart = useCallback(() => fetchAreaData(title), [fetchAreaData, title])

    return (
        <Card onClick={updateAreaChart}>
            {title}
            Score: {score}
            Sample: {sample}
            <Circle score={score} />
        </Card>
    )
}