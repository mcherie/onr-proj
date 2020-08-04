import React from "react"
import styled from "styled-components"

import { Circle } from "./circle"

export const Cards = ({ title, sample, score, fetchAreaData, selectedArea }) => {

    const Card = styled.div`
        height: 22vh;
        flex-basis: 30%;
        border: 1px solid rgba(112, 112, 112, 0.3);
        border-radius: 3px;
        margin-top: 3vh;
        background: ${selectedArea == title ? "#F1F6FB" : null};
        height: auto;
        color: #005b96;
        font-size: 0.8em;
        text-align: center;
        padding-bottom: 1vh;
        padding-top: 1vh;
        box-shadow: 0 2px 1px -1px rgba(112, 112, 112, 0.3);
    `

    return (
        <Card onClick={fetchAreaData}>
            {title}
            <Circle score={score} />
            <span style={{ color: "#65696D" }}>Sample: {sample} </span>

        </Card>
    )
}