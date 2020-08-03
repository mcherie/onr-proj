import React, { useState } from "react"
import styled from "styled-components"

import { Circle } from "./circle"

export const Cards = ({ title, sample, score, fetchAreaData, selectedArea }) => {

    const Card = styled.div`
        height: 22vh;
        flex-basis: 30%;
        border: 1px solid blue;
        border-radius: 3px;
        margin-top: 3vh;
        // margin-bottom: 1vh;
        background: ${selectedArea == title ? "lightblue" : null};
        height: auto;
        color: darkblue;
        font-size: 0.9em;
    `

    return (
        <Card onClick={fetchAreaData}>
            {title}
            <br></br>
            Score: {score}
            <br></br>
            Sample: {sample}
            <Circle score={score} />
        </Card>
    )
}