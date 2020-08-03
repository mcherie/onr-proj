import React, { useState } from "react"
import styled from "styled-components"

import { Circle } from "./circle"

export const Cards = ({ title, sample, score, fetchAreaData, selectedArea }) => {

    const Card = styled.div`
        height: 22vh;
        flex-basis: 25%;
        border: 1px solid blue;
        border-radius: 3px;
        margin-top: 3vh;
        margin-bottom: 3vh;
        background: ${selectedArea == title ? "green" : "white"};
    `

    return (
        <Card onClick={fetchAreaData}>
            {title}
            Score: {score}
            Sample: {sample}
            <Circle score={score} />
        </Card>
    )
}